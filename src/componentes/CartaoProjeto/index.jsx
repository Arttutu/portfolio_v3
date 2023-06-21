import React from "react"
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
  max-width: 400px;
  height: 600px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: left;
  transition: 0.9;
  transition: all.7s;
  transform: rotate(0deg);
  padding: 30px;
  margin: 0 auto;
  text-decoration: none;
  border-radius: 5px;
  background-color: ${corRoxoClaroUm};
  &:hover {
    scale: 1.1;
    transform: rotate(1deg);
  }
  @media (max-width: 768px) {
    &:hover {
      scale: 1;
      transform: none;
    }
  }
`
const TituloCard = styled.h3`
  font-family: ${font};
  font-size: 2em;
  color: ${corBranca};
`
const DescCard = styled.p`
  font-family: ${font};
  font-size: 1.3em;
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
  max-width: 100%;
  height: auto;
`
const BoxBotao = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 20px;
`
const BoxConteudo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
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
        <BoxConteudo>
          <Imagem src={img} alt={titulo} />
          <TituloCard>{titulo}</TituloCard>
          <DescCard>{descricao}</DescCard>
          <Legenda card>Principais tecnologia:</Legenda>
          <BoxIcones>
            <CartaoIcones icones={icone} />
          </BoxIcones>
        </BoxConteudo>
        <BoxBotao>
          <Link to={codigo} target="_blank">
            <BotaoPrincipal texto="Código" card></BotaoPrincipal>
          </Link>
          <Link to={deploy} target="_blank">
            <BotaoPrincipal texto="Deploy" card></BotaoPrincipal>
          </Link>
        </BoxBotao>
      </StyleCard>
    </>
  )
}
