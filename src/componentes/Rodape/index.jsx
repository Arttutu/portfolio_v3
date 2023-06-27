import React from "react"
import { AiFillCopyrightCircle } from "react-icons/ai"
import { StyleRodape, StyleTexto } from "./style"

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
