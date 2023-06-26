import React from "react"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { Link } from "react-router-dom"
import { TfiGithub, TfiLinkedin } from "react-icons/tfi"
import { RiWhatsappFill } from "react-icons/ri"
import { Box, Icone, Legenda, Titulo } from "componentes/UI"
import { Alinhador, BannerStyle, StyleConteudo } from "./style"

export default function Banner({ saudacao, titulo, descricao, icone }) {
  return (
    <>
      <BannerStyle>
        <Box>
          <StyleConteudo>
            <Alinhador>
              <Titulo>{saudacao}</Titulo>
              <Icone> {icone}</Icone>
            </Alinhador>
            <Titulo>{titulo}</Titulo>
            <Legenda>{descricao}</Legenda>
            <Alinhador>
              <Link to="https://github.com/Arttutu" target="_blank">
                <TfiGithub size={30} color="white" />
              </Link>
              <Link to="https://linkedin.com/in/santos-gomes" target="_blank">
                <TfiLinkedin size={30} color="white" />
              </Link>
              <Link
                to="https://api.whatsapp.com/send/?phone=5511957243215"
                target="_blank"
              >
                <RiWhatsappFill size={30} color="white" />
              </Link>
            </Alinhador>
            <Alinhador>
              <Link to="/projetos">
                <BotaoPrincipal texto="Meus Projetos" />
              </Link>
              <Link to="/sobremim">
                <BotaoPrincipal texto="Sobre Mim" />
              </Link>
            </Alinhador>
          </StyleConteudo>
        </Box>
      </BannerStyle>
    </>
  )
}
