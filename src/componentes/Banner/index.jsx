import React from "react"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { Link } from "react-router-dom"
import { TfiGithub, TfiLinkedin } from "react-icons/tfi"
import { RiWhatsappFill } from "react-icons/ri"
import BannerFoto from "./header.jpg"
import styled from "styled-components"
import { Box, Icones, Legenda, Titulo } from "componentes/UI"
const BannerStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${BannerFoto}) no-repeat center center;
  background-size: 100% 100%;
  @media (max-width: 768px) {
    background-size: cover;
  }
`
const StyleConteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  margin: 0 20px;
  gap: 1.2em;
  @media (max-width: 768px) {
    margin-top: 130px;
  }
`
export default function Banner({
  saudacao,
  titulo,
  descricao,
  tituloBotao,
  path,
}) {
  return (
    <>
      <BannerStyle>
        <Box>
          <StyleConteudo>
            <Titulo>{saudacao}</Titulo>
            <Titulo>{titulo}</Titulo>
            <Legenda>{descricao}</Legenda>
            <Icones>
              <Link to="https://github.com/Arttutu" target="_blank">
                <TfiGithub size={30} color="black" />
              </Link>
              <Link to="https://linkedin.com/in/santos-gomes" target="_blank">
                <TfiLinkedin size={30} color="black" />
              </Link>
              <Link
                to="https://api.whatsapp.com/send/?phone=5511957243215"
                target="_blank"
              >
                <RiWhatsappFill size={30} color="black" />
              </Link>
            </Icones>
            <Link to={path}>
              <BotaoPrincipal texto={tituloBotao} />
            </Link>
          </StyleConteudo>
        </Box>
      </BannerStyle>
    </>
  )
}
