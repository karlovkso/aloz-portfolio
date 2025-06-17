import React from "react";
import Hero from "../assets/alo.webp";

export default function Home() {
  // Scroll handler
  const handleScrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="landing" className="flex-wrap sm:flex justify-start pt-40">
      <div className="text-base-content lg:mr-40 md:mr-0 mr-24 mx-5 md:mx-20 z-50">
        <div className="font-bold text-4xl">
          <p>
            Hello,
            <br />
            I'm Karlo Vequiso
          </p>
          <p className="text-accent">Software Engineer</p>
        </div>
        <div className="font-normal text-lg mt-16">
          <p>
            A passionate technology
            <br />
            enthusiast dedicated to turning
            <br />
            ideas into reality through code.
            <br />
            Check out my works and let’s
            <br />
            build something great together!
          </p>
          <p className="mt-16 mb-0 sm:mb-36">
            Learn more{" "}
            <button
              className="text-accent hover:text-accent hover:font-semibold transition duration-300"
              onClick={handleScrollToSkills}
            >
              about me.
            </button>
          </p>
        </div>
      </div>

      <div className="flex justify-center relative md:absolute w-full mr-5 z-40">
        <img src={Hero} alt="Karlo Vequiso's Picture" className="w-96" />
      </div>
    </div>
  );
}
