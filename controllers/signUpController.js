module.exports = {
  // eslint-disable-next-line no-unused-vars
  index: function(req, res, next) {
    const context = {
      title: 'sign up'
    };
    res.render('login/signupView', context);
  }
}
