import React, { useEffect } from "react"
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
