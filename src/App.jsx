import { Route, Routes } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Home from "./components/pages/Home"
import SingleProduct from "./components/pages/SingleProduct"

function App() {


  return (

    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product/:productId" element={<SingleProduct></SingleProduct>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
