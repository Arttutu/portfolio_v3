import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicial from "./paginas/inicial/Inicial"
import Menu from "componentes/Menu"
import SaibaMais from "paginas/saibamais"
import Rodape from "componentes/Rodape"
import PaginaProjetos from "paginas/projetos"
import ScrollToTop from "componentes/scrolltopo"
import MenuMobile from "componentes/MenuMobile"
import { useState } from "react"
import { GlobalStyles } from "componentes/GlobalStyles"
import { ThemeProvider } from "styled-components"
import {
  corRoxoClaroUm,
  corRoxoEscuroDois,
  corBranca,
  corRoxoEscuroUm,
} from "./componentes/UI/variaveis"

export default function RouterApp() {
  const [abrirMenu, setMenu] = useState(false)
  const [temaMudar, handleMudarTema] = useState("light")

  const theme = {
    light: {
      colors: {
        corUm: corRoxoEscuroUm,
        corDois: corBranca,
        corBotaoCard: corRoxoClaroUm,
        background: corBranca,
        corMenuRodape: corRoxoEscuroDois,
      },
    },
    dark: {
      colors: {
        corUm: corRoxoClaroUm,
        corDois: corRoxoEscuroUm,
        corBotaoCard: corRoxoEscuroDois,
        background: corRoxoEscuroUm,
        corMenuRodape: corRoxoClaroUm,
      },
    },
  }

  return (
    <BrowserRouter>
      <GlobalStyles />
      <ScrollToTop />
      <ThemeProvider theme={theme[temaMudar]}>
        <MenuMobile
          abrirMenu={abrirMenu}
          setMenu={setMenu}
          temaMudar={temaMudar}
        />
        <Menu
          setMenu={setMenu}
          temaMudar={temaMudar}
          mudarTema={handleMudarTema}
        />
        <Routes>
          <Route index element={<Inicial />} />
          <Route path="/sobremim" element={<SaibaMais />} />
          <Route path="/projetos" element={<PaginaProjetos />} />
        </Routes>
        <Rodape />
      </ThemeProvider>
    </BrowserRouter>
  )
}
