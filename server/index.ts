import express from 'express';
import cors from 'cors';
import sharp from 'sharp';
import fs from 'fs';
import './misc/dotenv';
// import './core/db';
import multer from 'multer';
import { nanoid } from 'nanoid';
import { passport } from './core/passport';

import { Code } from '../models';
import { UserData } from '../pages';
import Axios from 'axios';

declare global {
  namespace Express {
    interface User extends UserData {}
  }
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

const uploader = multer({
  storage: multer.diskStorage({
    destination: function (_, __, cb) {
      cb(null, 'public/avatars');
    },
    filename: function (_, file, cb) {
      cb(null, file.fieldname + '-' + nanoid(6) + '.' + file.mimetype.split('/').pop());
    },
  }),
});

app.get('/test', (req, res) => {
  res.send('Hello');
});

app.post('/upload', uploader.single('photo'), (req, res) => {
  const filePath = req.file.path;
  const filename = req.file.filename;
  const filenameWithoutExtension = filename.slice(0, filename.lastIndexOf('.'));
  sharp(filePath)
    .resize(150, 150)
    .toFormat('jpeg')
    .toFile(`./public/avatars/${filenameWithoutExtension}-resized.jpeg`)
    .then(() => {
      fs.unlinkSync(filePath);
      res.json({ url: `/avatars/${filenameWithoutExtension}-resized.jpeg` });
      // need to update the user photo url
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  res.send(`<script>window.opener.postMessage('${JSON.stringify(req.user)}', '*');window.close();</script>`);
});

app.post('/auth/phone', async (req, res) => {
  const phone = req.body.phone;
  const userId = req.user.id;
  if (!phone) {
    res.status(400).send('no Phone');
  }

  const codeVal = Math.floor(Math.random() * (9999 - 1001)) + 1000;
  const code = await Code.create({
    code: codeVal,
    user_id: userId,
  });

  const data = await Axios.get(
    `https://sms.ru/sms/send?api_id=${process.env.SMS_API_KEY}&to[${phone}]=${codeVal}&json=1`
  );

});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
