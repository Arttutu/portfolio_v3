import React, { useState } from "react"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { Link } from "react-router-dom"
import Lottie from "react-lottie"
import animationData from "./animacao/animacao.json"
import { Box, Icone, Legenda, Titulo } from "componentes/UI"
import {
  Alinhador,
  BannerStyle,
  BoxBanner,
  BoxImagem,
  StyleConteudo,
} from "./style"

import Imagem from "componentes/Imagem"
import {
  IconeEstilizadoGit,
  IconeEstilizadoLik,
  IconeEstilizadoWhat,
} from "componentes/EstiloIcones"

export default function Banner({ saudacao, titulo, descricao, icone }) {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
    direction: -1,
  })
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <>
      <BannerStyle>
        <Box>
          <BoxBanner>
            <BoxImagem>
              <Imagem />
            </BoxImagem>
            <StyleConteudo>
              <Alinhador>
                <Titulo>{saudacao}</Titulo>
                <div>
                  <Lottie
                    options={defaultOptions}
                    width={80}
                    height={80}
                    direction={animationState.direction}
                    isStopped={setAnimationState.isStopped}
                    isPaused={setAnimationState.isPaused}
                  />
                </div>
              </Alinhador>
              <Titulo>{titulo}</Titulo>
              <Legenda menu>{descricao}</Legenda>
              <Alinhador>
                <Link to="https://github.com/Arttutu" target="_blank">
                  <IconeEstilizadoGit />
                </Link>
                <Link to="https://linkedin.com/in/santos-gomes" target="_blank">
                  <IconeEstilizadoLik />
                </Link>
                <Link
                  to="https://api.whatsapp.com/send/?phone=5511957243215"
                  target="_blank"
                >
                  <IconeEstilizadoWhat />
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
          </BoxBanner>
        </Box>
      </BannerStyle>
    </>
  )
}
