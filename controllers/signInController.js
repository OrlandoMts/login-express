/* eslint-disable no-unused-vars */
const con = require('../database/connection');
const signinModel = require('../models/signin');

module.exports = {
  index: function (req, res, next) {
    const context = {
      title: 'sign in'
    };
    res.render("login/signinView", context);
  }
}
