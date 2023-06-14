import styled from "styled-components"
import { corCinza, corPreta, corRoxoEscuro, font } from "./variaveis"

export const Box = styled.div`
  max-width: 1440px;
  height: auto;
  margin: 0 auto;
`
export const Titulo = styled.h1`
  font-size: 5em;
  font-weight: 700;
  color: ${corRoxoEscuro};
  font-family: ${font};
`
export const Legenda = styled.span`
  font-size: 2em;
  color: ${corRoxoEscuro};
  font-family: ${font};
`
export const Icones = styled.div`
  text-decoration: none;
  display: flex;
  gap: 2rem;
  padding: 30px 0px;
`
