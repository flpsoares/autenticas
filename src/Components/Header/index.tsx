import React from 'react'
import { Container, LogoArea, Menu, ButtonMenu, Contact, IconArea, Desktop, Mobile, MobileMenu, ButtonMenuMobile} from './style'
import Logo from '../../assets/logo.png'
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <Container>
      <Desktop>
        <LogoArea>
          <Link to="/" >
            <img src={Logo} alt="Logo"></img>
          </Link>
        </LogoArea>
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
      </Desktop>
      <Mobile>
        <MobileMenu>
          <ButtonMenuMobile>
            <Link to="/conjunto">Conjunto</Link>
          </ButtonMenuMobile>
          <ButtonMenuMobile>
            <Link to="/pijama">Pijama</Link>
          </ButtonMenuMobile>
          <ButtonMenuMobile>
            <a href="/calcinha">Calcinha</a>
          </ButtonMenuMobile>
          <ButtonMenuMobile>
            <a href="/sutia">Sutiã</a>
          </ButtonMenuMobile>
          <ButtonMenuMobile>
            <a href="/body">Body</a>
          </ButtonMenuMobile>
        </MobileMenu>
      </Mobile>
    </Container>
  )
}

export default Header