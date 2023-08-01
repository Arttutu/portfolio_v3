import { Logo, Nav, NavLi } from "componentes/UI"
import React, { useEffect } from "react"
import { IoClose } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
const Container = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: center;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  opacity: ${({ abrirMenu }) => (abrirMenu ? 0.9 : 0)};
  transition: 0.5s;
  pointer-events: ${({ abrirMenu }) => (abrirMenu ? "auto" : "none")};
  background-color: ${(props) => props.theme.colors.corUm};
  > svg {
    cursor: pointer;
    position: absolute;
    transition: 0.7s;
    top: 1.6em;
    right: 1.3em;
    transform: rotate(${({ abrirMenu }) => (abrirMenu ? "0deg" : "45deg")});
  }
`
const BoxLogo = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
`
const UlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3em;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`
const StyleNavLi = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
`

export default function MenuMobile({ abrirMenu, setMenu }) {
  useEffect(() => {
    document.body.style.overflowY = abrirMenu ? "hidden" : "auto"
  }, [abrirMenu])
  useEffect(() => {
    function Resize() {
      if (window.innerWidth > 768) {
        setMenu(false)
      }
    }
    window.addEventListener("resize", Resize)
    return () => {
      window.removeEventListener("resize", Resize)
    }
  })
  return (
    <Container abrirMenu={abrirMenu}>
      <BoxLogo>
        <Logo>Home</Logo>
      </BoxLogo>
      <IoClose size={35} color="#fff" onClick={() => setMenu(false)} />
      <Nav>
        <UlStyle>
          <StyleNavLi to="/">
            <NavLi mobile>Arthur.G</NavLi>
          </StyleNavLi>
          <StyleNavLi to="/sobremim">
            <NavLi mobile>Sobre Mim</NavLi>
          </StyleNavLi>
          <StyleNavLi to="/projetos">
            <NavLi mobile>Projetos</NavLi>
          </StyleNavLi>
        </UlStyle>
      </Nav>
    </Container>
  )
}
