import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Policy from "./pages/Policy"
import Premium from "./pages/Premium"
import Claims from "./pages/Claims"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/claims" element={<Claims />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App