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
    /**
     * Llamar al metodo de verificacion de email
     * si el metodo deveulve un resultado quiere decir que ya existe
     * enviar una alerta para informar que ese correo ya esta en uso,
     * de lo contrario
     * inserto el usuario en la bd
     */
    signupModel.checkEmail(con, req.body, (err, results) => {
      if ( results.length > 0) {
        res.render('alerts/emailValidation')
      } else {
          signupModel.createUser(con, req.body, (err) => {
            try {
              res.redirect('/signin');
            } catch (error) {
              res.send(err);
            }
          })
      }
    });

  }
}
