import styled from "styled-components"
export const BoxHeader = styled.header`
  width: 100%;
  height: 80px;
  padding: 20px;
  position: fixed;
  z-index: 1;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.corMenuRodape};
`
export const BoxMenu = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`
export const BoxIcone = styled.div`
  display: flex;
  align-items: center;

  gap: 2rem;
`
export const UlStyle = styled.ul`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  gap: 3em;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  list-style: none;
  .hamburguer {
    display: none;
  }
  @media (max-width: 768px) {
    .hamburguer {
      display: block;
    }
  }
`
