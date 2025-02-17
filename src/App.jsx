import React from "react"
import Home from "./oldalak/Home"
import Ermesek from "./oldalak/Ermesek"
import Mermesek from "./oldalak/Mermesek"
import Navbar from "./Navbar"
import { Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "tachyons"

function App() {
  return (
    <>
      <div>
        <h1>Covid</h1>
        <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ermesek" element={<Ermesek />}></Route>
          <Route path="/mermesek" element={<Mermesek />}></Route>
        </Routes>
        </Navbar>
      </div>
    </>
  )
}

export default App
