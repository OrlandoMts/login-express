module.exports = {
  authentication: (connection, data, callback) => {
    connection.query(process.env.GET_USER_BY_ID, [data.id], callback);
  }
}
