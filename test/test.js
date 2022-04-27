const Token = artifacts.require('Token');

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

contract("Token", function (accounts) {
  it("should give me all of the goverance tokens at the start", async function () {
    // Wait for the contract to be deployed
    let contract = await Token.deployed();
    let supply = await contract.goveranceSupply();

    // tests always give you account 0
    let me = accounts[0];

    let myBalance = await contract.goveranceBalance(me);

    return assert.equal(supply.toNumber(), myBalance.toNumber());
  });

  it("should allow transfering goverance tokens", async function () {
    let contract = await Token.deployed();

    let me = accounts[0];
    let you = accounts[1];
    const transferAmount = 1;

    let transfer = await contract.transferGoverance(you, transferAmount);
    let yourBalance = await contract.goveranceBalance(you);

    return assert.equal(transferAmount, yourBalance.toNumber());
  });
  // ...
});
