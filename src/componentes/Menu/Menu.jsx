import React from "react"
import styles from "./Menu.module.scss"
import { Link } from "react-router-dom"

export default function Menu() {
  return (
    <header>
      <nav>
        <div class="container">
          <a class="logo" href="#">
            Arthur Gomes
          </a>
          <ul class="nav">
            <li class="item">
              <Link class="link" to="">
                Home
              </Link>
            </li>
            <li class="item">
              <Link class="link" to="">
                Sobre
              </Link>
            </li>
            <li class="item">
              <Link class="link" to="">
                Contato
              </Link>
            </li>
            <li class="item">
              <Link class="link" to="">
                Contato
              </Link>
            </li>
            <li class="item">
              <Link class="link" to="">
                Contato
              </Link>
            </li>
          </ul>

          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </nav>
    </header>
  )
}
