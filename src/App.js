// import logo from './logo.svg';
import React from 'react';
// import './css/main.css';
// import './css/noscript.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Awards from './pages/awards'
import People from './pages/people'
import Home from './pages/home'


function App() {
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
