import React from "react"
import styles from "./Rodape.module.scss"
import { AiFillCopyrightCircle } from "react-icons/ai"
import { Padding } from "@mui/icons-material"
export default function Rodape() {
  return (
    <div className={styles.rodape}>
      <span className={styles.rodape__texto}>
        Desenvolvido por
        <AiFillCopyrightCircle
          className={styles.rodape__icone}
          size={20}
          color="white"
        />
        Arthur Gomes dos Santos
      </span>
    </div>
  )
}
