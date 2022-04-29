const Voting = artifacts.require('OSIVoting');

module.exports = async function (deployer) {
  const start_time = 1651099591;
  await deployer.deploy(Voting, 100, start_time);
};