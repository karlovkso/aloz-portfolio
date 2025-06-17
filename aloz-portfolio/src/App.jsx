import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects.jsx";
import Footer from "./Components/Footer";
import Particles from "./Components/Particles.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import "./App.css";

function App() {
  return (
    <div basename="/aloz-portfolio">
      <Particles />
      <Header />
      <Sidebar />
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
