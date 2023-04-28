import React from "react"
import styles from "./SobreMim.module.scss"
import foto from "./logo-avatar.png"
import { Avatar, Container, Stack } from "@mui/material"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { red } from "@mui/material/colors"
import TituloPerguntas from "componentes/TituloPergunta"
import { Link } from "react-router-dom"

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
              Apaixonado por tecnologia e por desenvolvimento de aplicativos e
              sites, possuo uma enorme dedicação e foco em meus projetos e
              estudos, estou cursando Analise e desenvolvimento de sistema,
              busco uma oportunidade de trabalho como Desenvolvedor
              Estágio/Junior e estou disponível no mercado e realmente muito
              interessado em contribuir o máximo possível para empresa e
              evoluir, aprender mais como profissional e adoraria uma
              oportunidade para conversar e contar mais sobre mim em como minhas
              habilidades vão contribuir para sua empresa.
            </p>
            <div className={styles.sobre__conteudo_botao}>
              <BotaoPrincipal
                texto="Dowload do CV"
                estilo2="estilo2"
              ></BotaoPrincipal>
              <Link to="/saibamais">
                <BotaoPrincipal
                  texto="Saiba Mais"
                  estilo2="estilo2"
                ></BotaoPrincipal>
              </Link>
            </div>
          </div>
        </Stack>
      </div>
    </Container>
  )
}
