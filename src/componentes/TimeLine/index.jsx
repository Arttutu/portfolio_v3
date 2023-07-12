import CardTrajetoria from "componentes/CardTrajetoria"
import { Titulo } from "componentes/UI"
import React from "react"
import styled from "styled-components"
import Info from "./info.json"

const TimelineSection = styled.section`
  display: flex;
  margin-top: 200px;
  flex-direction: column;
  align-items: center;
  gap: 4em;
`

const TimelineContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const TimelineItem = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  margin-bottom: 180px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const BoxTitulo = styled.div`
  margin: 0 auto;
  text-align: center;
`

const AboutMePage = () => {
  return (
    <TimelineSection>
      <BoxTitulo>
        <Titulo>Minha Educação</Titulo>
      </BoxTitulo>
      <TimelineContainer>
        {Info.map((item, index) => (
          <TimelineItem key={index}>
            <CardTrajetoria
              data={item.data}
              imagem={item.foto}
              titulo={item.nome}
              descricao={item.descricao}
              icone={item.icone}
            />
          </TimelineItem>
        ))}
      </TimelineContainer>
    </TimelineSection>
  )
}

export default AboutMePage
