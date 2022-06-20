module.exports = {
  login: function(connection, data, callback) {
    connection.query(process.env.GET_USER_BY_EMAI, [data.email], callback)
  }
}
