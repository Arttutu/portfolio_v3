import React from "react"
import styled from "styled-components"
import { MinhaHistoria } from "./assets/textos/MinhaDescricao"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { Box, Texto, Titulo } from "componentes/UI"
import { BoxImagem } from "componentes/Banner/style"
import CV from "./assets/cv_arthur.pdf"
import Imagem from "componentes/Imagem"
import { BsFillEnvelopePaperFill } from "react-icons/bs"
const IconEnvelope = styled(BsFillEnvelopePaperFill)`
  font-size: 25px;
  color: ${(props) => props.theme.colors.corUm};
`
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
  width: 100%;
  gap: 2rem;
`

export default function MinhaDescricao() {
  return (
    <Box>
      <SobreStyles>
        <BoxImagem secundary>
          <Imagem />
        </BoxImagem>
        <StylesConteudo>
          <Titulo>Sobre mim</Titulo>
          <Texto>{MinhaHistoria}</Texto>
          <BoxBotao>
            <a href={CV} target="_blank">
              <BotaoPrincipal texto="Dowload do CV"></BotaoPrincipal>
              <IconEnvelope />
            </a>
          </BoxBotao>
        </StylesConteudo>
      </SobreStyles>
    </Box>
  )
}
