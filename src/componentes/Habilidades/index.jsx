import CartaoHabilidade from "componentes/CartaoHabilidades"
import { Box, Titulo } from "componentes/UI"
import React from "react"
import styled from "styled-components"

const StyleHabilidade = styled.section`
  display: flex;
  padding: 0px 10px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2em;
  }
`
const StyleCaixaTitulo = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 50%;
`
const StyledCartaoEspaco = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  gap: 2em;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export default function Habilidades() {
  const habilidades = [
    { titulo: "ReactJs", icone: ["faReact"], cor: "blue" },
    { titulo: "JavaScript", icone: ["faJsSquare"], cor: "yellow" },
    { titulo: "Linux", icone: ["faLinux"], cor: "gray" },
    { titulo: "Python", icone: ["faPython"], cor: "orange" },
    { titulo: "Styled-Components", icone: ["pink"] },
    { titulo: "HTML", icone: ["faHtml5"], cor: "red" },
    { titulo: "CSS", icone: ["faCss3"], cor: "blue" },
    { titulo: "Bootstrap", icone: ["faBootstrap"], cor: "purple" },
    { titulo: "SASS", icone: ["faSass"], cor: "red" },
  ]
  return (
    <Box>
      <StyleHabilidade>
        <StyleCaixaTitulo>
          <Titulo>Hard Skills</Titulo>
        </StyleCaixaTitulo>
        <StyledCartaoEspaco>
          {habilidades.map((valor, index) => {
            return (
              <CartaoHabilidade
                titulo={valor.titulo}
                icone={valor.icone}
                cor={valor.cor}
                key={index}
              />
            )
          })}
        </StyledCartaoEspaco>
      </StyleHabilidade>
    </Box>
  )
}
