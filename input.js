// Stores the active TCP connection object
let connection;

// callback for key press event listener
const handleUserInput = function (data) {
  // Ctrl+C to quit
  if (data === '\u0003') {
    process.exit();
  }

  // bind movement commands to the WASD keys
  if (data === 'w') {
    connection.write('Move: up');
  }
  if (data === 'a') {
    connection.write('Move: left');
  }
  if (data === 's') {
    connection.write('Move: down');
  }
  if (data === 'd') {
    connection.write('Move: right');
  }
  
};

const setupInput = function (connObject) {
  connection = connObject;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = {setupInput};