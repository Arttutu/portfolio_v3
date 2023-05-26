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
  faWhatsappSquare,
  faLinkedin,
  faenvelope,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function CartaoIcones({ icones, styleContato, lg }) {
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
    if (icon == "whatsaap") {
      return faWhatsappSquare
    }
    if (icon == "linkedin") {
      return faLinkedin
    }
    if (icon == "email") {
      return faEnvelope
    }
  })
  return (
    <>
      {iconeTransformado.map((icon, key) => {
        return (
          <FontAwesomeIcon
            icon={icon}
            key={key}
            className={`${styles.icon} ${styles[lg]}  ${styles[styleContato]}`}
          />
        )
      })}
    </>
  )
}
