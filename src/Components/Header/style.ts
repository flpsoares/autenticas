import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  grid-area: header;
  border-bottom: 2px solid white;
  box-shadow: -1px 3px 15px 3px black;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 200px;
  }
`

export const Desktop = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  box-shadow: -1px 3px 15px 3px black;

  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Mobile = styled.div`
  display: flex;
  align-items: center;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    display: initial;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`

export const MobileMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonMenuMobile = styled.div`
  margin: 0 15px;
  background: transparent;
  height: 30px;

  a {
    font-weight: 600;
    color: white;
    font-size: 28px;
    text-decoration: none;

    &:hover {
      transition: all .2s ease-in-out;
      color: #FF9797;
    }
  }

  @media (max-width: 425px) {
    a {
      font-size: 18px;
    }
  }

  @media (max-width: 375px) {
    a {
      font-size: 14px;
    }
  }

  @media (max-width: 320px) {
    a {
      font-size: 12px;
    }
  }
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

    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    color: #FF9797;
  }

  @media (max-width: 768px) {
    a {
      font-size: 60px;
    }
  }
`