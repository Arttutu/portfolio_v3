import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { Box, Logo } from "componentes/UI"
import styled from "styled-components"
import { corRoxoEscuroDois } from "componentes/UI/variaveis"
const BoxHeader = styled.header`
  width: 100%;
  padding: 20px;
  position: fixed;
  box-sizing: border-box;
  background-color: ${corRoxoEscuroDois};
`
const BoxMenu = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export default function Menu({ setMenuOpen }) {
  function scrollToTop() {
    window.scrollTo(0, 10)
  }

  return (
    <BoxHeader>
      <Box>
        <BoxMenu>
          <NavLink to="/">
            <Logo>Home</Logo>
          </NavLink>

          <Nav></Nav>
          <GiHamburgerMenu
            size={35}
            color="#FFF"
            onClick={() => setMenuOpen(true)}
          />
        </BoxMenu>
      </Box>
    </BoxHeader>
  )
}
