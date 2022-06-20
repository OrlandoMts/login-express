const bcryptjs = require('bcryptjs');

module.exports = {
  getUser_type: function(connection, callback){
    connection.query(process.env.DISTINCT_USER_TYPE, callback)
  },
  createUser: async function (connection, data, callback){
    const {name, email, password, user_type} = data;
    let pwHash = await bcryptjs.hash(password, 8);
    connection.query(process.env.CREATE_USER, [name, email, pwHash, user_type], callback )
  },
  checkEmail: function(connection, data, callback){
    connection.query(process.env.GET_USER_BY_EMAIL, [data.email], callback)
  }
}
