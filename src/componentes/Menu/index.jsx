import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { BsLightbulbFill } from "react-icons/bs"
import { Box, Logo, Nav, NavLi } from "componentes/UI"
import { BoxHeader, BoxMenu, UlStyle } from "./style"
import styled from "styled-components"
const TemaLayout = (tema) => (tema === "Light" ? "Dark" : "Light")
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
  color: ${(props) => props.theme.colors.corUm};
  @media (max-width: 768px) {
    font-size: 20px;
  }
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
const BoxToggleTheme = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.colors.corUm};
`
const InfoTheme = styled.span`
  color: ${(props) => props.theme.colors.corUm};
  font-size: 1.3em;
  padding: 10px;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`
export default function Menu({ setMenu, mudarTema }) {
  function scrollToTop() {
    window.scrollTo(0, 10)
  }
  const handleMudarTema = () => {
    mudarTema(TemaLayout)
    SetFraseTheme(TemaLayout)
  }
  const [Frasetheme, SetFraseTheme] = useState("Light")

  return (
    <BoxHeader>
      <Box>
        <Nav>
          <UlStyle>
            <StyleLink to="/" onClick={scrollToTop}>
              <Logo>Arthur.G</Logo>
            </StyleLink>
            <BoxMenu>
              <StyleNavLi to="/sobremim">
                <NavLi>Sobre Mim</NavLi>
              </StyleNavLi>
              <StyleNavLi to="/projetos">
                <NavLi>Projetos</NavLi>
              </StyleNavLi>
              <StyleNavLi>
                <BoxToggleTheme>
                  <InfoTheme>{Frasetheme}</InfoTheme>
                  <StyleLampada onClick={handleMudarTema} />
                </BoxToggleTheme>
              </StyleNavLi>
            </BoxMenu>
            <BoxIconeMenu>
              <BoxToggleTheme>
                <InfoTheme>{Frasetheme}</InfoTheme>
                <StyleLampada onClick={handleMudarTema} />
              </BoxToggleTheme>
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
