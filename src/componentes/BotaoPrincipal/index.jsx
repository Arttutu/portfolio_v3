import React from "react"
import styled, { css } from "styled-components"
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
  ${(card) =>
    card
      ? css`
          width: 100px;
          padding: 10px;
          font-size: 1.2em;
          border-radius: 5px;
        `
      : ""}
`
export default function BotaoPrincipal({ texto, card }) {
  return <Botao card={card}>{texto}</Botao>
}
