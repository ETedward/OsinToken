
import React, { useState } from "react";
import {init, castVote} from '../web3client.js';

export const VotingForm = (props) => {
  const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
      console.log(inputs.website);
      castVote(0,1);
    }
  return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter a website link:
          <input 
            type="text" 
            name="website" 
            value={inputs.website || ""} 
            onChange={handleChange}
          />
        </label>
          <input type="submit" />
      </form>
    )
}

export default VotingForm