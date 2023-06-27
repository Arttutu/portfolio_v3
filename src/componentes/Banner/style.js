import styled from "styled-components"

export const BannerStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  height: 100vh;

  background-color: ${(props) => props.theme.colors.background};
  @media (max-width: 768px) {
    margin-bottom: 100px;
  }
  @media (max-width: 375px) {
    margin-bottom: 200px;
    margin-top: 200px;
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
    margin-top: 130px;
  }
`
export const Alinhador = styled.div`
  display: flex;

  gap: 2em;
`
