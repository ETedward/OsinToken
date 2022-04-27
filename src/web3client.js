import Web3 from 'web3';
let selectedAccount;

export const init = async () => {
    let provider = window.ethereum; // check if metamask is installed
		if (typeof provider !== 'undefined') {
			// metamask is installed
			provider
            .request({method: 'eth_requestAccounts'})
            .then(accounts => {
                selectedAccount = accounts[0]
				console.log(accounts);
			})
                .catch(err => {
				console.log(err)
			})

            window.ethereum.on('accountsChanged', function (accounts) {
                selectedAccount = accounts[0]
                console.log('selected account changed to $(accounts)');
            });
		}

		const web3 = new Web3(provider); // this is the link to your Ethereum node, that you can set up using infura or alchemy
        
        // part 2 connection the contract
        const networkId = await web3.eth.net.getId();

        const bellingContract = new web3.eth.Contract(
            bellingContractBuild.abi, 
            bellingContract.networks[networkId].address)
    };