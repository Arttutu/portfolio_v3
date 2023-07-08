import CartaoHabilidade from "componentes/CartaoHabilidades"
import { Titulo } from "componentes/UI"
import React from "react"
import styled from "styled-components"

  const StyleHabilidade = styled.section`
    display: flex;
    flex-direction: column;
  `
  const StyledCartaoEspaco = styled.div`
    display: flex;
    gap: 2em;

`
export default function Habilidades() {
  const habilidades = [
    { titulo: "Bootstrap", icone: ["faBootstrap"] },
    { titulo: "React", icone: ["faReact"] },
    { titulo: "HTML", icone: ["faHtml5"] },
    { titulo: "CSS", icone: ["faCss3"] },
    { titulo: "JS", icone: ["faJsSquare"] },
    { titulo: "SASS", icone: ["faSass"] },
  ]
  return (
      <StyleHabilidade>
        <Titulo>Minhas Habilidades</Titulo>
        <StyledCartaoEspaco>
            {
              habilidades.map((titulo, icone) =>{
                return(
                  <CartaoHabilidade 
                    titulo={titulo.titulo}
                    icone={icone[1]}
                  />
                )
              })
            }
        </StyledCartaoEspaco>
     
      </StyleHabilidade>
  )
}
