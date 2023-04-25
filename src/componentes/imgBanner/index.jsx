import React from "react"
import header from "./header.jpg"
import styles from "./imgBanner.module.scss"
export default function ImgBanner() {
  return <img className={styles.imagem} src={header}></img>
}
