import Banner from "componentes/Banner/Banner"
import Contato from "componentes/Contato"
import Divisor from "componentes/Divisor"
import Habilidades from "componentes/Habilidades"
import Projeto from "componentes/Projeto"
import SobreMim from "componentes/Sobre/SobreMim"
import React from "react"
import projetos from "./projetos.json"

export default function Inicial() {
  return (
    <main>
      <Banner
        tituloBotao="Meus projetos"
        titulo="Eu sou Arthur Gomes"
        saudacao="Oi !"
        descricao="Frontend web"
        path="/projetos"
      />
      <SobreMim />
      <Divisor />
      <Projeto
        projetos={projetos}
        tituloBotao="Outros Projetos"
        path="/projetos"
      />
      <Divisor />
      <Habilidades />
      <Divisor />
      <Contato />
      <Divisor />
    </main>
  )
}
