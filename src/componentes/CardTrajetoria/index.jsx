import { Legenda, Texto } from "componentes/UI"
import React from "react"
import styled from "styled-components"
import { ImArrowLeft } from "react-icons/im"

const StyleCardTrajetoria = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  padding: 20px;
  width: 400px;
  height: 600px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.corUm};
  box-shadow: 5px 5px 5px 5px #00000060;
`

const ImagemTrajetoria = styled.img`
  margin: 0 auto;
  max-width: 100%;
`

const StyleAreaCard = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;
  > svg {
    font-size: 52px;
    color: ${(props) => props.theme.colors.corUm};
    display: ${(props) => (props.icone == "false" ? "none" : "block")};
  }
  @media (max-width: 768px) {
    gap: 0.5em;
    > svg {
      display: none;
    }
  }
`

export default function CardTrajetoria({
  data,
  titulo,
  descricao,
  imagem,
  icone,
}) {
  return (
    <StyleAreaCard icone={icone}>
      <StyleCardTrajetoria>
        <ImagemTrajetoria src={imagem}></ImagemTrajetoria>
        <Legenda>{titulo}</Legenda>
        <Texto secundary>{data}</Texto>
        <Texto secundary>{descricao}</Texto>
      </StyleCardTrajetoria>
      <ImArrowLeft />
    </StyleAreaCard>
  )
}
