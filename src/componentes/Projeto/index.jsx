import React from "react"
import { Grid } from "@mui/material"
import CartaoProjeto from "componentes/CartaoProjeto"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Box, Titulo } from "componentes/UI"
const StyleProjeto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  padding-top: 100px;
  padding-bottom: 100px;
`
const ContainerProjetos = styled.div`
  display: flex;
  gap: 3em;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: center;
  margin: 50px 20px;
`
export default function Projeto({
  projetos,
  path,
  tituloBotao,
  titulo,
  pergunta,
}) {
  const itens = projetos

  return (
    <StyleProjeto>
      <Box>
        <ContainerProjetos>
          <Titulo>Meus Projetos</Titulo>
          <Grid container spacing={5} rowSpacing={9} justifyContent="center">
            {itens.map((item, index) => (
              <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
                <CartaoProjeto
                  key={index}
                  img={item.img}
                  titulo={item.titulo}
                  descricao={item.descricao}
                  deploy={item.deploy}
                  codigo={item.codigo}
                  icone={item.tecnologia}
                />
              </Grid>
            ))}
          </Grid>
          <Link to={path}>
            <BotaoPrincipal texto={tituloBotao}></BotaoPrincipal>
          </Link>
        </ContainerProjetos>
      </Box>
    </StyleProjeto>
  )
}
