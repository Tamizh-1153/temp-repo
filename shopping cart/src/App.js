import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./Components/Navbar"
import Cart from "./Pages/Cart/Cart"
import Shop from "./Pages/Shop/Shop"
import { ShopContextProvider } from "./Context/ShopContext"

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  )
}

export default App
