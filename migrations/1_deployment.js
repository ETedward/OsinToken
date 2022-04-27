const Token = artifacts.require("Token");

module.exports = function (deployer) {
  const start_time = 1651464000;
  deployer.deploy(Token, 100, start_time);
};