import React from "react"
import styled from "styled-components"
import { corBranca, corRoxoEscuroDois, font } from "componentes/UI/variaveis"
const Botao = styled.button`
  border: none;
  width: 200px;
  border-radius: 20px;
  padding: 20px;
  background-color: ${corRoxoEscuroDois};
  color: ${corBranca};
  font-size: 1.5em;
  transition: 0.3s;
  font-family: ${font};
  cursor: pointer;
`
export default function BotaoPrincipal({ texto }) {
  return <Botao>{texto}</Botao>
}
