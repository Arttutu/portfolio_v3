import styled from "styled-components"
import { TfiGithub, TfiLinkedin } from "react-icons/tfi"
import { RiWhatsappFill } from "react-icons/ri"

export const IconeEstilizadoGit = styled(TfiGithub)`
  font-size: ${(props) => (props.secundary ? "20px" : "30px")};
  color: ${(props) =>
    props.secundary
      ? props.theme.colors.corMenuRodape
      : props.theme.colors.corUm};
`
export const IconeEstilizadoLik = styled(TfiLinkedin)`
  font-size: ${(props) => (props.secundary ? "20px" : "30px")};
  color: ${(props) =>
    props.secundary
      ? props.theme.colors.corMenuRodape
      : props.theme.colors.corUm};
`
export const IconeEstilizadoWhat = styled(RiWhatsappFill)`
  font-size: ${(props) => (props.secundary ? "20px" : "30px")};
  color: ${(props) =>
    props.secundary
      ? props.theme.colors.corMenuRodape
      : props.theme.colors.corUm};
`
