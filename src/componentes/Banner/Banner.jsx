import React from "react"
import styles from "./Banner.module.scss"
import { Container } from "@mui/material"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { Link } from "react-router-dom"

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
        <Container>
          <div className={styles.banner__conteudo}>
            <h1 className={styles.banner__conteudo__titulo}>{saudacao}</h1>
            <h2 className={styles.banner__conteudo__titulo}>{titulo}</h2>
            <p className={styles.banner__conteudo__objetivo}>{descricao}</p>
            <Link to={path}>
              <BotaoPrincipal texto={tituloBotao} />
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}
