import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/AboutUs/AboutUs";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login.jsx";
import Cart from "./pages/Cart/Cart";
import Characters from "./pages/Characters/Characters";
import JordanAdidas from "./pages/JordanAdidas/JordanAdidas";
import NikePuma from "./pages/NikePuma/NikePuma";
import AboutNilaik from "./pages/AboutNilaik/AboutNilaik";
import AskQuestions from "./pages/AskQuestions/AskQuestions";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutNilaik />} />

        <Route path="/characters" element={<Characters />} />

        <Route path="/jordan-adidas" element={<JordanAdidas />} />
        <Route path="/nike-puma" element={<NikePuma />} />
        <Route path="/AskQuestions" element={<AskQuestions />} />


        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
