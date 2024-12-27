import React from "react";
import PageLoader from "./Components/PageLoader";
import Particles from "./Components/Particles";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <PageLoader />
      <Particles />
      <Header />
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
