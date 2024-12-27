import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";
import PageLoader from "./Components/PageLoader.jsx";
import Particles from "./Components/Particles.jsx";
import "./App.css";

function App() {
  return (
    <div basename="/aloz-portfolio">
      <PageLoader />
      <Particles />
      <div id="page">
        <Header />
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
