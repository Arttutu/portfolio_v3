import React from "react"
import styles from "./Habilidades.module.scss"
import TituloPerguntas from "componentes/TituloPergunta"
import { Container, Grid } from "@mui/material"
import CartaoHabilidade from "componentes/CartaoHabilidade"

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
    <div className={styles.habilidades}>
      <Container>
        <div className={styles.habilidades__container}>
          <TituloPerguntas
            titulo="Habilidades"
            pergunta="Quais são as minhas Hard Skill ?"
          />
          <Grid container rowSpacing={5} columnSpacing={5}>
            {habilidades.map((item) => {
              return (
                <Grid item xs={4} sm={4} md={4} lg={4} key={item.titulo}>
                  <CartaoHabilidade titulo={item.titulo} icone={item.icone} />
                </Grid>
              )
            })}
          </Grid>
        </div>
      </Container>
    </div>
  )
}
