const net = require("net");
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and print
  conn.on('data', (data) => {
    console.log(data);
  });


  // once connection established
  conn.on('connect', () => {
    // display notification
    console.log('Connected to game server');

    // send name
    conn.write('Name: ZZZ');

    // // send move signals
    // conn.write("Move: up");

  })
  
  return conn;
};




module.exports = { connect };