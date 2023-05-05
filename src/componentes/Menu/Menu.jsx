import React, { useState } from "react"
import styles from "./Menu.module.scss"
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

export default function Menu() {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/">
          <h3 className={styles.navbar__logo}>Arthur</h3>
        </Link>

        <ul
          className={
            isMobile ? styles.navbar__links__mobile : styles.navbar__links
          }
          onClick={() => setIsMobile(false)}
        >
          <Link to="/saibamais" className={styles.navbar__links__item}>
            <li>Sobre</li>
          </Link>
          <Link to="/" className={styles.navbar__links__item}>
            <li>Projeto</li>
          </Link>
          <Link to="/" className={styles.navbar__links__item}>
            <li>Habilidades</li>
          </Link>
          <Link to="/" className={styles.navbar__links__item}>
            <li>Contato</li>
          </Link>
        </ul>
        <button
          className={styles.mobile__icon}
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <AiOutlineClose></AiOutlineClose>
          ) : (
            <GiHamburgerMenu></GiHamburgerMenu>
          )}
        </button>
      </nav>
    </>
  )
}
