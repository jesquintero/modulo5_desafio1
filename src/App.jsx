
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";

import HomePage from "./views/HomePage";
import ContactPage from "./views/ContactPage";
import NotFoundPage from "./views/NotFoundPage";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
