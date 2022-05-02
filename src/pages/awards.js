import React, {useState, useEffect} from 'react';
import {init, setStartTime, testContract} from '../web3client.js';
import logo from "../images/bg.jpg";
import {VotingForm} from '../components/VotingForm'
import {NominationForm} from '../components/NominationForm'
import {ArticleList} from '../components/ArticleList'
import {GovernorPortal} from '../components/GovernorPortal'

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}
// import '../css/main.css';

function Awards() {
  // useEffect(() => {
	// 	init()
	// }, []); 

  const [started] = useState(false);
  const [voted] = useState(false);
  const [books, setbooks]=useState(getDatafromLS());
    // input field states

  const start = () => {
    console.log("button clicked");
    testContract().then(console.log);
  }

  const deleteBook=(isbn)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.isbn !== isbn
    })
    setbooks(filteredBooks);
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

      <div className='view-container'>
          {books.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Wallet Address</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>" "</th>
                  </tr>
                </thead>
                <tbody>
                  <ArticleList books={books} deleteBook={deleteBook}/>
                </tbody>
              </table>
            </div>
            {/* <button className='btn btn-danger btn-md'
            onClick={()=>setbooks([])}>Remove All</button> */}
          </>}
          {books.length < 1 && <div>No articles have been nominated in the current voting period</div>}
        </div>

      <VotingForm></VotingForm>

      <hr></hr>
      <h4>The section below will only be usable by holders of the Bellingcoin Governence coin: OSI_Gov in their wallet.</h4>
      <h1>Nomination</h1>
      <GovernorPortal></GovernorPortal>
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