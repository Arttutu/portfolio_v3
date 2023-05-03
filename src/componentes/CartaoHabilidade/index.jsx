import React from "react"
import styles from "./CartaoHabilidade.module.scss"
import CartaoIcones from "componentes/CartaoIcones"

export default function CartaoHabilidade({ titulo, icone }) {
  return (
    <div className={styles.cartaohabilidade}>
      <CartaoIcones icones={icone} lg="lg" />
      <h3 className={styles.cartaohabilidade__titulo}>{titulo}</h3>
    </div>
  )
}
