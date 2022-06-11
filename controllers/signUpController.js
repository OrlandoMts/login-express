module.exports = {
  // eslint-disable-next-line no-unused-vars
  index: function(req, res, next) {
    const context = {};
    res.render('login/signupView', context);
  }
}
