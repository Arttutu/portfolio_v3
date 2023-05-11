import React from "react"
import styles from "./Banner.module.scss"
import { Container } from "@mui/material"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { Link } from "react-router-dom"
import { TfiGithub, TfiLinkedin } from "react-icons/tfi"
import { RiWhatsappFill } from "react-icons/ri"
export default function Banner({
  saudacao,
  titulo,
  descricao,
  tituloBotao,
  path,
}) {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.cabecalho}>
          <div className={styles.cabecalho__conteudo}>
            <Container>
              <h1 className={styles.cabecalho__conteudo__titulo}>{saudacao}</h1>
              <h2 className={styles.cabecalho__conteudo__titulo}>{titulo}</h2>
              <p className={styles.cabecalho__conteudo__objetivo}>
                {descricao}
              </p>
              <div className={styles.cabecalho__conteudo__icones}>
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
              </div>
              <Link to={path}>
                <BotaoPrincipal texto={tituloBotao} />
              </Link>
            </Container>
          </div>
        </div>
      </div>
    </>
  )
}
