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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faReact,
  faSass,
  faBootstrap,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons"
export default function CartaoProjeto({
  img,
  titulo,
  descricao,
  deploy,
  codigo,
  icone,
}) {
  const styleslink = {
    textDecoration: "none",
  }
  const iconetransforma = icone.map((icon) => {
    if (icon === "faReact") {
      return faReact
    }
    if (icon === "faSass") {
      return faSass
    }
    if (icon === "faBootstrap") {
      return faBootstrap
    }
    if (icon === "faJsSquare") {
      return faJsSquare
    }
  })
  return (
    <>
      <Link to={deploy} target="_blank" style={styleslink}>
        <Card sx={{ Width: 345, height: "auto" }} className={styles.card}>
          <CardActionArea>
            <CardMedia component="img" height="140" image={img} alt={titulo} />
            <CardContent>
              <h3 className={styles.card__titulo}>{titulo}</h3>
              <p className={styles.card__descricao}>{descricao}</p>
              <h4 className={styles.card__titulo}>Principias tecnologia:</h4>
              <div className={styles.card__icones}>
                {console.log(icone)}
                {iconetransforma.map((icon, key) => {
                  return <FontAwesomeIcon icon={icon} className={styles.icon} />
                })}
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={codigo} target="_blank">
              <BotaoPrincipal texto="Código" tamanho="sm"></BotaoPrincipal>
            </Link>
          </CardActions>
        </Card>
      </Link>
    </>
  )
}
