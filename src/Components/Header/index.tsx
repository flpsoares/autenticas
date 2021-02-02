import React from 'react'
import { Container, LogoArea, Menu, ButtonMenu, Contact, IconArea, MenuToggle } from './style'
import Logo from '../../assets/logo.png'
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <Container>
      <LogoArea>
        <Link to="/" >
          <img src={Logo} alt="Logo"></img>
        </Link>
      </LogoArea>
      {/* <MenuArea> */}
        <div className="on">
          
        </div>
        <Menu>
          <ButtonMenu>
            <Link to="/conjunto">Conjunto</Link>
          </ButtonMenu>
          <ButtonMenu>
            <Link to="/pijama">Pijama</Link>
          </ButtonMenu>
          <ButtonMenu>
            <a href="/calcinha">Calcinha</a>
          </ButtonMenu>
          <ButtonMenu>
            <a href="/sutia">Sutiã</a>
          </ButtonMenu>
          <ButtonMenu>
          <a href="/body">Body</a>
          </ButtonMenu>
        </Menu>
        <Contact>
          <IconArea>
            <a href="https://whats.link/eusouautenticas" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/eusouautenticas/" target="_blank" rel="noreferrer">
              <AiOutlineInstagram />
            </a>
          </IconArea>
        </Contact>
      {/* </MenuArea> */}
      <MenuToggle>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </MenuToggle>
    </Container>
  )
}

export default Header