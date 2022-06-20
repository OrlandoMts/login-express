module.exports = {
  login: function(connection, data, callback) {
    connection.query("SELECT * FROM users WHERE email = ?", [data.email], callback)
  }
}
