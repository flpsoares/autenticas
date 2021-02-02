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

  .rec-dot {
    background-color: transparent !important;
    opacity: 50% !important;
    box-shadow: 0 0 1px 3px #FF9797 !important;
  }

  .rec-dot_active {
    background-color: white !important;
    opacity: 100% !important;
    box-shadow: 0 0 1px 3px #FF9797 !important;
  }

  .rec.rec-arrow {
    background: transparent !important;
  }

  .rec.rec-arrow:hover {
    background: #FF9797 !important;
    color: white !important;
  }

`