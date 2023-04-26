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
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} alt={titulo} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descricao}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <BotaoPrincipal texto="Deploy"></BotaoPrincipal>
        <BotaoPrincipal texto="Código"></BotaoPrincipal>
      </CardActions>
    </Card>
  )
}
