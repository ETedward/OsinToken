const Voting = artifacts.require('OSIVoting');

module.exports = async function (deployer) {
  await deployer.deploy(Voting, 100, 1651099591);
};