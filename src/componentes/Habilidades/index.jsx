import React from "react"
import styles from "./Habilidades.module.scss"
import TituloPerguntas from "componentes/TituloPergunta"
import { Container, Grid } from "@mui/material"
import CartaoHabilidade from "componentes/CartaoHabilidade"

export default function Habilidades() {
  const habilidades = [
    { titulo: "Bootstrap", icone: ["faBootstrap", "index"] },
    { titulo: "React", icone: ["faReact", "index"] },
    { titulo: "HTML", icone: ["faHtml5", "index"] },
    { titulo: "CSS", icone: ["faCss3", "index"] },
    { titulo: "JS", icone: ["faJsSquare", "TESTE"] },
    { titulo: "SASS", icone: ["faSass", "TESTE"] },
  ]
  return (
    <div className={styles.habilidades}>
      <Container>
        <div className={styles.habilidades__container}>
          <TituloPerguntas
            titulo="Habilidades"
            pergunta="Quais são as minhas Hard Skill ?"
          />
          <Grid container rowSpacing={5} columnSpacing={10}>
            {habilidades.map((item) => {
              return (
                <Grid item xs={6} sm={4} md={4} lg={4} key={item.titulo}>
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
