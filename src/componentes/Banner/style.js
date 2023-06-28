import styled from "styled-components"

export const BannerStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: ${(props) => props.theme.colors.background};
  @media (max-width: 768px) {
    margin: calc(80px) 0px;
    height: 100vh;
  }
`
export const StyleConteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 20px;
  gap: 2em;
  @media (max-width: 768px) {
    gap: 1em;
    align-items: center;
    text-align: center;
  }
`
export const Alinhador = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`
