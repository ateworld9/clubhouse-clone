import passport from 'passport';
import { Strategy as GithubStrategy } from 'passport-github';
import { User } from '../../models';

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `http://localhost:${process.env.PORT}/auth/github/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const obj = {
          fullname: profile.displayName,
          avatarUrl: profile.photos?.[0].value,
          isActive: 0,
          username: profile.username,
          phone: '',
        };
        const findUser = await User.findOne({
          where: {
            username: obj.username,
          },
        });
        if (!findUser) {
          const user = await User.create(obj);
          return done(null, user.toJSON());
        }

        done(null, findUser.toJSON());
      } catch (error) {
        console.log('ERRRa', error);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    err ? done(err) : done(null, user);
  });
});

export { passport };
