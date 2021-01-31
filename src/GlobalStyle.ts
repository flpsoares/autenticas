import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0%;
    outline: none;
    border: none;
    box-sizing: border-box;
    font-family: 'Exo 2', sans-serif;
  }

  button, input {
    border: none;
    outline: none;
  }

  button:hover {
    cursor: pointer;
  }

`