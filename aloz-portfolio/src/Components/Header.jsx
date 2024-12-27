import React from "react";

function Header() {
  return (
    <header id="header">
      <div className="navbar navbar-center flex justify-center text-2xl pt-8 absolute">
        <a href="/aloz-portfolio" className="font-bold text-base-content">
          ALOZ
        </a>
        <a href="/" className="font-black pl-1 text-accent">
          .
        </a>
      </div>
    </header>
  );
}

export default Header;
