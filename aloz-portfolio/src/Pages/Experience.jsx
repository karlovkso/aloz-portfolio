import React, { useState } from "react";
import pup from "../assets/modal/pup.jpg";
import pup2 from "../assets/modal/pup2.jpg";
import coe from "../assets/modal/coe.jpg";
import coe2 from "../assets/modal/coe2.jpg";
import coe3 from "../assets/modal/coe3.jpg";
import equicom from "../assets/modal/equicom.png";
import equi from "../assets/modal/equi.jpg";
import equi2 from "../assets/modal/equi2.jpg";
import equi3 from "../assets/modal/equi3.jpg";
import vctnads from "../assets/modal/vctnads.png";
import vct from "../assets/modal/vct.jpg";
import vct2 from "../assets/modal/vct2.jpg";
import vct3 from "../assets/modal/vct3.jpg";

const modalContent = {
  PUP: {
    title: "Polytechnic University of the Philippines - Parañaque Campus",
    carouselImages: [pup, pup2],
  },
  Course: {
    title: "Bachelor of Science in Computer Engineering",
    carouselImages: [coe, coe2, coe3],
  },
  // Latin: {
  //   title: "Cum Laude",
  //   carouselImages: [],
  // },
  Equicom: {
    title: "Equitable Computer Services Inc.",
    carouselImages: [equicom],
  },
  EquicomRole: {
    title: "Software Engineer Intern",
    carouselImages: [equi, equi2, equi3],
  },
  VCT: {
    title: "VCT Network and Data Solutions",
    carouselImages: [vctnads],
  },
  VCTRole: {
    title: "Software Developer Intern",
    carouselImages: [vct, vct2, vct3],
  },
};

export default function Experience() {
  const [modalData, setModalData] = useState({
    title: "",
    carouselImages: [],
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (contentKey) => {
    setModalData(modalContent[contentKey]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const renderCarousel = (images) => (
    <div className="carousel w-full">
      {images.map((image, index) => (
        <div
          id={`slide${index + 1}`}
          key={index}
          className="carousel-item relative w-full"
        >
          <img
            src={image}
            className="w-full max-h-96 object-contain"
            alt={`Slide ${index + 1}`}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide${index === 0 ? images.length : index}`}
              className="btn btn-circle btn-accent"
            >
              ❮
            </a>
            <a
              href={`#slide${index === images.length - 1 ? 1 : index + 2}`}
              className="btn btn-circle btn-accent"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative">
      <div
        id="experience"
        className="flex flex-col mr-24 md:flex-row md:justify-start mx-5 md:mx-20 pt-20"
      >
        <div className="text-base-content w-full md:w-2/3">
          <div className="font-bold text-3xl md:text-4xl">
            <p className="text-center md:text-left">Education</p>
          </div>
          <div className="font-normal text-base md:text-lg mt-5 mb-14">
            <p>
              <span className="text-accent font-semibold">
                October 2021 - August 2025
              </span>
              <br />
              <button
                className="hover:text-accent hover:font-semibold transition duration-300 text-start"
                onClick={() => openModal("PUP")}
              >
                Polytechnic University of the Philippines - Parañaque Campus
              </button>
              <br />
              <button
                className="hover:text-accent hover:font-semibold transition duration-300 text-start"
                onClick={() => openModal("Course")}
              >
                Bachelor of Science in Computer Engineering
              </button>
              <br />
              {/* <button
                className="hover:text-accent hover:font-semibold transition duration-300"
                onClick={() => openModal("Latin")}
              >
                Cum Laude
              </button> */}
            </p>
          </div>

          <div className="divider"></div>

          <div className="font-bold text-3xl md:text-4xl mt-14">
            <p className="text-center md:text-left">Experience</p>
          </div>
          <div className="font-normal text-base md:text-lg mt-10">
            <p>
              <span className="text-accent font-semibold">
                September 2024 – October 2024
              </span>
              <br />
              <button
                className="hover:text-accent hover:font-semibold transition duration-300"
                onClick={() => openModal("Equicom")}
              >
                Equitable Computer Services Inc.
              </button>
              <br />
              <button
                className="hover:text-accent hover:font-semibold transition duration-300"
                onClick={() => openModal("EquicomRole")}
              >
                Software Engineer Intern
              </button>
            </p>
          </div>

          <div className="font-normal text-base md:text-lg mt-5">
            <p>
              <span className="text-accent font-semibold">
                August 2023 – October 2023
              </span>
              <br />
              <button
                className="hover:text-accent hover:font-semibold transition duration-300"
                onClick={() => openModal("VCT")}
              >
                VCT Network and Data Solutions
              </button>
              <br />
              <button
                className="hover:text-accent hover:font-semibold transition duration-300"
                onClick={() => openModal("VCTRole")}
              >
                Software Developer Intern
              </button>
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <dialog className="modal" open>
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="text-lg font-bold text-accent mb-5">
                {modalData.title}
              </h3>
              {renderCarousel(modalData.carouselImages)}
              <div className="modal-action">
                <button
                  className="btn btn-sm btn-circle btn-accent absolute right-2 top-2"
                  onClick={closeModal}
                >
                  ✕
                </button>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
}
