window.userWalletAddress = null
const voting = document.getElementById('votingID')
const loginButton = document.getElementById('loginButton')
const userWallet = document.getElementById('userWallet')

function toggleButton() {
	if (!window.ethereum) {
	loginButton.innerText = 'MetaMask not installed'
	voting.innerText = 'How To'
	loginButton.classList.remove('bg-purple-50', 'text-white')
	loginButton.classList.add('bg-gray-500', 'text-gray-300', 'cursor-not-allowed')
	return false
	}

	loginButton.addEventListener('click', loginWithMetaMask) 
}

async function loginWithMetaMask() {
	// windows.ethereum.request({method: 'eth_requestAccount'})
	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
	.catch((e) => {
		console.error(e.message)
		return
	})
	// const account = accounts[0]
	window.userWalletAddress = accounts[0]
	if (!accounts) { return }

	// window.userWalletAddress = accounts[0]
	userWallet.innerText = window.userWalletAddress
	voting.innerText = 'Vote Here'
	voting.href = 'voting.html'

	loginButton.innerText = 'Log out MetaMask'
	console.log
	loginButton.removeEventListener('click', loginWithMetaMask)
	setTimeout(() => {
	loginButton.addEventListener('click', signOutOfMetaMask)
	}, 200)
}

function signOutOfMetaMask() {
	window.userWalletAddress = null
	userWallet.innerText = ''
	loginButton.innerText = 'Log in MetaMask'
	voting.innerText = 'How To'
	voting.href = "howto.html"

	loginButton.removeEventListener('click', signOutOfMetaMask)
	setTimeout(() => {
	loginButton.addEventListener('click', loginWithMetaMask)
	}, 200)
}


window.addEventListener('DOMContentLoaded', () => {
	toggleButton()
});
