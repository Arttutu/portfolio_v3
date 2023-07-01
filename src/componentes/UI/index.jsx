import styled from "styled-components"
import { font } from "./variaveis"

export const Box = styled.div`
  max-width: ${(projeto) => (projeto ? "1600px" : "1440px")};
  height: auto;
  margin: 0 auto;
`
export const Titulo = styled.h1`
  font-size: 5em;
  font-weight: 700;
  color: ${(props) => props.theme.colors.corUm};
  font-family: ${font};
  @media (max-width: 768px) {
    font-size: 3em;
  }
`
export const Legenda = styled.span`
  font-size: 2em;
  color: ${(props) =>
    props.menu ? props.theme.colors.corUm : props.theme.colors.corDois};
  font-family: ${font};
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`
export const Icone = styled.div`
  font-size: 4em;
  color: ${(props) => props.theme.colors.corUm};
`
export const Logo = styled.h2`
  font-size: 2.5em;
  font-family: ${font};
  color: ${(props) => props.theme.colors.corDois};
`
export const DescCard = styled.p`
  font-family: ${font};
  font-size: 1.3em;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.corDois};
`
export const Nav = styled.nav``
export const NavLi = styled.li`
  font-weight: bold;
  font-family: ${font};
  color: ${(props) => props.theme.colors.corDois};
  font-size: 1.5rem;
  text-decoration: none;
  gap: ${({ mobile }) => (mobile ? "1.5rem" : "")};
`
