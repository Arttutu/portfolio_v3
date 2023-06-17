import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { Box, Logo } from "componentes/UI"
import styled from "styled-components"
import { corBranca, corRoxoEscuroDois, font } from "componentes/UI/variaveis"
const BoxHeader = styled.header`
  width: 100%;
  padding: 20px;
  position: fixed;
  z-index: 5;
  box-sizing: border-box;
  background-color: ${corRoxoEscuroDois};
`
const BoxMenu = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  > svg {
    display: none;
  }
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`
const NavLi = styled.li`
  font-family: ${font};
  color: ${corBranca};
  font-size: 1.5rem;
`
export default function Menu({ setMenuOpen }) {
  function scrollToTop() {
    window.scrollTo(0, 10)
  }

  return (
    <BoxHeader>
      <Box>
        <Nav>
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
            <GiHamburgerMenu
              size={35}
              color="#FFF"
              onClick={() => setMenuOpen(true)}
            />
          </BoxMenu>
        </Nav>
      </Box>
    </BoxHeader>
  )
}
