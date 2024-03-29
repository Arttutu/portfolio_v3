import { Texto } from "componentes/UI"
import React from "react"
import styled from "styled-components"
import { TituloCard } from "componentes/CartaoProjeto"
import { FiCalendar } from "react-icons/fi"

const StyleCardTrajetoria = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
  border-radius: 10px;
  max-width: 400px;
  padding: 15px;
  height: 650px;
  text-align: left;
  border: 2px solid ${(props) => props.theme.colors.corDois};
`

const ImagemTrajetoria = styled.img`
  margin: 0 auto;
  max-width: 100%;
`

const StyleAreaCard = styled.div`
  display: flex;
  align-items: center;
`
const IconCalendario = styled(FiCalendar)`
  font-size: 22px;
  color: ${(props) => props.theme.colors.corDois};
`
const BoxData = styled.div`
  display: flex;
  gap: 1em;
`

export default function CardTrajetoria({ data, titulo, descricao, imagem }) {
  return (
    <>
      <StyleAreaCard>
        <StyleCardTrajetoria>
          <ImagemTrajetoria src={imagem}></ImagemTrajetoria>
          <TituloCard>{titulo}</TituloCard>
          <BoxData>
            <IconCalendario />
            <Texto secundary>{data}</Texto>
          </BoxData>
          <Texto secundary>{descricao}</Texto>
        </StyleCardTrajetoria>
      </StyleAreaCard>
    </>
  )
}
