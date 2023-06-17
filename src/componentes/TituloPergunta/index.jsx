import React from "react"
import styled from "styled-components"

const SubTitulo = styled.h2`
  font-size: 3em;
  font-weight: 900;
  color: ${corRoxoClaroUm};
  font-family: ${font};
`

export default function TituloPerguntas({ pergunta, titulo }) {
  return (
    <>
      <Legenda>{pergunta}</Legenda>
      <SubTitulo>{titulo}</SubTitulo>
    </>
  )
}
