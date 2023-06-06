import { Container, Grid } from "@mui/material"
import TituloPerguntas from "componentes/TituloPergunta"
import React from "react"
import styles from "./Contato.module.scss"
import CartaoContato from "componentes/CartaoContato"

export default function Contato() {
  return (
    <div className={styles.contato}>
      <Container>
        <TituloPerguntas
          titulo="Contato"
          pergunta="Como você pode me encontrar ?"
        />

        <Grid container spacing={5} rowSpacing={9} justifyContent="center">
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <CartaoContato
              meio="Whatsapp"
              icon={["whatsaap"]}
              path="https://api.whatsapp.com/send/?phone=5511957243215"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4}>
            <CartaoContato
              meio="Linkedin"
              icon={["linkedin"]}
              path="https://www.linkedin.com/in/santos-gomes/"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
