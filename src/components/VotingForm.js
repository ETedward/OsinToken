
import React, { useState } from "react";
import {init, subVote} from '../web3client.js';
import * as AiIcons from "react-icons/ai"

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
      subVote(0);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Article Title:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Associated wallet address:
          <input 
            type="text" 
            name="website" 
            value={inputs.website || ""} 
            onChange={handleChange}
          />
        </label>
          <input type="submit" value="Submit Vote"/>
      </form>
    </div>
    )
}

export default VotingForm