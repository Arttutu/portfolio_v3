import React from "react"
import styles from "./BotaoPrincipal.module.scss"

export default function BotaoPrincipal({ texto, sobre }) {
  return <button className={`${styles.botao} ${styles[sobre]}`}>{texto}</button>
}
