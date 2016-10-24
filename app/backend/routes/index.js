module.exports = function (app, router, passport) {
  app.use('/api', require('./protected.js')(router, passport));
  app.use('/api', require('./user.js')(router, passport));
};