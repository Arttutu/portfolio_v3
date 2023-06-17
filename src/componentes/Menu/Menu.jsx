import React, { useState } from "react"
import styles from "./Menu.module.scss"
import { Link, NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

export default function Menu() {
  const [isMobile, setIsMobile] = useState(false)
  function scrollToTop() {
    window.scrollTo(0, 10)
  }

  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/" onClick={scrollToTop}>
         <h3 className={styles.navbar__logo}>Arthur</h3>
        </Link>

        <ul
          className={
            isMobile ? styles.navbar__links__mobile : styles.navbar__links
          }
          onClick={() => setIsMobile(false)}
        >
          <NavLink
            to="/"
            onClick={scrollToTop}
            className={styles.navbar__links__item}
          >
            <li>Home</li>
          </NavLink>
          <NavLink to="/saibamais" className={styles.navbar__links__item}>
            <li>Sobre</li>
          </NavLink>
          <NavLink to="/projetos" className={styles.navbar__links__item}>
            <li>Projetos</li>
          </NavLink>
          <NavLink to="/" className={styles.navbar__links__item}>
            <li>Contato</li>
          </NavLink>
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
    </header>
  )
}
