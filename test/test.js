const Token = artifacts.require('Token');
// const timeMachine = require('ganache-time-traveler');

const SECONDS_PER_DAY = 86400;
const NOW = 1651099591;

async function shouldCauseRevert(fun) {
  let potentialError = null;

  try {
    await fun();
  }
  catch (error) {
    potentialError = error
  }

  return assert.ok(potentialError instanceof Error);
}

contract("Test contract", function(accounts) {

  let contract;
  const me = accounts[0];
  const you = accounts[1];

  before('deploy token', async function() {
    contract = await Token.deployed();
  });

  it("should give me all of the goverance tokens at the start", async function() {
    let supply = await contract.goveranceSupply();
    let myBalance = await contract.goveranceBalance(me);
    assert.equal(supply.toNumber(), myBalance.toNumber());
  });

  it("should allow transfering goverance tokens", async function() {;
    const transferAmount = 1;
    let transfer = await contract.transferGoverance(you, transferAmount);
    let yourBalance = await contract.goveranceBalance(you);
    assert.equal(transferAmount, yourBalance.toNumber());
  });

  it("should allow making a nomination in the first 2 days", async function() {
    const url = "myarticleurl";
    let nomination = await contract.submitNomination(me, url);
    let nomineeWriter = await contract.nomineesWriter(0);
    let nomineeUrl = await contract.nomineesUrl(0);
    assert.equal(me, nomineeWriter);
    assert.equal(url, nomineeUrl);
  });

  it("should disallow nominating the same article twice", async function() {
    const url = "myarticleurl";
    return await shouldCauseRevert(async () => {
      let nomination = await contract.submitNomination(me, url);
    });
  });

  it("should disallow voting in the first 2 days", async function() {
    const voteAmount = 1;
    return await shouldCauseRevert(async () => {
      let voted = await contract.castVotes(0, voteAmount);
    });
  });

  it("should disallow nominations after 2 days", async function() {
    await contract.setStartTime(NOW - 2 * SECONDS_PER_DAY);
    const url = "myarticleurl2";
    await shouldCauseRevert(async () => {
      let nomination = await contract.submitNomination(me, url);
    });
  });

  it("should allow voting after 2 days", async function() {
    const voteAmount = 1;
    let voted = await contract.castVotes(0, voteAmount, {from: you});
    let votes = await contract.voteCounts(0);
    assert.equal(votes.toNumber(), voteAmount);
  });

  it("should disallow voting more that your tokens", async function() {
    const voteAmount = 1;
    await shouldCauseRevert(async () => {
      let voted = await contract.castVotes(0, voteAmount, {from: you});
    });
  });

  it("should prevent transfering tokens when you have already voted", async function() {
    const transferAmount = 1;
    await shouldCauseRevert(async () => {
      let transfer = await contract.transferGoverance(me, transferAmount, {from: you});
    });
  });

  it("should give away a reward after a week", async function() {
    await contract.setStartTime(NOW - 7 * SECONDS_PER_DAY);
    const status = await contract.updateWinner();
    const first_winner = await contract.winnersWriter(0);
    assert.equal(first_winner, me);
  });
  
  it("should allow transfering reward tokens", async function () {
    const transferAmount = 1;
    let transfer = await contract.transferReward(you, transferAmount);
    let yourBalance = await contract.rewardBalance(you);
    return assert.equal(transferAmount, yourBalance.toNumber());
  });
});
