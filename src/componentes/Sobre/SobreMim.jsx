import React from "react"
import styles from "./SobreMim.module.scss"
import foto from "./logo-avatar.png"
import { Avatar, Container, Stack } from "@mui/material"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { red } from "@mui/material/colors"
import TituloPerguntas from "componentes/TituloPergunta"

export default function SobreMim() {
  return (
    <Container>
      <div className={styles.sobre}>
        <Stack
          spacing={{ md: 10, xs: 5, sm: 8 }}
          direction={{ xs: "column", sm: "column", md: "row" }}
          alignItems="center"
        >
          <Avatar
            src={foto}
            alt="foto do arthur gomes , criador do site"
            sx={{ width: 300, height: 300 }}
            className={styles.sobre__img}
          />
          <div className={styles.sobre__conteudo}>
            <TituloPerguntas titulo="Quem eu sou?" pergunta="Sobre Mim" />
            <p className={styles.sobre__conteudo_descricao}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae aliquid ad provident aut fuga animi soluta quae eos
              non cupiditate voluptates dolorem, doloremque quos dicta quibusdam
              impedit iure nemo a iste culpa! Quasi quibusdam hic recusandae
              delectus velit officiis explicabo voluptatibus! Nemo esse
              similique, voluptates labore distinctio, placeat explicabo facilis
              molestias, blanditiis culpa iusto voluptatem ratione eligendi a,
              quia temporibus velit vero ipsa sint ex voluptatum expedita
              aliquid! Debitis, nam!
            </p>
            <BotaoPrincipal
              texto="Dowload do CV"
              estilo2="estilo2"
            ></BotaoPrincipal>
          </div>
        </Stack>
      </div>
    </Container>
  )
}
