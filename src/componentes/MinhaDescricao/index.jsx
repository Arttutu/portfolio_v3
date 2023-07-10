import React from "react"
import styled from "styled-components"
import { MinhaHistoria } from "./assets/textos/MinhaDescricao"
import Foto from "./assets/img/foto-sobre.jpeg"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { Texto, Titulo } from "componentes/UI"
import { BoxImagem, Imagem } from "componentes/Banner/style"

const SobreStyles = styled.div`
  display: flex;
  align-items: center;

  gap: 2rem;
  padding: 150px 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const StylesConteudo = styled.div`
  text-align: center;
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  gap: 2rem;
`
const BoxBotao = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
`

export default function MinhaDescricao() {
  return (
    <SobreStyles>
      <BoxImagem secundary>
        <Imagem secundary src={Foto}></Imagem>
      </BoxImagem>
      <StylesConteudo>
        <Titulo>Sobre mim</Titulo>
        <Texto>{MinhaHistoria}</Texto>
        <BoxBotao>
          <BotaoPrincipal texto="Dowload do CV"></BotaoPrincipal>
        </BoxBotao>
      </StylesConteudo>
    </SobreStyles>
  )
}
