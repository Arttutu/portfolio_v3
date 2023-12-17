import React from "react"
import styled from "styled-components"
import { MinhaHistoria } from "./assets/textos/MinhaDescricao"
import { Box, Texto, Titulo } from "componentes/UI"
import { BoxImagem } from "componentes/Banner/style"
import CV from "./assets/cv_arthur.pdf"
import Imagem from "componentes/Imagem"
import BotaoPrincipal from "componentes/BotaoPrincipal"
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
  align-items: center;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  gap: 2rem;
`
const StyleLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  color: ${(props) => props.theme.colors.corUm};
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
          <StyleLink href={CV} target="_blank">
            <BotaoPrincipal texto="Download CV"></BotaoPrincipal>
          </StyleLink>
        </StylesConteudo>
      </SobreStyles>
    </Box>
  )
}
