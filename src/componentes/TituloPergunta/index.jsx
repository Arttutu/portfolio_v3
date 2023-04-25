import React from "react"
import styles from "./TituloPergunta.module.scss"
export default function TituloPerguntas({ pergunta, titulo }) {
  return (
    <>
      <span className={styles.pergunta}>{pergunta}</span>
      <h2 className={styles.titulo}>{titulo}</h2>
    </>
  )
}
