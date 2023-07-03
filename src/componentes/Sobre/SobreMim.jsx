import React from "react"

import BotaoPrincipal from "componentes/BotaoPrincipal"

import { Link } from "react-router-dom"
import { Box, Legenda, Titulo } from "componentes/UI"
import styled from "styled-components"

const SobreStyles = styled.div`
  display: flex;
  padding: 100px 0px;
  background-color: ${(props) => props.theme.colors.background};
  flex-direction: column;
`

const StylesConteudo = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
`
const BoxBotao = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
`
export default function SobreMim() {
  return (
    <SobreStyles>
      <Box>
        <StylesConteudo>
          <Titulo>Sobre mim</Titulo>
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
