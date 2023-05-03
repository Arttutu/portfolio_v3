import React from "react"
import styles from "./CartaoIcone.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faReact,
  faSass,
  faBootstrap,
  faJsSquare,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons"

export default function CartaoIcones({ icones, lg }) {
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
    if (icon === "faHtml5") {
      return faHtml5
    }
    if (icon === "faCss3") {
      return faCss3
    }
  })
  return (
    <>
      {iconeTransformado.map((icon, key) => {
        return (
          <FontAwesomeIcon
            icon={icon}
            key={key}
            className={`${styles.icon} ${styles[lg]}`}
          />
        )
      })}
    </>
  )
}
