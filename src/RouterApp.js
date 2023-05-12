import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicial from "./paginas/inicial/Inicial"
import Menu from "componentes/Menu/Menu"
import SaibaMais from "paginas/saibamais"
import Rodape from "componentes/Rodape"

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index element={<Inicial />} />
        <Route path="/saibamais" element={<SaibaMais />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}
