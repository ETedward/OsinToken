import Web3 from 'web3';
// import tokenBuild from '../build/contract/Token.json'
import bellingContractBuild from 'contracts/OSIVoting.json'

let bellingContract;
let selectedAccount;
let isInitialized = false;

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
    const accounts = await web3.eth.getAccounts()
    isInitialized = true;
    
    bellingContract = new web3.eth.Contract(
        bellingContractBuild.abi, 
        bellingContractBuild.networks[5777].address
    );
};

export const setStartTime = async () => {
    if (!isInitialized) {
        await init();
    }
    // return bellingContract.methods.governenceSupply()
    return bellingContract.methods
        .winnersLength()
};
