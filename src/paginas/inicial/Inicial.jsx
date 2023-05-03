import Banner from "componentes/Banner/Banner"
import Contato from "componentes/Contato"
import Divisor from "componentes/Divisor"
import Habilidades from "componentes/Habilidades"
import Projeto from "componentes/Projeto"
import SobreMim from "componentes/Sobre/SobreMim"
import React from "react"

export default function Inicial() {
  return (
    <main>
      <Banner />
      <SobreMim />
      <Divisor />
      <Projeto />
      <Divisor />
      <Habilidades />
      <Divisor />
      <Contato />
    </main>
  )
}
