const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
 // token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmI2YWYzYzgzMDZjYzRiZWUyNTlkOSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk0MTk4NTE2fQ.y1nOHGo2JdkF2wXCk0wxXkdLUTJOV6SgwhbRRMoTszo"
  return token;
};
