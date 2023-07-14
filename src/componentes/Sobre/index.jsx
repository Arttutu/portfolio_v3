import React from "react"
import { Box } from "componentes/UI"
import MinhaDescricao from "componentes/MinhaDescricao"
import Habilidades from "componentes/Habilidades"
import Educacao from "componentes/TimeLine"

export default function SobreMim() {
  return (
    <>
      <MinhaDescricao />
      <Habilidades />
      <Educacao />
    </>
  )
}
