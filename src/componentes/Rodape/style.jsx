import { corBranca, font } from "componentes/UI/variaveis"
const { default: styled } = require("styled-components")

export const StyleRodape = styled.footer`
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.corMenuRodape};
`
export const StyleTexto = styled.div`
  font-size: 1em;
  color: ${corBranca};
  display: flex;
  gap: 0.5em;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-family: ${font};
`
