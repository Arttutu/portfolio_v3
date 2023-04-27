import React from "react"
import styles from "./BotaoPrincipal.module.scss"

export default function BotaoPrincipal({ texto, estilo2, tamanho }) {
  return (
    <button className={`${styles.botao} ${styles[estilo2]} ${styles[tamanho]}`}>
      {texto}
    </button>
  )
}
