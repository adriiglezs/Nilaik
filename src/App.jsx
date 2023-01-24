import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import AboutUs from "./pages/AboutUs/AboutUs"
import Error from "./pages/Error/Error"
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Login from "./pages/Login/Login.jsx"
import Cart from "./pages/Cart/Cart"

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path= "/cart" element={<Cart/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
