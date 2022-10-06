import React from "react";
import "./input.css";
import { FiSearch } from 'react-icons/fi';


const Input = ({text, submit, func}) => {
  return (
    <form className="input" onSubmit={submit}>
        <input type={"text"} className="input_value" onChange={text} placeholder = "Please Enter Location" />
         <span className="input_icon" onClick={func}>
          <FiSearch />
         </span>
           
    </form>
  )
}

export default Input