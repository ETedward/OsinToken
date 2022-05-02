
import React, { useState } from "react";
import {init, castVote} from '../web3client.js';

export const NominationForm = (props) => {
  const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const publication = event.target.publication;
      const wallet = event.target.wallet;
      const website = event.target.link

      setInputs(values => ({...values, [name]: {publication, wallet, website}}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
      console.log(inputs.website);
    }
  return (
      <form onSubmit={handleSubmit}>
        <label>Author:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Author Wallet (if known):
        <input 
          type="text" 
          name="wallet" 
          value={inputs.wallet || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter the Publication:
        <input 
          type="text" 
          name="publication" 
          value={inputs.publication || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter an article link:
          <input 
            type="text" 
            name="website" 
            value={inputs.website || ""} 
            onChange={handleChange}
          />
        </label>
          <input type="submit" value="Submit Nomination"/>
      </form>
    )
}

export default NominationForm