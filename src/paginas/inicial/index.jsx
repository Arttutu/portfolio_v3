import Banner from "componentes/Banner"
import SobreMim from "componentes/Sobre"
import { StyledMain } from "componentes/UI"
import React from "react"
import { MdWavingHand } from "react-icons/md"

export default function Inicial() {
  return (
    <>
      <StyledMain>
        <Banner
          tituloBotao="Meus projetos"
          titulo="Eu sou Arthur Gomes"
          saudacao="Oi! "
          descricao="Se você está procurando por um desenvolvedor front-end, veio no lugar certo."
          icone={<MdWavingHand />}
        />
      </StyledMain>
    </>
  )
}
