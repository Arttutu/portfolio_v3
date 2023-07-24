import CardTrajetoria from "componentes/CardTrajetoria"
import { Box, Titulo } from "componentes/UI"
import React from "react"
import styled from "styled-components"
import Info from "./info.json"
import { ImArrowLeft, ImArrowUp } from "react-icons/im"

const BoxTitulo = styled.div`
  margin: 150px 20px 100px 20px;
  text-align: center;
`
const BoxCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 100px;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-between;
  gap: 2em;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    gap: 3em;
    margin: 70px 30px;
  }
`
const IconSetaLado = styled(ImArrowLeft)`
  font-size: 52px;
  color: ${(props) => props.theme.colors.corUm};
  display: ${(props) => (props.icone == "false" ? "none" : "block")};
  @media (max-width: 768px) {
    display: none;
  }
`
const IconSetaUp = styled(ImArrowUp)`
  display: none;
  @media (max-width: 768px) {
    font-size: 52px;
    color: ${(props) => props.theme.colors.corUm};
    display: ${(props) => (props.icone == "false" ? "none" : "block")};
  }
`

const Educacao = () => {
  return (
    <Box projeto>
      <BoxTitulo>
        <Titulo>Minha Trajetória até aqui</Titulo>
      </BoxTitulo>
      <BoxCard>
        {Info.map((item, index) => (
          <>
            <CardTrajetoria
              data={item.data}
              imagem={item.foto}
              titulo={item.nome}
              descricao={item.descricao}
              key={index}
            />
            <IconSetaLado icone={item.icone} />
            <IconSetaUp icone={item.icone} />
          </>
        ))}
      </BoxCard>
    </Box>
  )
}

export default Educacao
