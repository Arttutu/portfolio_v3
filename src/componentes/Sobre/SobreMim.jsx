import React from "react"
import foto from "./logo-avatar.png"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import TituloPerguntas from "componentes/TituloPergunta"
import { Link } from "react-router-dom"
import { Box, Legenda } from "componentes/UI"
import styled from "styled-components"
import {
  corRoxoClaro,
  corRoxoClaroUm,
  corRoxoEscuro,
  corTextoClaro,
} from "componentes/UI/variaveis"
const SobreStyles = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  gap: 2rem;
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
`
const StylesConteudo = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  line-height: 150%;
`
const BoxBotao = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
`
export default function SobreMim() {
  return (
    <Box>
      <SobreStyles>
        <SobreImagem src={foto} />
        <StylesConteudo>
          <TituloPerguntas titulo="Quem eu sou?" pergunta="Sobre Mim" />
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
      </SobreStyles>
    </Box>
  )
}
