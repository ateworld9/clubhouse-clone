import express from 'express';
import './misc/dotenv';
// import './core/db';

const app = express();

import { passport } from './core/passport';

app.get('/test', (req, res) => {
  res.send('Hello');
});

app.use(passport.initialize());

app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  res.send(`<script>window.opener.postMessage('${JSON.stringify(req.user)}', '*');window.close();</script>`);
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
