import React, { useState, useEffect } from "react";
import Image1 from "../assets/images/vitaltrack/1.png";
import Image2 from "../assets/images/vitaltrack/2.png";
import Image3 from "../assets/images/vitaltrack/3.png";
import Image4 from "../assets/images/vitaltrack/4.png";
import Image5 from "../assets/images/vitaltrack/5.jpg";
import Image6 from "../assets/images/vitaltrack/6.jpg";
import Image77 from "../assets/images/vitaltrack/7.jpg";
import Image7 from "../assets/images/vitaltrack/7.png";
import Image8 from "../assets/images/vitaltrack/8.png";
import Image9 from "../assets/images/vitaltrack/9.png";
import Image10 from "../assets/images/vitaltrack/10.png";
import Image11 from "../assets/images/vitaltrack/11.png";
import Image12 from "../assets/images/vitaltrack/12.png";
import Image13 from "../assets/images/vitaltrack/13.png";
import Image14 from "../assets/images/vitaltrack/14.png";
import Image15 from "../assets/images/vitaltrack/15.png";
import Image16 from "../assets/images/vitaltrack/16.png";
import Image17 from "../assets/images/vitaltrack/17.png";

const webImages = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image15,
  Image14,
  Image16,
  Image17,
];

export default function Projects() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % webImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        id="projects"
        className="flex flex-col mr-24 md:flex-row md:justify-start mx-5 md:mx-20 pt-20"
      >
        <div className="text-base-content w-full md:w-2/3">
          <div className="font-bold text-3xl md:text-4xl">
            <p className="text-start md:text-left">Projects</p>
          </div>
          <div className="font-normal text-base md:text-lg mt-5 mb-14 ">
            <p>
              <button
                className="font-bold text-3xl md:text-4xl text-accent hover:text-primary transition-all duration-300"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                VITALTRACK{" "}
                <i class="fa-sharp  fa-solid fa-up-right-and-down-left-from-center fa-xs"></i>
              </button>
              <br />
              <span className="text-start">February 2025 - June 2025</span>
              <br />
              <span className="text-start">BSCpE Thesis</span>
              <br />
              <span className="text-start">Full-Stack Software Engineer</span>
              <br />
              <span className="text-start">
                Languages Used: C#, Python, and C++
              </span>
            </p>
          </div>
          <div className="divider"></div>
          <div className="font-normal text-base md:text-lg mt-10 mb-14 ">
            <p>
              <button className="font-bold italic text-3xl md:text-4xl text-accent hover:text-primary transition-all duration-300">
                COMING SOON...
              </button>
            </p>
          </div>
          <div className="divider"></div>
          <div className="font-normal text-base md:text-lg mt-10 mb-14 ">
            <p>
              <button className="font-bold italic text-3xl md:text-4xl text-accent hover:text-primary transition-all duration-300">
                COMING SOON...
              </button>
            </p>
          </div>
          <div className="divider"></div>
        </div>
      </div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <img src={webImages[currentImage]} alt="Project" className="mt-5" />
          <div className="flex gap-4 mt-5 justify-center">
            <img
              src={Image5}
              alt="Prototype"
              className="h-36 sm:h-48 md:h-72 md:w-80"
            />
            <img
              src={Image6}
              alt="Prototype"
              className="h-36 sm:h-48 md:h-72"
            />
            <img
              src={Image77}
              alt="Prototype"
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
            <br />
            <p>
              <strong>Users:</strong>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Add / remove patient records</li>
              <li>Input new readings and view history</li>
              <li>
                Request patient records (sent via email upon admin approval)
              </li>
              <li>Records are password-protected for security</li>
            </ul>
            <br />
            <p>
              <strong>Administrators:</strong>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Manage user accounts</li>
              <li>Approve data access requests</li>
              <li>Monitor audit trails for transparency</li>
            </ul>
            <br />
            <p>
              <strong>Security Features: </strong>
              Two-factor authentication and multi-layer protection to secure
              sensitive health information.
            </p>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
