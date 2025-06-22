import React from "react";

export default function Experience() {
  return (
    <div className="relative">
      <div
        id="experience"
        className="flex flex-col mr-24 md:flex-row md:justify-start mx-5 md:mx-20 pt-20"
      >
        <div className="text-base-content w-full md:w-2/3">
          <div className="font-bold text-3xl md:text-4xl">
            <p className="text-start md:text-left">Education</p>
          </div>
          <div className="font-normal text-base md:text-lg mt-5 mb-14">
            <p>
              <span className="text-accent font-semibold">
                October 2021 - August 2025
              </span>
              <br />
              <span className="text-start">
                Polytechnic University of the Philippines - Parañaque Campus
              </span>
              <br />
              <span className="text-start">
                Bachelor of Science in Computer Engineering
              </span>
              <br />
              {/* <button
                className="hover:text-accent hover:font-semibold transition duration-300"
              >
                Cum Laude
              </button> */}
            </p>
          </div>

          <div className="divider"></div>

          <div className="font-bold text-3xl md:text-4xl mt-14">
            <p className="text-start md:text-left">Experience</p>
          </div>
          <div className="font-normal text-base md:text-lg mt-10">
            <p>
              <span className="text-accent font-semibold">
                December 2024 – January 2025
              </span>
              <br />
              <span>Freelancing</span>
              <br />
              <span>Project-Based Software Developer</span>
            </p>
          </div>

          <div className="font-normal text-base md:text-lg mt-5">
            <p>
              <span className="text-accent font-semibold">
                September 2024 – October 2024
              </span>
              <br />
              <span>Equitable Computer Services Inc.</span>
              <br />
              <span>Software Engineer Intern</span>
            </p>
          </div>

          <div className="font-normal text-base md:text-lg mt-5">
            <p>
              <span className="text-accent font-semibold">
                August 2023 – October 2023
              </span>
              <br />
              <span>VCT Network and Data Solutions</span>
              <br />
              <span>Software Developer Intern</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
