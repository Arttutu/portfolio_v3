import { Logo, Nav, NavLi } from "componentes/UI"
import { corRoxoClaroUm } from "componentes/UI/variaveis"
import React from "react"
import styled from "styled-components"
const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 50%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${({ abrirMenu }) => (abrirMenu ? 1 : 0)};

  z-index: 5;
  pointer-events: none;
  background-color: ${corRoxoClaroUm};
`
export default function MenuMobile({ abrirMenu, setMenu }) {
  return (
    <Container abrirMenu={abrirMenu}>
      <Logo>Home</Logo>
      <Nav mobile>
        <NavLi mobile>Teste</NavLi>
        <NavLi mobile>Teste</NavLi>
        <NavLi mobile>Teste</NavLi>
      </Nav>
    </Container>
  )
}
