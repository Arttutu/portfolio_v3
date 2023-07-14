import React from "react"
import Foto from "./img/logo-avatar.png"
import styled from "styled-components"

const ImagemPrimary = styled.img`
  max-width: 100%;
  border-radius: ${({ secundary }) => (secundary ? "10%" : "100%")};
  background-color: ${(props) => props.theme.colors.corUm};
  @media (max-width: 768px) {
    max-width: 300px;
  }
`
export default function Imagem() {
  return <ImagemPrimary src={Foto}></ImagemPrimary>
}
