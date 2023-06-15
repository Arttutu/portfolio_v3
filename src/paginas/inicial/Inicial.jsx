import Banner from "componentes/Banner"
import React from "react"
import styled from "styled-components"
import { corRoxoEscuroUm } from "componentes/UI/variaveis"
import { MdWavingHand } from "react-icons/md"
const BackGroundMain = styled.main`
  background-color: ${corRoxoEscuroUm};
`
export default function Inicial() {
  return (
    <BackGroundMain>
      <Banner
        tituloBotao="Meus projetos"
        titulo="Eu sou Arthur Gomes;"
        saudacao="Oi! "
        descricao="Se você está procurando por um desenvolvedor front-end, veio no lugar certo."
        path="/projetos"
        icone={<MdWavingHand />}
      />
    </BackGroundMain>
  )
}
