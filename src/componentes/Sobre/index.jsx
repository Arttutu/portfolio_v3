import React from "react"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { Box, Titulo } from "componentes/UI"
import styled from "styled-components"
import { font } from "componentes/UI/variaveis"
import Foto from "./img/logo-avatar.png"
import { BoxImagem, Imagem } from "componentes/Banner/style"

const SobreStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 200px 0px;
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
const Texto = styled.div`
  font-family: ${font};
  font-size: 2em;
  color: ${(props) => props.theme.colors.corUm};
`
export default function SobreMim() {
  return (
    <Box>
      <SobreStyles>
        <BoxImagem>
          <Imagem src={Foto}></Imagem>
        </BoxImagem>
        <StylesConteudo>
          <Titulo>Sobre mim</Titulo>
          <Texto>
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
          </Texto>
          <BoxBotao>
            <BotaoPrincipal texto="Dowload do CV"></BotaoPrincipal>
          </BoxBotao>
        </StylesConteudo>
      </SobreStyles>
    </Box>
  )
}
