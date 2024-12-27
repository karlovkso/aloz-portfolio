import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PageLoader from "./Components/PageLoader.jsx";
import Particles from "./Components/Particles.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode basename="/aloz-portfolio">
    <PageLoader />
    <Particles />
    <div id="page">
      <App />
    </div>
  </StrictMode>
);
