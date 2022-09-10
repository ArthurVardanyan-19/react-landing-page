import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Pages from "./Pages/Pages";
import Sections from "./Sections/Sections";
import Docs from "./Docs/Docs"

function App() {
  const location = document.location.pathname;
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/Pages" element={<Pages />} />
      <Route path="/Sections" element={<Sections />} />
      <Route path="/Docs" element={<Docs />} />
      
    </Routes>
  );
}

export default App;
