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

  .hQRPng {
    background-color: white;
    box-shadow: 0 0 1px 3px #FF9797;
  }

  .hQRPng:hover, .hQRPng:focus {
    background-color: #FF9797;
    box-shadow: 0 0 1px 3px white;
  }

  .jnNSlb {
    background-color: gray;
    opacity: 50%;
  }

  .jnNSlb:hover {
    box-shadow: 0 0 1px 3px #FF9797;
  }

  .kzhfLO:hover {
    background-color: #FF9797;
    color: white;
  }

  .fiXUHI:hover:enabled {
    background-color: #FF9797;
    color: white;
  }

  .fiXUHI:hover {
    background-color: #FF9797;
    color: white;
  }
`