const { promisify } = require('util');
const con = require('../database/connection');
const homeModel = require('../models/home');

module.exports = {
  index: (req, res) => {
    res.render('login/home');
  },
  isAuthenticated: async (req, res, next) => {
    //verificar la validacion del token
    const jwt = req.cookies.jwt;
    if (jwt){
      try {
        // eslint-disable-next-line no-undef
        const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);
        homeModel.authentication(con, decodificada, (error, results) => {
          if(!results) {
            return next()
          }
          req.user = results[0];
          return next();
        });
      } catch (error) {
        console.log(error);
        return next();
      }
    } else {
       res.redirect('/');
    }
  },
  logout: (req, res) => {
    res.clearCookie('jwt');
    return res.redirect('/')
  }
}
