import React from "react"
import styles from "./CartaoProjeto.module.scss"
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { Link } from "react-router-dom"
import CartaoIcones from "componentes/CartaoIcones"

export default function CartaoProjeto({
  img,
  titulo,
  descricao,
  deploy,
  codigo,
  icone,
}) {
  return (
    <>
      <Card
        sx={{
          Width: 345,
          height: "auto",
          display: "flex",
          justifyContent: "center",
        }}
        className={styles.card}
      >
        <CardActionArea>
          <CardMedia component="img" image={img} alt={titulo} />
          <CardContent>
            <h3 className={styles.card__titulo}>{titulo}</h3>
            <p className={styles.card__descricao}>{descricao}</p>
            <h4 className={styles.card__titulo}>Principais tecnologia:</h4>
            <div className={styles.card__icones}>
              <CartaoIcones icones={icone} />
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={codigo} target="_blank">
            <BotaoPrincipal texto="Código" tamanho="sm"></BotaoPrincipal>
          </Link>
          <Link to={deploy} target="_blank">
            <BotaoPrincipal texto="Deploy" tamanho="sm"></BotaoPrincipal>
          </Link>
        </CardActions>
      </Card>
    </>
  )
}
