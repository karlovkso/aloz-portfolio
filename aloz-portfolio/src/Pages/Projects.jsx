import { useEffect, useState } from "react";
import { projectDetailImages, projectSlides } from "../config/projectGallery";
import { scoreboardSlides } from "../config/scoreboardGallery";
import DetailBlock from "../Components/DetailBlock";
import SectionHeading from "../Components/SectionHeading";

const scoreboardProject = {
  label: "SCOREBOARD",
  url: "https://karlovkso.github.io/scoreboard/",
};

export default function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scoreboardImageIndex, setScoreboardImageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImageIndex(
        (previousIndex) => (previousIndex + 1) % projectSlides.length,
      );
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setScoreboardImageIndex(
        (previousIndex) => (previousIndex + 1) % scoreboardSlides.length,
      );
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  const currentProjectImage = projectSlides[currentImageIndex];
  const scoreboardProjectImage = scoreboardSlides[scoreboardImageIndex];

  const openProjectModal = () => {
    const modal = document.getElementById("vitaltrackModal");
    if (modal) {
      modal.showModal();
    }
  };

  const openScoreboardModal = () => {
    const modal = document.getElementById("scoreboardModal");
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div>
      <div
        id="projects"
        className="flex flex-col mr-24 md:flex-row md:justify-start mx-5 md:mx-20 pt-20"
      >
        <div className="text-base-content w-full md:w-2/3">
          <SectionHeading>Projects</SectionHeading>
          <DetailBlock className="mt-5 mb-14">
            <p>
              <button
                type="button"
                className="font-bold text-3xl md:text-4xl text-accent hover:text-primary transition-all duration-300"
                onClick={openProjectModal}
              >
                VITALTRACK{" "}
                <i className="fa-sharp fa-solid fa-up-right-and-down-left-from-center fa-xs"></i>
              </button>
              <br />
              <span className="text-start">February 2025 - June 2025</span>
              <br />
              <span className="text-start">BSCpE Thesis</span>
              <br />
              <span className="text-start">
                Languages Used: C#, Python, and C++
              </span>
            </p>
          </DetailBlock>
          <div className="divider"></div>
          <DetailBlock className="mt-10 mb-14">
            <p>
              <button
                onClick={openScoreboardModal}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold italic text-3xl md:text-4xl text-accent hover:text-primary transition-all duration-300"
              >
                {scoreboardProject.label}
                <i className="fa-sharp fa-solid fa-up-right-and-down-left-from-center fa-xs ml-2"></i>
              </button>
              <br />
              <span className="text-start">February 2026 - February 2026</span>
              <br />
              <span className="text-start">Self Project</span>
              <br />
              <span className="text-start">Languages Used: React JS</span>
            </p>
          </DetailBlock>
          <div className="divider"></div>
          <DetailBlock className="mt-10 mb-14">
            <p>
              <button className="font-bold italic text-3xl md:text-4xl text-accent hover:text-primary transition-all duration-300">
                COMING SOON...
              </button>
            </p>
          </DetailBlock>
          <div className="divider"></div>
          <DetailBlock className="mt-10 mb-14">
            <p>
              <button className="font-bold italic text-3xl md:text-4xl text-accent hover:text-primary transition-all duration-300">
                COMING SOON...
              </button>
            </p>
          </DetailBlock>
          <div className="divider"></div>
          <DetailBlock className="mt-10 mb-14">
            <p>
              <button className="font-bold italic text-3xl md:text-4xl text-accent hover:text-primary transition-all duration-300">
                COMING SOON...
              </button>
            </p>
          </DetailBlock>{" "}
        </div>
      </div>
      <dialog id="vitaltrackModal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <img
            src={currentProjectImage}
            alt="VitalTrack project gallery preview"
            className="mt-5"
          />
          <div className="flex gap-4 mt-5 justify-center">
            <img
              src={projectDetailImages.fullView}
              alt="VitalTrack prototype preview"
              className="h-36 sm:h-48 md:h-72 md:w-80"
            />
            <img
              src={projectDetailImages.prototypeOne}
              alt="VitalTrack interface preview"
              className="h-36 sm:h-48 md:h-72"
            />
            <img
              src={projectDetailImages.prototypeTwo}
              alt="VitalTrack hardware preview"
              className="h-36 sm:h-48 md:h-72 md:w-80"
            />
          </div>
          <div className="text-justify mt-5">
            The <strong>VitalTrack</strong> system was developed using a
            combination of programming languages tailored to different
            components:
            <ul className="list-disc list-inside ml-4">
              <li>C# with ASP.NET MVC – for the website</li>
              <li>Python (Kivy framework) – for the prototype GUI</li>
              <li>C++ – for sensor module programming</li>
            </ul>
            <br />
            VitalTrack integrates several hardware platforms—
            <strong>Arduino Mega, ESP32, and Raspberry Pi</strong>—to accurately
            measure four essential health indicators:
            <ul className="list-disc list-inside ml-4">
              <li>Blood Pressure (BP)</li>
              <li>Pulse Rate (PR)</li>
              <li>Oxygen Saturation (SpO₂)</li>
              <li>Body Temperature (BT)</li>
            </ul>
            <br />
            This integration significantly streamlines the traditionally manual
            and time-consuming process of patient assessment. The prototype is
            designed to store collected data locally when{" "}
            <strong>offline</strong> or transmit the data directly to the
            website when <strong>online</strong>, ensuring continuous and
            reliable data management. <br />
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="submit">close</button>
        </form>
      </dialog>
      <dialog id="scoreboardModal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex justify-center">
            <a
              href={scoreboardProject.url}
              target="_blank"
              className="font-bold italic text-xl md:text-2xl text-accent hover:text-primary transition-all duration-300"
            >
              GO TO SCOREBOARD {""}
              <i className="fa-sharp fa-solid fa-link fa-xs"></i>
            </a>
          </div>
          <div className="flex justify-center mt-5">
            <img
              src={scoreboardProjectImage}
              alt="Scoreboard gallery preview"
              className="rounded-xl"
            />
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="submit">close</button>
        </form>
      </dialog>
    </div>
  );
}
