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

export const setStartTime = async () => {
    if (!isInitialized) {
        await init();
    }
    // return bellingContract.methods.governenceSupply()
    return await bellingContract.methods
        .setStartTime(100).call({from: accounts[0]})
        // .winnersLength()
};

export const testContract = async () => {
    if (!isInitialized) {
        await init();
    }
    // return bellingContract.methods.governenceSupply()
    // return await bellingContract.methods.nomineesLength().call({from: accounts[0]})
    return await bellingContract.methods.submitNomination('0xB8d9892fD68f5c50c6AE5F95b543Bc06F785cb79','www.edwardtian.com').call({from: accounts[0]})
};


export const castVote = async (props) => {
    if (!isInitialized) {
        await init();
    }
    return bellingContract.methods
        .castVotes(props,1)
};
