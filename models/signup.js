const bcryptjs = require('bcryptjs');

module.exports = {
  getUser_type: function(connection, callback){
    connection.query("SELECT DISTINCT user_type FROM users;", callback)
  },
  createUser: async function (connection, data, callback){
    const {name, email, password, user_type} = data;
    let pwHash = await bcryptjs.hash(password, 8);
    connection.query("CALL createUser(?, ?, ?, ?)", [name, email, pwHash, user_type], callback )
  }
}
