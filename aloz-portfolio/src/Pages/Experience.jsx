import React, { useState } from "react";

const modalContent = {
  PUP: {
    title: "Polytechnic University of the Philippines - Parañaque Campus",
    description: "Description for PUP",
  },
  Course: {
    title: "Bachelor of Science in Computer Engineering",
    description: "Description for Course",
  },
  Latin: {
    title: "Cum Laude",
    description: "Description for Cum Laude",
  },
  Equicom: {
    title: "Equitable Computer Services Inc.",
    description: "Description for Equicom",
  },
  EquicomRole: {
    title: "Software Engineer Intern",
    description: "Description for Equicom Role",
  },
  VCT: {
    title: "VCT Network and Data Solutions",
    description: "Description for VCT",
  },
  VCTRole: {
    title: "Software Developer Intern",
    description: "Description for VCT Role",
  },
};

export default function Experience() {
  const [modalData, setModalData] = useState({ title: "", description: "" });
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (contentKey) => {
    setModalData(modalContent[contentKey]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative">
      <div
        id="experience"
        className={
          "flex flex-col mr-24 md:flex-row md:justify-start mx-5 md:mx-20 pt-20"
        }
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
                className="hover:text-accent hover:font-semibold transition duration-300"
                onClick={() => openModal("Course")}
              >
                Bachelor of Science in Computer Engineering
              </button>
              <br />
              <button
                className="hover:text-accent hover:font-semibold transition duration-300"
                onClick={() => openModal("Latin")}
              >
                Cum Laude
              </button>
              <br />
              (di pa tayo sure ya hehe)
            </p>
          </div>

          <div className="divider"></div>

          {/* Experience Section */}
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
              <h3 className="text-lg font-bold text-accent">
                {modalData.title}
              </h3>
              <p className="pt-4">Picture</p>
              <p>{modalData.description}</p>
              <div className="modal-action">
                <button
                  className="btn btn-sm btn-circle btn-accent btn-outline absolute right-2 top-2"
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
