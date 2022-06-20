module.exports = {
  authentication: (connection, data, callback) => {
    connection.query("SELECT * FROM users WHERE id = ?", [data.id], callback);
  }
}
