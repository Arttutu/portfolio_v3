import React, { useEffect } from "react"
import MinhaDescricao from "componentes/MinhaDescricao"
import Habilidades from "componentes/Habilidades"
import Educacao from "componentes/TimeLine"
import BotaoPrincipal from "componentes/BotaoPrincipal"

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

export default function SobreMim() {
  return (
    <>
      <MinhaDescricao />
      <Habilidades />
      <Educacao />
      <BotaoPrincipal
        texto="Subir"
        onClick={handleScrollToTop}
      ></BotaoPrincipal>
    </>
  )
}
