import React from "react"
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
  faLinux,
  faPython,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Icones = styled(FontAwesomeIcon)`
  font-size: 35px;
  color: ${({ habilidade, theme }) =>
    habilidade ? theme.colors.corUm : theme.colors.corDois};
  margin-top: 5px;
  transition: all.5s;
  &:hover {
    scale: 1.2;
  }
`
export default function CartaoIcones({ icones, habilidade }) {
  const iconeTransformado = icones.map((icon) => {
    if (icon === "faReact") {
      return faReact
    }
    if (icon === "faLinux") {
      return faLinux
    }
    if (icon === "faPython") {
      return faPython
    }
    if (icon == "faSass") {
      return faSass
    }
    if (icon == "faBootstrap") {
      return faBootstrap
    }
    if (icon == "faJsSquare") {
      return faJsSquare
    }
    if (icon == "faHtml5") {
      return faHtml5
    }
    if (icon == "faCss3") {
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
        return <Icones habilidade={habilidade} icon={icon} key={key} />
      })}
    </>
  )
}
