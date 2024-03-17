import { useState } from "react";
import styled from "styled-components";
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    
    const submitHandler = (e) => {
      e.preventDefault();
      navigate("/searched/"+ input);   
    };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
      <IoSearch />
      <input onChange={(e) =>setInput(e.target.value)} 
      type="text" 
      value={input} 
      />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
      div{
        width: 100%;
        position: relative;
      }
    input{
        border: none;
        background: linear-gradient(40deg, #000, #ADD8E6);
        font-size: 2rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 2rem;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }

`


export default Search