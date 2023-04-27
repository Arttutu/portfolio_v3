import React from "react"
import styles from "./CartaoProjeto.module.scss"
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"
import BotaoPrincipal from "componentes/BotaoPrincipal"

export default function CartaoProjeto({ img, titulo, descricao }) {
  return (
    <Card sx={{ Width: 345 }} className={styles.card}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} alt={titulo} />
        <CardContent>
          <h3 className={styles.card__titulo}>{titulo}</h3>
          <h3 className={styles.card__descricao}>{descricao}</h3>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <BotaoPrincipal texto="Deploy" tamanho="sm"></BotaoPrincipal>
        <BotaoPrincipal texto="Código" tamanho="sm"></BotaoPrincipal>
      </CardActions>
    </Card>
  )
}
