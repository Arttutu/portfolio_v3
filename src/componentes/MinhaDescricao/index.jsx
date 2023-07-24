import React from "react"
import styled from "styled-components"
import { MinhaHistoria } from "./assets/textos/MinhaDescricao"
import { Box, Texto, Titulo } from "componentes/UI"
import { BoxImagem } from "componentes/Banner/style"
import CV from "./assets/cv_arthur.pdf"
import Imagem from "componentes/Imagem"
import { BsFillEnvelopePaperFill } from "react-icons/bs"
import { corCinza } from "componentes/UI/variaveis"
const IconEnvelope = styled(BsFillEnvelopePaperFill)`
  font-size: 25px;
  color: ${(props) => props.theme.colors.corDois};
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
  align-items: center;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  gap: 2rem;
`
const BoxBotao = styled.div`
  cursor: pointer;
  width: 300px;

  transition: 0.3s;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.corUm};
  gap: 2rem;
  &:hover {
    background-color: ${corCinza};
  }
`
const StyleLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 1rem;
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
            <StyleLink href={CV} target="_blank">
              <Texto secundary>Dowloand CV</Texto>
              <IconEnvelope />
            </StyleLink>
          </BoxBotao>
        </StylesConteudo>
      </SobreStyles>
    </Box>
  )
}
