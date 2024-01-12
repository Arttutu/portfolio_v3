import React from "react"
import Foto from "./img/logo-avatar.png"
import styled from "styled-components"

const ImagemPrimary = styled.img`
  max-width: 600px;
  height: 400px;
  border-radius: ${({ secundary }) => (secundary ? "100%" : "20%")};
  background-color: ${(props) => props.theme.colors.corDois};
  @media (max-width: 768px) {
    max-width: 300px;
    height: 300px;
  }
`
export default function Imagem() {
  return <ImagemPrimary src={Foto} alt="foto do arthur gomes"></ImagemPrimary>
}
