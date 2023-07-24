import { BrowserRouter, Routes, Route } from "react-router-dom"
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
  corPreta,
} from "./componentes/UI/variaveis"
import Inicial from "paginas/inicial"

export default function RouterApp() {
  const [abrirMenu, setMenu] = useState(false)
  const [temaMudar, handleMudarTema] = useState("Light")
  const theme = {
    Light: {
      colors: {
        corUm: corRoxoEscuroUm,
        corDois: corBranca,
        corBotaoCard: corRoxoClaroUm,
        background: corBranca,
        corMenuRodape: corBranca,
      },
    },
    Dark: {
      colors: {
        corUm: corRoxoClaroUm,
        corDois: corRoxoEscuroUm,
        corBotaoCard: corRoxoEscuroDois,
        background: corRoxoEscuroUm,
        corMenuRodape: corPreta,
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
