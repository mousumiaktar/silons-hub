import { Route, Routes } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Home from "./components/pages/Home"

function App() {


  return (

    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      </Routes>
      
    </div>
  )
}

export default App
