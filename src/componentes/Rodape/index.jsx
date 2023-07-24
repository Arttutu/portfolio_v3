import React from "react"
import { Legenda, Texto } from "componentes/UI"
import styled from "styled-components"
import { font } from "componentes/UI/variaveis"
import { TfiGithub, TfiLinkedin } from "react-icons/tfi"
import { RiWhatsappFill } from "react-icons/ri"
import {
  IconeEstilizadoGit,
  IconeEstilizadoLik,
  IconeEstilizadoWhat,
} from "componentes/Banner"
import { Link } from "react-router-dom"

const StyleRodape = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.corUm};
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`
const Lista = styled.ul`
  display: flex;
  list-style: none;
  gap: 5em;
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
  gap: 1em;
  > svg {
    display: none;
  }
  :hover {
    > svg {
      display: block;
    }
  }
`
const LinkStyle = styled(Link)`
  text-decoration: none;
`
export default function Rodape() {
  return (
    <StyleRodape>
      <Texto secundary>
        <Lista>
          <LinkStyle to="https://linkedin.com/in/santos-gomes" target="_blank">
            <BoxRodape>
              <Item>Linkedin</Item>
              <IconeEstilizadoGit secundary />
            </BoxRodape>
          </LinkStyle>
          <LinkStyle
            to="https://api.whatsapp.com/send/?phone=5511957243215"
            target="_blank"
          >
            <BoxRodape>
              <Item>WhatsApp</Item>
              <IconeEstilizadoLik secundary />
            </BoxRodape>
          </LinkStyle>
          <LinkStyle to="https://github.com/Arttutu" target="_blank">
            <BoxRodape>
              <Item>Github</Item>
              <IconeEstilizadoWhat secundary />
            </BoxRodape>
          </LinkStyle>
        </Lista>
      </Texto>
    </StyleRodape>
  )
}
