import React from "react"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { Link } from "react-router-dom"
import CartaoIcones from "componentes/CartaoIcones"
import styled from "styled-components"
import { font } from "componentes/UI/variaveis"
import { Texto } from "componentes/UI"
const StyleCard = styled.article`
  height: 800px;
  padding: 20px 30px;
  justify-content: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: left;
  transition: 0.9;
  transition: all.7s;
  margin: 0 auto;
  text-decoration: none;
  border-radius: 5px;
  border: 3px solid ${(props) => props.theme.colors.corDois};
  box-shadow: 4px 4px 4px 4px #00000044;
  &:hover {
    scale: 1.05;
  }
  @media (max-width: 768px) {
    height: 700px;
    &:hover {
      scale: 1;
      transform: none;
    }
  }
`
export const TituloCard = styled.h3`
  font-family: ${font};
  font-size: 1.7em;
  color: ${(props) => props.theme.colors.corDois};
  @media (max-width: 768px) {
    font-size: 1.3em;
  }
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
        <TituloCard>{titulo}</TituloCard>
        <Imagem src={img} alt={titulo} />
        <Texto secundary>{descricao}</Texto>
        <TituloCard>Principais tecnologia:</TituloCard>
        <BoxIcones>
          <CartaoIcones icones={icone} />
        </BoxIcones>
        <BoxBotao>
          <Link to={codigo} target="_blank">
            <BotaoPrincipal texto="Código" card></BotaoPrincipal>
          </Link>
          <Link to={deploy} target="_blank">
            <BotaoPrincipal texto="Site" card></BotaoPrincipal>
          </Link>
        </BoxBotao>
      </StyleCard>
    </>
  )
}
