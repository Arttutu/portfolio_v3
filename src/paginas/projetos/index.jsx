import Projeto from "componentes/Projeto"
import todosProjetos from "./todosprojetos"
import React from "react"
import Divisor from "componentes/Divisor"
export default function PaginaProjetos() {
  return (
    <>
      <Projeto
        projetos={todosProjetos}
        tituloBotao="Voltar"
        path="/"
        titulo="Meus Projetos"
      />
    </>
  )
}
