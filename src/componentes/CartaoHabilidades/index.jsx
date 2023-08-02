import CartaoIcones from "componentes/CartaoIcones"
import { Texto } from "componentes/UI"
import React from "react"
import styled from "styled-components"
const CardHabilidade = styled.div`
  display: flex;
  width: 200px;
  justify-content: center;
  gap: 1em;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.corDois};
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 768px) {
    width: 300px;
  }
`
export default function CartaoHabilidade({ icone, titulo }) {
  return (
    <CardHabilidade>
      <CartaoIcones habilidade icones={icone} />
      <Texto>{titulo}</Texto>
    </CardHabilidade>
  )
}
