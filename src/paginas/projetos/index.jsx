import Banner from "componentes/Banner/Banner"
import Projeto from "componentes/Projeto"
import todosProjetos from "./todosprojetos"
import React from "react"
import Divisor from "componentes/Divisor"
import TituloPerguntas from "componentes/TituloPergunta"

export default function PaginaProjetos() {
  return (
    <>
      <Projeto projetos={todosProjetos} tituloBotao="Voltar" path="/" />
      <Divisor />
    </>
  )
}
