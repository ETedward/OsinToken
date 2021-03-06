import Web3 from 'web3';
import bellingContractBuild from 'contracts/OSIVoting.json'

let bellingContract;
let selectedAccount;
let isInitialized = false;
let accounts;

export const init = async () => {
    let provider = window.ethereum; // check if metamask is installed
		
    if (typeof provider !== 'undefined') 
        {
			// metamask is installed
			provider
            .request({method: 'eth_requestAccounts'})
            .then(accounts => {
                selectedAccount = accounts[0]
				console.log(`Selected account is ${selectedAccount}`);
			})
                .catch(err => {
				console.log(err)
			})

            window.ethereum.on('accountsChanged', function (accounts) {
                selectedAccount = accounts[0]
                console.log(`Selected account changed to ${selectedAccount}`);
            });
        }

    const web3 = new Web3(provider); // this is the link to your Ethereum node, that you can set up using infura or alchemy
    
    // part 2 connection the contract
    const networkId = await web3.eth.net.getId();
    console.log(networkId);
    accounts = await web3.eth.getAccounts()
    isInitialized = true;
    
    console.log("contract address", bellingContractBuild.networks[networkId].address);
    bellingContract = new web3.eth.Contract(
        bellingContractBuild.abi, 
        bellingContractBuild.networks[networkId].address
    );
};

export const setStartTime = async (time) => {
    if (!isInitialized) {
        await init();
    }
    // return bellingContract.methods.governenceSupply()
    return await bellingContract.methods
        .setStartTime(time).send({from: accounts[0]})
        // 1651607538 refers to May 3
        // 1651609278 refers to May 5
};

export const testContract = async () => {
    if (!isInitialized) {
        await init();
    }
    // return bellingContract.methods.governenceSupply()
    // return await bellingContract.methods.nomineesLength().call({from: accounts[0]})
    return await bellingContract.methods.submitNomination('0xB8d9892fD68f5c50c6AE5F95b543Bc06F785cb79','www.edwardtian.com').send({from: accounts[0]})
};

export const testNlength = async () => {
    if (!isInitialized) {
        await init();
    }
    // return bellingContract.methods.governenceSupply()
    // return await bellingContract.methods.nomineesLength().call({from: accounts[0]})
    return await bellingContract.methods.nomineesLength().call({from: accounts[0]})
};

export const subNomination = async (addr,website) => {
    if (!isInitialized) {
        await init();
    }
    return await bellingContract.methods.submitNomination(addr,website).send({from: accounts[0]})
};

export const endVoting = async () => {
    if (!isInitialized) {
        await init();
    }
    return await bellingContract.methods
    .updateWinner()
    .send({from: accounts[0]})
};


export const subVote = async (ind) => {
    if (!isInitialized) {
        await init();
    }
    return bellingContract.methods
        .castVotes(ind,10).send({from: accounts[0]})
};
