import React from "react"
import { Box } from "componentes/UI"
import MinhaDescricao from "componentes/MinhaDescricao"
import Habilidades from "componentes/Habilidades"
import AboutMePage from "componentes/TimeLine"

export default function SobreMim() {
  return (
    <Box>
      <MinhaDescricao />
      <Habilidades />
      <AboutMePage />
    </Box>
  )
}
