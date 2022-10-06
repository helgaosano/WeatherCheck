import React from "react";
import "./input.css";
import { FiSearch } from 'react-icons/fi';


const Input = () => {
  return (
    <form >
        <input type={"text"} className="input_value" placeholder = "Please Enter Location" />
        <FiSearch />
        
    </form>
  )
}

export default Input