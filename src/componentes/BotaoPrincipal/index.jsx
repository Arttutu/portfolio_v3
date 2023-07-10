import React from "react"
import styled, { css } from "styled-components"
import { corBranca, corCinza, corPreta, font } from "componentes/UI/variaveis"

const Botao = styled.button`
  border: none;
  width: ${({ card }) => (card ? "100px" : "200px")};
  border-radius: 15px;
  padding: ${({ card }) => (card ? "0.7em" : "1em")};
  background-color: ${({ card, theme }) =>
    card ? theme.colors.corBotaoCard : theme.colors.corUm};
  color: ${corBranca};
  font-size: ${({ card }) => (card ? "1.2em" : "1.3em")};
  text-align: center;
  transition: 0.5s;
  font-family: ${font};
  cursor: pointer;
  &:hover {
    scale: 1.1;
    background-color: ${corCinza};
    color: ${corPreta};
  }
  @media (max-width: 768px) {
    width: ${({ card }) => (card ? "70px" : "150px")};
    font-size: 1em;
  }
`

export default function BotaoPrincipal({ texto, card }) {
  return <Botao card={card}>{texto}</Botao>
}
