import CardTrajetoria from "componentes/CardTrajetoria"
import { Box, Titulo } from "componentes/UI"
import React from "react"
import styled from "styled-components"
import Info from "./info.json"
import { ImArrowLeft } from "react-icons/im"

const BoxTitulo = styled.div`
  margin: 80px auto;
  text-align: center;
`
const BoxCard = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3em;

    margin: 70px 30px;
  }
`
const IconSeta = styled(ImArrowLeft)`
  font-size: 52px;
  color: ${(props) => props.theme.colors.corUm};
  display: ${(props) => (props.icone == "false" ? "none" : "block")};
  @media (max-width: 768px) {
    display: none;
  }
`

const AboutMePage = () => {
  return (
    <Box>
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
            <IconSeta icone={item.icone} />
          </>
        ))}
      </BoxCard>
    </Box>
  )
}

export default AboutMePage
