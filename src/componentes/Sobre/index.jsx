import React from "react"

import { Box } from "componentes/UI"
import MinhaDescricao from "componentes/MinhaDescricao"
import Habilidades from "componentes/Habilidades"

export default function SobreMim() {
  return (
    <Box>
      <MinhaDescricao />
      <Habilidades />
    </Box>
  )
}
