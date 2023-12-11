import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route index element={<Login />}/>
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
