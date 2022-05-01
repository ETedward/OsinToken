import React, {useState} from 'react';
import {init, setStartTime} from '../web3client.js';
import logo from "../images/bg.jpg";

// import '../css/main.css';

function Awards() {
  const [started] = useState(false);

  const start = () => {
    console.log("button clicked");
    console.log(setStartTime());
    
  }

  return (
    <div className = 'awards'>
      	<img src={logo} alt="" />
        <h1> AWARDS!! </h1>
        {!started ? (
          <button onClick={() => start()}> Start Voting </button>
        ) : (
          <p> Voting process started!</p>
        )}
    </div>
  );
}

export default Awards;