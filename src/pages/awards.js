import React, {useState, useEffect} from 'react';
import {init, setStartTime, testContract} from '../web3client.js';
import logo from "../images/bg.jpg";
import {VotingForm} from '../components/VotingForm'
import {NominationForm} from '../components/NominationForm'

// import '../css/main.css';

function Awards() {
  // useEffect(() => {
	// 	init()
	// }, []); 

  const [started] = useState(false);
  const [voted] = useState(false);

  const start = () => {
    console.log("button clicked");
    testContract().then(console.log);
  }

  return (
    
    <div className = 'awards'>

    <section id="wrapper">
      <header>
      <div className="inner">
          <h2>Voting and Rewards</h2> 
          <p>Move the World with your Bellingcoin.</p>			
  
      {/* <h1> AWARDS!! </h1> */}
      <button onClick = {() => init()}> Login Metamask</button> 
      <br></br>
      <br></br>

        {!started ? (
          <button onClick={() => start()}> Initiate Voting Period</button>
        ) : (
          <p> Voting process started!</p>
        )}

      <br></br> <br></br>


      <hr></hr>
      <h4>The section below will only be Accessible by holders of the Bellingcoin OSINT token: OSI in their wallet.</h4>

      <h3 class="major">Articles of the Week</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                <th>Title</th>
								<th>Link</th>
								<th>Author</th>                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Article 1</td>
                  <td>Link 1</td>
                  <td>Author 1</td>
                </tr>
                <tr>
                  <td>Article 2</td>
                  <td>Link 2.</td>
                  <td>Author 2</td>
                </tr>
                <tr>
                  <td>Article 3</td>
                  <td>Link 3</td>
                  <td>Author 3</td>
                </tr>
                </tbody>
                
            </table>
          </div>

      <VotingForm></VotingForm>

      <hr></hr>
      <h4>The section below will only be usable by holders of the Bellingcoin Governence coin: OSI_Gov in their wallet.</h4>
      
      <NominationForm></NominationForm>
      {/* <form method="post" action="#">
        <div class="row gtr-uniform">
          <div class="col-6 col-12-xsmall">
            <label for="demo-name">Author</label>
            <input type="text" name="demo-name" id="demo-name" value=""></input>
          </div>
          <div class="col-6 col-12-xsmall">
            <label for="demo-name">Publication</label>
            <input type="text" name="demo-name" id="demo-name" value=""></input>
          </div>
          <div class="col-6 col-12-xsmall">
            <label for="demo-name">Author Wallet Address (if known)</label>
            <input type="text" name="demo-name" id="demo-name" value=""></input>
          </div>
          <div class="col-6 col-12-xsmall">
            <label for="demo-email">Article Link</label>
            <input type="email" name="demo-email" id="demo-email" value=""></input>
          </div>
          <div class="col-12">
            <label for="demo-message">Article Heading</label>
            <textarea name="demo-message" id="demo-message" rows="2"></textarea>
          </div>
          <div class="col-12">
            <ul class="actions">
              <li><input type="submit" value="Submit Nomination" class="primary" /></li>
              <li><input type="reset" value="Reset"></input></li>
            </ul>
          </div>
        </div>
				</form> */}

      </div>
      </header>

    </section>
    
    </div>
  );
}

export default Awards;