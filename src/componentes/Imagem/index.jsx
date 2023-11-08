import React from "react"
import Foto from "./img/logo-avatar.png"
import styled from "styled-components"

const ImagemPrimary = styled.img`
  max-width: 100%;
  height: 500px;
  border-radius: ${({ secundary }) => (secundary ? "10%" : "5%")};
  background-color: ${(props) => props.theme.colors.corDois};
  @media (max-width: 768px) {
    max-width: 300px;
  }
`
export default function Imagem() {
  return <ImagemPrimary src={Foto} alt="foto do arthur gomes"></ImagemPrimary>
}
