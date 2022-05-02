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
import {init} from './web3client';

// API key for Ethereum node

function App() {

	// useEffect(() => {
	// 	init()
	// }, []); 

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
