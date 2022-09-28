const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and print
  conn.on('data', (data) => {
    console.log(data);
  });

  // once connection established, notify and send name
  conn.on('connect', () => {
    console.log('Connected to game server');
    conn.write('Name: Heh');
  })



  return conn;
};

console.log("Connecting ...");


module.exports = connect;