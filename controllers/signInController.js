/* eslint-disable no-unused-vars */
const con = require('../database/connection');
const signinModel = require('../models/signin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  index: function (req, res, next) {
    const context = {
      title: 'sign in'
    };
    res.render("login/signinView", context);
  },

  login: function (req, res, next) {
    try {
      if(!req.body) {
        res.render('login/signinView')
      } else {
        const { email, password} = req.body;

        signinModel.login(con,req.body, async (err, results) => {
          //si no devuelve algo o la contraseña no coincide
          if(results.length == 0 || ! (await bcrypt.compare(password, results[0].password))){
            // INTENTAR RENDERIZAR LA VIEW Y ENVIARLE UN OBJETO PARA EL SWEET ALERT
            res.render("alerts/loginValidation");
          } else{
            // Configuracion de JWT
            const id =  results[0].id;
            const context = {
              title: 'home',
              name: results[0].name
            }

            const token = jwt.sign({id:id}, process.env.JWT_SECRET,{
              expiresIn: process.env.JWT_TIEMPO_EXPIRACION
            });
            //console.log(`token ${token} para el usuario con correo ${email}`)

            // Configuracion de cookies
            const cookiesOptions = {
              expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRACION * 24 * 60 * 1000),
              httpOnly: true
            }
            //'jwt' es el nombre con el que aparecerá en el navegador
            res.cookie('jwt', token, cookiesOptions);
            // res.render('alerts/homeSuccess');

             res.render('login/home', context);
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
