import { corBranca, font } from "componentes/UI/variaveis"
const { default: styled } = require("styled-components")

export const StyleRodape = styled.footer`
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.corUm};
`
export const StyleTexto = styled.div`
  font-size: 1em;
  color: ${(props) => props.theme.colors.corDois};
  font-weight: bolder;
  display: flex;
  gap: 0.5em;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-family: ${font};
`
