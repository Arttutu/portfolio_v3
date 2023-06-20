import React from "react"
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { Link } from "react-router-dom"
import CartaoIcones from "componentes/CartaoIcones"
import styled from "styled-components"
import {
  corBranca,
  corPreta,
  corRoxoClaroUm,
  font,
} from "componentes/UI/variaveis"
import { Legenda } from "componentes/UI"
const StyleCard = styled.div`
  width: 400px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.9;
  scale: 1;
  padding: 30px;
  margin: 0 auto;
  text-decoration: none;
  border-radius: 5px;
  background-color: ${corRoxoClaroUm};
`
const TituloCard = styled.h3`
  font-family: ${font};
  font-size: 2.5em;
  color: ${corBranca};
`
const DescCard = styled.p`
  font-family: ${font};
  font-size: 1.7em;
  font-weight: bolder;
  color: ${corPreta};
`
const BoxIcones = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1rem;
`
const Imagem = styled.img`
  max-width: 400px;
  height: auto;
`
export default function CartaoProjeto({
  img,
  titulo,
  descricao,
  deploy,
  codigo,
  icone,
}) {
  return (
    <>
      <StyleCard>
        <CardActionArea>
          <Imagem src={img} alt={titulo} />
          <CardContent>
            <TituloCard>{titulo}</TituloCard>
            <DescCard>{descricao}</DescCard>
            <Legenda card>Principais tecnologia:</Legenda>
            <BoxIcones>
              <CartaoIcones icones={icone} />
            </BoxIcones>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={codigo} target="_blank">
            <BotaoPrincipal texto="Código"></BotaoPrincipal>
          </Link>
          <Link to={deploy} target="_blank">
            <BotaoPrincipal texto="Deploy"></BotaoPrincipal>
          </Link>
        </CardActions>
      </StyleCard>
    </>
  )
}
