import React from "react"
import { AiFillCopyrightCircle } from "react-icons/ai"
import styled from "styled-components"
import { corBranca, corRoxoEscuroDois, font } from "componentes/UI/variaveis"
const StyleRodape = styled.div`
  height: 40px;
  background-color: ${corRoxoEscuroDois};
`
const StyleTexto = styled.div`
  font-size: 1em;
  color: ${corBranca};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-family: ${font};
`
export default function Rodape() {
  return (
    <StyleRodape>
      <StyleTexto>
        Desenvolvido por
        <AiFillCopyrightCircle size={20} color="white" />
        Arthur Gomes dos Santos
      </StyleTexto>
    </StyleRodape>
  )
}
