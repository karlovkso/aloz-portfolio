import React, { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const sections = [
  { id: "header", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Sidebar() {
  const [activeSection, setActiveSection] = useState(null);
  const [showArrow, setShowArrow] = useState(false);

  const updateActiveSection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    themeChange(false);

    const observer = new IntersectionObserver(updateActiveSection, {
      root: null,
      threshold: 0.5,
    });

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    const toggleArrowButton = () => {
      const isScrolledPastLanding =
        document.getElementById("header")?.getBoundingClientRect().bottom < 0;
      setShowArrow(isScrolledPastLanding);
    };

    document.addEventListener("scroll", toggleArrowButton);

    return () => {
      document.removeEventListener("scroll", toggleArrowButton);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="sidebar"
      className="text-base-content text-center pt-56 pr-0 xl:pr-20 fixed top-0 right-0 z-50 h-full bg-base-200 xl:bg-transparent space-y-6"
    >
      {sections.map(({ id, label }) => (
        <div key={id}>
          <button
            id={`sb${id.charAt(0).toUpperCase() + id.slice(1)}`}
            className={`hover:text-accent hover:font-bold ease-in-out duration-300 ${
              activeSection === id ? "font-bold text-accent" : ""
            }`}
            onClick={() => scrollToSection(id)}
          >
            {label}
          </button>
        </div>
      ))}

      <div className="dropdown dropdown-left" data-choose-theme>
        <div
          tabIndex="0"
          role="button"
          className="btn bg-transparent text-base-content hover:btn-accent ease-in-out duration-300"
        >
          Themes
          <svg
            width="12px"
            height="12px"
            className="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>

        <ul
          tabIndex="0"
          className="dropdown-content bg-base-300 rounded-box z-[1] w-50 shadow-2xl"
        >
          {[
            "synthwave",
            "dark",
            "valentine",
            "luxury",
            "halloween",
            "retro",
            "night",
            "aqua",
          ].map((theme) => (
            <li key={theme}>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                value={theme}
                data-set-theme={theme}
                aria-label={theme}
              />
            </li>
          ))}
        </ul>
      </div>

      {showArrow && (
        <div>
          <button
            id="arrowUp"
            className="btn btn-sm btn-outline rounded-full h-9 motion-safe:animate-bounce hover:btn-accent ease-in-out duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <i className="fa-solid fa-arrow-up my-0"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
