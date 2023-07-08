import { Legenda } from 'componentes/UI'
import React from 'react'
export default function CartaoHabilidade({icone, titulo}) {
  return (
    <>
   
      <Legenda menu>{titulo}</Legenda>

      <div>{icone}</div>

    </>
  )
}
