import React from "react"
import { Link, NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { Box, Logo, Nav, NavLi } from "componentes/UI"
import styled from "styled-components"
import { corRoxoEscuroDois } from "componentes/UI/variaveis"
const BoxHeader = styled.header`
  width: 100%;
  padding: 20px;
  position: fixed;
  z-index: 1;
  box-sizing: border-box;
  background-color: ${corRoxoEscuroDois};
`
const BoxMenu = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`
const UlStyle = styled.ul`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  gap: 3em;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  list-style: none;
  > svg {
    display: none;
  }
  @media (max-width: 768px) {
    > svg {
      display: block;
    }
  }
`

export default function Menu({ setMenu }) {
  function scrollToTop() {
    window.scrollTo(0, 10)
  }

  return (
    <BoxHeader>
      <Box>
        <Nav>
          <UlStyle>
            <Link to="/" onClick={scrollToTop}>
              <Logo>Arthur</Logo>
            </Link>
            <BoxMenu>
              <NavLink to="/sobremim">
                <NavLi>Sobre Mim</NavLi>
              </NavLink>
              <NavLink to="/projetos">
                <NavLi>Projetos</NavLi>
              </NavLink>
              <NavLink to="/contato">
                <NavLi>Contato</NavLi>
              </NavLink>
            </BoxMenu>
            <GiHamburgerMenu
              size={35}
              color="#FFF"
              onClick={() => setMenu(true)}
            />
          </UlStyle>
        </Nav>
      </Box>
    </BoxHeader>
  )
}
