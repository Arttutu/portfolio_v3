import { corRoxoEscuroUm } from "componentes/UI/variaveis"
import styled from "styled-components"

export const BannerStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${corRoxoEscuroUm};
  @media (max-width: 768px) {
    margin-bottom: 100px;
  }
`
export const StyleConteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  margin: 0 20px;
  gap: 1em;
  @media (max-width: 768px) {
    margin-top: 130px;
  }
`
export const Alinhador = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`
