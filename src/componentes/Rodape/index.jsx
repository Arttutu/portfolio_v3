import React from "react"
import { Legenda, Texto } from "componentes/UI"
import styled from "styled-components"
const StyleRodape = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.corUm};
`
export default function Rodape() {
  return (
    <StyleRodape>
      <Texto secundary>
        Desenvolvido por <strong>Arthur Gomes dos Santos</strong>
      </Texto>
    </StyleRodape>
  )
}
