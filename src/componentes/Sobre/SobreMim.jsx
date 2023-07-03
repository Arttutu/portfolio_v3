import React from "react"
<<<<<<< HEAD

import BotaoPrincipal from "componentes/BotaoPrincipal"

import { Link } from "react-router-dom"
import { Box, Legenda, Titulo } from "componentes/UI"
import styled from "styled-components"

const SobreStyles = styled.div`
  display: flex;
  padding: 100px 0px;
  background-color: ${(props) => props.theme.colors.background};
  flex-direction: column;
=======
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { Link } from "react-router-dom"
import { Box, Legenda, Titulo } from "componentes/UI"
import styled from "styled-components"
import { corRoxoClaroUm } from "componentes/UI/variaveis"

const SobreStyles = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  gap: 2rem;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  @media (max-width: 1040px) {
    flex-direction: column;
    margin: 0 20px;
  }
`
const SobreImagem = styled.img`
  max-width: 400px;
  height: auto;
  border-radius: 100%;
  border: 3px solid ${corRoxoClaroUm};
>>>>>>> 09f7fa933d85e73cdf426af98801ca0e1c6d38b4
`

const StylesConteudo = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
<<<<<<< HEAD
=======
  line-height: 150%;

>>>>>>> 09f7fa933d85e73cdf426af98801ca0e1c6d38b4
`
const BoxBotao = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
`
export default function SobreMim() {
  return (
<<<<<<< HEAD
    <SobreStyles>
      <Box>
        <StylesConteudo>
          <Titulo>Sobre mim</Titulo>
=======
    <Box>
      <SobreStyles>
        <StylesConteudo>
          <Titulo>Sobre Mim</Titulo>
>>>>>>> 09f7fa933d85e73cdf426af98801ca0e1c6d38b4
          <Legenda>
            Apaixonado por tecnologia e por desenvolvimento de aplicativos e
            sites, possuo uma enorme dedicação e foco em meus projetos e
            estudos, estou cursando
            <strong>Analise e desenvolvimento de sistema</strong>, busco uma
            oportunidade de trabalho como
            <strong>Desenvolvedor Estágio/Junior</strong> e estou disponível no
            mercado e realmente muito interessado em contribuir o máximo
            possível para empresa e evoluir, aprender mais como profissional e
            adoraria uma oportunidade para conversar e contar mais sobre mim em
            como minhas habilidades vão contribuir para sua empresa.
          </Legenda>
          <BoxBotao>
            <BotaoPrincipal
              texto="Dowload do CV"
              estilo2="estilo2"
            ></BotaoPrincipal>
            <Link to="/saibamais">
              <BotaoPrincipal
                texto="Saiba Mais"
                estilo2="estilo2"
              ></BotaoPrincipal>
            </Link>
          </BoxBotao>
        </StylesConteudo>
      </Box>
    </SobreStyles>
  )
}
