import styled from "styled-components"

export const BannerStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  @media (max-width: 768px) {
    height: 100%;
    margin: 100px 0px;
  }
`
export const StyleConteudo = styled.div`
  display: flex;
  max-width: 50%;
  flex-direction: column;
  box-sizing: border-box;
  gap: 1em;
  @media (max-width: 768px) {
    max-width: 100%;
    gap: 2em;
    margin: 0 20px;
    text-align: left;
  }
`
export const Alinhador = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`
export const BoxImagem = styled.div`
  max-width: 400px;
`

export const BoxBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) and (max-width: 1199px) {
    gap: 5em;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 3em;
  }
`
