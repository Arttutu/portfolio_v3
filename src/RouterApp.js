import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicial from "./paginas/inicial/Inicial"
import Menu from "componentes/Menu/Menu"

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index element={<Inicial />} />
      </Routes>
    </BrowserRouter>
  )
}
