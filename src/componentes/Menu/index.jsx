import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { BsLightbulbFill } from "react-icons/bs"
import { Box, Logo, Nav, NavLi } from "componentes/UI"
import { BoxHeader, BoxMenu, UlStyle } from "./style"
import styled from "styled-components"
const StyleNavLi = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
`
const StyleLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`
const StyleLampada = styled(BsLightbulbFill)`
  font-size: 25px;
  color: ${(props) => props.theme.colors.corDois};
`
const BoxIconeMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    display: flex;
    align-items: center;
    gap: 1em;
  }
`
export default function Menu({ setMenu, temaMudar, mudarTema }) {
  function scrollToTop() {
    window.scrollTo(0, 10)
  }

  const handleMudarTema = () => {
    mudarTema((tema) => (tema === "light" ? "dark" : "light"))
  }

  return (
    <BoxHeader>
      <Box>
        <Nav>
          <UlStyle>
            <StyleLink to="/" onClick={scrollToTop}>
              <Logo>Home</Logo>
            </StyleLink>
            <BoxMenu>
              <StyleNavLi to="/sobremim">
                <NavLi>Sobre Mim</NavLi>
              </StyleNavLi>
              <StyleNavLi to="/projetos">
                <NavLi>Projetos</NavLi>
              </StyleNavLi>
              <StyleNavLi to="/contato">
                <NavLi>Contato</NavLi>
              </StyleNavLi>
              <StyleNavLi>
                <StyleLampada onClick={handleMudarTema} />
              </StyleNavLi>
            </BoxMenu>
            <BoxIconeMenu>
              <StyleLampada onClick={handleMudarTema} />
              <GiHamburgerMenu
                className="hamburguer"
                size={35}
                color="#FFF"
                onClick={() => setMenu(true)}
              />
            </BoxIconeMenu>
          </UlStyle>
        </Nav>
      </Box>
    </BoxHeader>
  )
}
