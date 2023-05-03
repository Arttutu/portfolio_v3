import { Container } from "@mui/material"
import TituloPerguntas from "componentes/TituloPergunta"
import React from "react"
import styles from "./Contato.module.scss"

export default function Contato() {
  return (
    <div className={styles.contato}>
      <Container>
        <TituloPerguntas
          titulo="Contato"
          pergunta="Como você pode me encontrar ?"
        />
      </Container>
    </div>
  )
}
