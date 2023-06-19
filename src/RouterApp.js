import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicial from "./paginas/inicial/Inicial"
import Menu from "componentes/Menu/Menu"
import SaibaMais from "paginas/saibamais"
import Rodape from "componentes/Rodape"
import PaginaProjetos from "paginas/projetos"
import ScrollToTop from "componentes/scrolltopo"
import MenuMobile from "componentes/MenuMobile"
import { useState } from "react"

export default function RouterApp() {
  const [abrirMenu, setMenu] = useState(false)
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MenuMobile abrirMenu={abrirMenu} setMenu={setMenu} />
      <Menu setMenu={setMenu} />
      <Routes>
        <Route index element={<Inicial />} />
        <Route path="/sobremim" element={<SaibaMais />} />
        <Route path="/projetos" element={<PaginaProjetos />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}
