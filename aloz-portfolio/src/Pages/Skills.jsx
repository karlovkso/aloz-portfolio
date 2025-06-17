import React from "react";
import IconPL from "../Components/IconPL";
import IconLF from "../Components/IconLF";
import IconTI from "../Components/IconTI";
import IconDB from "../Components/IconDB";

export default function Skills() {
  return (
    <div
      id="skills"
      className="flex flex-col md:flex-row md:justify-start mx-5 mr-28 md:mx-20 pt-10 md:pt-20 mt-10"
    >
      <div className="text-base-content md:mr-36">
        <div className="font-bold text-3xl md:text-4xl">
          <p>
            Programming
            <span className="text-accent"> Languages</span>
          </p>
        </div>

        <div>
          <IconPL />
        </div>

        <div className="font-bold text-3xl mt-14 md:text-4xl">
          <p>
            Data
            <span className="text-accent">bases</span>
          </p>
        </div>

        <div>
          <IconDB />
        </div>

        <div className="font-bold text-3xl md:text-4xl mt-14 md:mt-20">
          <p>
            Libraries
            <span className="text-accent"> & Frameworks</span>
          </p>
        </div>

        <div>
          <IconLF />
        </div>

        <div className="font-bold text-3xl md:text-4xl mt-14 md:mt-20">
          <p>
            Tools
            <span className="text-accent"> & IDEs</span>
          </p>
        </div>

        <div>
          <IconTI />
        </div>
      </div>
    </div>
  );
}
