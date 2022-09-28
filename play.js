const { connect } = require('./client');
const { setupInput } = require("./input");

// connect to server and begin playing
console.log("Connecting ...");


setupInput(connect());