// import logo from './logo.svg';
import React from 'react';
import './css/main.css';
// import './css/noscript.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Awards from './pages/awards'
import People from './pages/people'
import Home from './pages/home'

// hooks
import { useEffect} from 'react';
import Web3 from 'web3';

// API key for Ethereum node

function App() {
	let provider = window.ethereum; // check if metamask is installed

	if (typeof provider !== 'undefined') {
		// metamask is installed
		provider.request({method: 'eth_requestAccounts'}).then(accounts => {
			console.log(accounts);
		}).catch(err => {
			console.log(err)
		})
	}
	useEffect(() => {
		const web3 = new Web3(provider); // this is the link to your Ethereum node, that you can set up using infura or alchemy
	}, []); 

  return (
	
    <>
		<Router>
			<Navbar/>
			<Routes>
				<Route path = '/' element = {<Home/>}></Route>
				<Route path = '/people' element = {<People/>}></Route>
				<Route path = '/awards' element = {<Awards/>}></Route>
			</Routes>
		</Router>
	</>
  );
}

export default App;
