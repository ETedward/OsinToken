const Token = artifacts.require("Token");

module.exports = function (deployer) {
  const start_time = 1651099591;
  deployer.deploy(Token, 100, start_time);
};