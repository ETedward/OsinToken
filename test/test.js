const Voting = artifacts.require('OSIVoting');
const GovToken = artifacts.require('GovToken');
const RewToken = artifacts.require('RewToken');
// const timeMachine = require('ganache-time-traveler');

const SECONDS_PER_DAY = 86400;
const NOW = 1651609278;

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
  let goverance;
  let rewards;
  const me = accounts[0];
  const you = accounts[1];
  const you2 = accounts[2];

  before('deploy token', async function() {
    contract = await Voting.deployed();
    await contract.setStartTime(NOW);
    goverance = await GovToken.at(await contract.goverance());
    rewards = await RewToken.at(await contract.rewards());
  });

  it("should give me all of the goverance tokens at the start", async function() {
    let supply = await goverance.totalSupply();
    let myBalance = await goverance.balanceOf(me);
    assert.equal(supply.toNumber(), myBalance.toNumber());
  });

  it("should allow transfering goverance tokens", async function() {;
    const transferAmount = 1;
    let transfer = await goverance.transfer(you, transferAmount);
    let yourBalance = await goverance.balanceOf(you);
    assert.equal(transferAmount, yourBalance.toNumber());
  });

  it("should allow making a nomination in the first 2 days", async function() {
    const url = "myarticleurl";
    assert.ok(await contract.canNominate());
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
    assert.notOk(await contract.canVote());
    return await shouldCauseRevert(async () => {
      let voted = await contract.castVotes(0, voteAmount);
    });
  });

  it("should disallow nominations after 2 days", async function() {
    await contract.setStartTime(NOW - 2 * SECONDS_PER_DAY);
    const url = "myarticleurl2";
    assert.notOk(await contract.canNominate());
    await shouldCauseRevert(async () => {
      let nomination = await contract.submitNomination(me, url);
    });
  });

  it("should allow voting after 2 days", async function() {
    const voteAmount = 500;
    assert.ok(await contract.canVote({from: you}));
    let voted = await contract.castVotes(0, voteAmount, {from: you});
    let votes = await contract.voteCounts(0);
    assert.equal(votes.toNumber(), voteAmount);
  });

  it("should disallow voting more that your tokens", async function() {
    const voteAmount = 1000;
    await shouldCauseRevert(async () => {
      let voted = await contract.castVotes(0, voteAmount, {from: you});
    });
  });

  it("should prevent double voting", async function() {
    const transferAmount = 1;
    await goverance.transfer(you2, transferAmount, {from: you});
    await shouldCauseRevert(async () => {
      let voted = await contract.castVotes(0, 1000, {from: you2});
    });
  });

  it("should give away a reward after a week", async function() {
    await contract.setStartTime(NOW - 7 * SECONDS_PER_DAY);
    const status = await contract.updateWinner();
    const first_winner = await contract.winnersWriter(0);
    assert.equal(first_winner, me);
  });
  
  it("should allow transfering reward tokens", async function () {
    const transferAmount = 1000;
    let transfer = await rewards.transfer(you, transferAmount);
    let yourBalance = await rewards.balanceOf(you);
    return assert.equal(transferAmount, yourBalance.toNumber());
  });
});