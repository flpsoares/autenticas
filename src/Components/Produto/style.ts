import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 300px;

  img {
    width: 300px;
    height: 400px;
    object-fit: cover;
    transition: all .2s ease-in-out;
    border-radius: 2px;
  }
  
  span {
    color: #FF9797;
    text-align: center;
    font-size: 30px;
    font-family: 'Dancing Script', sans-serif;
    text-shadow: 2px 2px 5px #FF9797;
    transition: all .2s ease-in-out;
  }

  &:hover {
    transition: all .2s ease-in-out;
    img {
      width: 400px;
      height: 500px;
    }
    span {
      font-size: 40px;
    }
  }
`