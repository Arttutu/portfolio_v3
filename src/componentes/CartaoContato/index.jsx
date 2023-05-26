import React from "react"
import styles from "./cartaoContato.module.scss"
import { Link } from "react-router-dom"

import CartaoIcones from "componentes/CartaoIcones"

export default function CartaoContato({ meio, icon, path }) {
  return (
    <div className={styles.cartao}>
      <div className={styles.cartao__conteudo}>
        <Link to={path}>
          <CartaoIcones icones={icon} styleContato="styleContato" />
        </Link>
        <h2>{meio}</h2>
      </div>
    </div>
  )
}
