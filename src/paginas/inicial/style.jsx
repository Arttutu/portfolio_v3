const { default: styled } = require("styled-components")

export const StyledMain = styled.main`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
