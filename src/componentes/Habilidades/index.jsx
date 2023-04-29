import React from "react"
import styles from "./Habilidades.module.scss"
import TituloPerguntas from "componentes/TituloPergunta"
import { Container } from "@mui/material"

export default function Habilidades() {
  return (
    <div className={styles.habilidades}>
      <Container>
        <div className={styles.habilidades__container}>
          <TituloPerguntas
            titulo="Habilidades"
            pergunta="Quais são as minhas Hard Skill ?"
          />
        </div>
      </Container>
    </div>
  )
}
