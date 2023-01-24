import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import AboutUs from "./pages/AboutUs/AboutUs"
import Error from "./pages/Error/Error"
import Home from "./pages/Home/Home"

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
