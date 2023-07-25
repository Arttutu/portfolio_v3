import React from "react"
import styled from "styled-components"
import { font } from "componentes/UI/variaveis"
import { Link } from "react-router-dom"
import {
  IconeEstilizadoGit,
  IconeEstilizadoLik,
  IconeEstilizadoWhat,
} from "componentes/EstiloIcones"

const StyleRodape = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 40px;
  background-color: ${(props) => props.theme.colors.corUm};
`
const Lista = styled.ul`
  display: flex;
  margin: 0 auto;
  text-align: center;
  list-style: none;
  gap: 2em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Item = styled.li`
  font-size: 1em;
  font-family: ${font};
  color: ${(props) => props.theme.colors.corMenuRodape};
`
const BoxRodape = styled.div`
  cursor: pointer;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
`
const LinkStyle = styled(Link)`
  text-decoration: none;
  color: ${(props) =>
    props.secundary
      ? props.theme.colors.corMenuRopape
      : props.theme.colors.corDois};
  font-weight: bold;
`
export default function Rodape() {
  return (
    <StyleRodape>
      <Lista>
        <Item>Entre em contato comigo !</Item>
        <LinkStyle to="https://linkedin.com/in/santos-gomes" target="_blank">
          <BoxRodape>
            <Item>Linkedin</Item>
            <IconeEstilizadoLik secundary />
          </BoxRodape>
        </LinkStyle>
        <LinkStyle
          to="https://api.whatsapp.com/send/?phone=5511957243215"
          target="_blank"
        >
          <BoxRodape>
            <Item>WhatsApp</Item>
            <IconeEstilizadoWhat secundary />
          </BoxRodape>
        </LinkStyle>
        <LinkStyle to="https://github.com/Arttutu" target="_blank">
          <BoxRodape>
            <Item>Github</Item>
            <IconeEstilizadoGit secundary />
          </BoxRodape>
        </LinkStyle>
      </Lista>
    </StyleRodape>
  )
}
