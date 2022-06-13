/* eslint-disable no-unused-vars */
module.exports = {
  index: function (req, res, next) {
    const context = {
      title: 'sign in'
    };
    res.render("login/signinView", context);
  }
}
