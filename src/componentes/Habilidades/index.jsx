import CartaoHabilidade from "componentes/CartaoHabilidades"
import { Titulo } from "componentes/UI"
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
    { titulo: "ReactJs", icone: ["faReact"] },
    { titulo: "JavaScript", icone: ["faJsSquare"] },
    { titulo: "Linux", icone: ["faLinux"] },
    { titulo: "Python", icone: ["faPython"] },
    { titulo: "Styled-Components", icone: ["styled"] },
    { titulo: "HTML", icone: ["faHtml5"] },
    { titulo: "CSS", icone: ["faCss3"] },
    { titulo: "Bootstrap", icone: ["faBootstrap"] },
    { titulo: "SASS", icone: ["faSass"] },
  ]
  return (
    <StyleHabilidade>
      <StyleCaixaTitulo>
        <Titulo>Minhas Habilidades</Titulo>
      </StyleCaixaTitulo>
      <StyledCartaoEspaco>
        {habilidades.map((valor) => {
          return <CartaoHabilidade titulo={valor.titulo} icone={valor.icone} />
        })}
      </StyledCartaoEspaco>
    </StyleHabilidade>
  )
}
