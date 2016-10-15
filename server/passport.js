// define the local authentication strategy
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user.js');

const PassportUse = passport.use(new LocalStrategy(function(username, password, done) {
  process.nextTick(function() {
    User.findOne({
      where: {
        'username': username
      }
    }).then(function(user) {
      if (!user) {
        done(null, false, {
          message: 'Unknown user'
        });
      } else if (password != user.password) {
        done(null, false, {
          message: 'Invalid password'
        });
      } else {
        done(null, user);
      }
    }).error(function(err) {
      console.log('server error in passport')
      done(err);
    });
  });
}));

module.exports = { PassportUse };
