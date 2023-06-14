import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicial from "./paginas/inicial/Inicial"
import Menu from "componentes/Menu/Menu"
import SaibaMais from "paginas/saibamais"
import Rodape from "componentes/Rodape"
import PaginaProjetos from "paginas/projetos"
import ScrollToTop from "componentes/scrolltopo"

export default function RouterApp() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<Inicial />} />
        <Route path="/saibamais" element={<SaibaMais />} />
        <Route path="/projetos" element={<PaginaProjetos />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}
