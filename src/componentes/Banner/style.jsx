import styled from "styled-components"

export const BannerStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 81px);
  background-color: ${(props) => props.theme.colors.background};
  @media (max-width: 768px) {
    margin: 100px 0;
    height: 100%;
  }
`
export const StyleConteudo = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 auto;
  gap: 2em;
  @media (max-width: 768px) {
    width: 100%;
    gap: 0.5em;
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

  @media (max-width: 1024px) {
    max-width: 300px;
  }
`
export const Imagem = styled.img`
  max-width: 100%;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.corUm};
  display: flex;
`
