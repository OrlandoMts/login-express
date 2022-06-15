/* eslint-disable no-unused-vars */
const con = require('../database/connection');
const signupModel = require('../models/signup');

const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  index: function(req, res, next) {
    signupModel.getUser_type(con, (err, data) => {
      try {
        const context = {
          title: 'sign up',
          users: data
        };
        res.render('login/signupView', context);
      } catch (error) {
        res.send(err);
      }
    })
  },

  register: (req, res) => {
    signupModel.createUser(con, req.body, (err) => {
      try {
        res.redirect('/');
      } catch (error) {
        res.send(err);
      }
    })
  }
}
