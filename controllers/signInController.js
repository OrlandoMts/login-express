/* eslint-disable no-unused-vars */
module.exports = {
  index: function (req, res, next) {
    const context = {};
    res.render("login/signinView", context);
  }
}
