import Banner from "componentes/Banner"
import React from "react"
import styled from "styled-components"
import { corRoxoEscuroUm } from "componentes/UI/variaveis"
import { MdWavingHand } from "react-icons/md"

const StyledMain = styled.main`
  background-color: ${corRoxoEscuroUm};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
