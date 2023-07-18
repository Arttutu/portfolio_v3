import CartaoIcones from "componentes/CartaoIcones"
import { Texto } from "componentes/UI"
import React from "react"
import styled from "styled-components"
const CardHabilidade = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  border: 3px solid ${(props) => props.theme.colors.corUm};
  border-radius: 15px;
  padding: 15px 20px;
`
export default function CartaoHabilidade({ icone, titulo }) {
  return (
    <CardHabilidade>
      <CartaoIcones habilidade icones={icone} />
      <Texto menu>{titulo}</Texto>
    </CardHabilidade>
  )
}
