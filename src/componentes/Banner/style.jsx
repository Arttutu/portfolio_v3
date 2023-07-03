import styled from "styled-components"

export const BannerStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  @media (max-width: 1366px) {
    height: 100%;
    margin: 100px 0;
  }
  @media (max-width: 768px) {
    margin: 150px 0;
  }
`
export const StyleConteudo = styled.div`
  display: flex;
  max-width: 50%;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 auto;
  gap: 2em;
  @media (max-width: 768px) {
    max-width: 100%;
    gap: 2em;
    margin: 0 20px;
    align-items: center;
    text-align: center;
  }
`
export const Alinhador = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`
export const BoxImagem = styled.div`
  max-width: 400px;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: none;
  }
`
export const Imagem = styled.img`
  max-width: 100%;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.corUm};
  display: flex;
`
export const BoxBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  @media (min-width: 768px) and (max-width: 1199px) {
    gap: 5em;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3em;
  }
`
