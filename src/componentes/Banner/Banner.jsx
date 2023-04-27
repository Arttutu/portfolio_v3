import React from "react"
import styles from "./Banner.module.scss"

import { Container } from "@mui/material"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { Link } from "react-router-dom"

export default function Banner() {
  return (
    <>
      <div className={styles.banner}>
        <Container>
          <div className={styles.banner__conteudo}>
            <h1 className={styles.banner__conteudo__titulo}>Oi!</h1>
            <h2 className={styles.banner__conteudo__titulo}>
              Eu sou o Arthur Gomes
            </h2>
            <p className={styles.banner__conteudo__objetivo}>FRONTEND WEB</p>
            <Link to={""}>
              <BotaoPrincipal texto="Meus Projetos" />
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}
