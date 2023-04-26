import React from "react"
import styles from "./Projeto.module.scss"
import { Container, Grid } from "@mui/material"
import CartaoProjeto from "componentes/CartaoProjeto"
import projetos from "./projetos.json"
import TituloPerguntas from "componentes/TituloPergunta"

export default function Projeto() {
  const itens = projetos
  return (
    <div className={styles.projeto}>
      <Container>
        <div className={styles.projetos__container}>
          <TituloPerguntas titulo="Projetos" pergunta="O que eu fiz ?" />
          <Grid container spacing={5} rowSpacing={5} justifyContent="center">
            {itens.map((item) => (
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <CartaoProjeto
                  img={item.img}
                  titulo={item.titulo}
                  descricao={item.descricao}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  )
}
