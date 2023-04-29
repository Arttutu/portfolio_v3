import React from "react"
import styles from "./CartaoIcone.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faReact,
  faSass,
  faBootstrap,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons"

export default function CartaoIcones({ icones }) {
  const iconeTransformado = icones.map((icon) => {
    if (icon === "faReact") {
      return faReact
    }
    if (icon === "faSass") {
      return faSass
    }
    if (icon === "faBootstrap") {
      return faBootstrap
    }
    if (icon === "faJsSquare") {
      return faJsSquare
    }
  })
  return (
    <>
      {iconeTransformado.map((icon, key) => {
        return <FontAwesomeIcon icon={icon} key={key} className={styles.icon} />
      })}
    </>
  )
}
