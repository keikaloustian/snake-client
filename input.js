// callback for key press event listener
const handleUserInput = function (data) {
  // Ctrl+C to quit
  if (data === '\u0003') {
    process.exit();
  }

  
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = {setupInput};