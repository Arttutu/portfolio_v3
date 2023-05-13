import Banner from "componentes/Banner/Banner"
import Projeto from "componentes/Projeto"
import todosProjetos from "./todosprojetos"
import React from "react"
import Divisor from "componentes/Divisor"

export default function PaginaProjetos() {
  return (
    <>
      <Banner
        tituloBotao="Voltar"
        titulo="Aqui está Todos os meus projetos"
        saudacao="Olá !"
        descricao="Frontend web"
        path="/"
      />
      <Divisor />
      <Projeto projetos={todosProjetos} tituloBotao="Voltar" path="/" />
      <Divisor />
    </>
  )
}
