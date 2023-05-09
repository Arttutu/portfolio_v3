import React from "react"
import styles from "./Banner.module.scss"
import { Container } from "@mui/material"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { Link } from "react-router-dom"
import header from "./header.jpg"

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
