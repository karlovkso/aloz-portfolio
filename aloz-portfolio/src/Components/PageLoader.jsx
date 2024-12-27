import React from "react";
import "../assets/css/pageloader.css";
import "../assets/js/pageloader.js";

function PageLoader() {
  return (
    <div id="pageloader" className="bg-base-100">
      <div
        id="hello"
        className="text-5xl font-bold text-base-content animate-bounce"
      >
        Henlo!
      </div>
      <div
        id="kumusta"
        className="text-5xl font-bold text-base-content animate-bounce"
      >
        Kumusta?
      </div>
    </div>
  );
}

export default PageLoader;
