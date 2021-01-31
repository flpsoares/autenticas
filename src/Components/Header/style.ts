import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  grid-area: header;
  border-bottom: 1px solid white;
  box-shadow: -1px 3px 15px 3px black;

  display: flex;
  justify-content: space-around;

  /* position: fixed; */
  z-index: 20;
`

export const LogoArea = styled.button`
  background: transparent;
  width: 100px;
  height: 100%;

  img {
    width: 80%;
    height: 80%;
  }
`

export const Menu = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`

export const ButtonMenu = styled.button`
  margin: 0 15px;
  background: transparent;
  height: 30px;

  a {
    font-weight: 600;
    color: white;
    font-size: 20px;
    text-decoration: none;

    &:hover {
      transition: all .2s ease-in-out;
      color: #FF9797;
    }
  }
`

export const Contact = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`

export const IconArea = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  margin-left: 5px;

  a {
    background: transparent;
    font-size: 30px;
    color: white;
    margin-left: 10px;
  }

  a:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    color: #FF9797;
  }
`