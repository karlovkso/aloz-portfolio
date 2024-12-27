import React, { useState } from "react";
import WIP from "../assets/wip.svg";
import underMaintenance from "../assets/undermaintenance.webp";

const modalContent = {
  Project1: {
    title: "Project 1",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet pellentesque taciti imperdiet, inceptos maximus penatibus magna. Aliquet phasellus dui aliquet dictum habitant curae pharetra. Platea taciti lectus litora porttitor vitae ornare. Tempus laoreet egestas odio tortor montes suspendisse suscipit in. Adipiscing senectus nibh; suspendisse hendrerit aptent elit. Convallis adipiscing lacinia tempus sodales faucibus.",
    carouselImages: [underMaintenance],
  },
  Project2: {
    title: "Project 2",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet pellentesque taciti imperdiet, inceptos maximus penatibus magna. Aliquet phasellus dui aliquet dictum habitant curae pharetra. Platea taciti lectus litora porttitor vitae ornare. Tempus laoreet egestas odio tortor montes suspendisse suscipit in. Adipiscing senectus nibh; suspendisse hendrerit aptent elit. Convallis adipiscing lacinia tempus sodales faucibus.",
    carouselImages: [underMaintenance],
  },
};

export default function Projects() {
  const [modalData, setModalData] = useState({
    title: "",
    description: "",
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
    <div>
      <div
        id="projects"
        className="px-5 mr-24 sm:px-10 md:px-20 pt-8 mt-20 mb-10"
      >
        <p className="font-bold text-base-content text-3xl md:text-4xl text-start sm:text-left">
          Projects
        </p>
      </div>

      <div className="flex flex-wrap mr-24 justify-center md:justify-center gap-10 px-5 sm:px-10 md:px-20">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="card glass bg-base-100 image-full shadow-xl">
            <figure>
              <img src={WIP} alt="Project 1" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-accent">Project 1</h2>
              <p className="text-white">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Est est
                suscipit praesent massa fermentum urna.
              </p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-accent"
                  onClick={() => openModal("Project1")}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="card glass bg-base-100 image-full shadow-xl">
            <figure>
              <img src={WIP} alt="Project 2" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-accent">Project 2</h2>
              <p className="text-white">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Est est
                suscipit praesent massa fermentum urna.
              </p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-accent"
                  onClick={() => openModal("Project2")}
                >
                  View
                </button>
              </div>
            </div>
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
              <p className="text-white mt-5 text-justify indent-10">
                {modalData.description}
              </p>
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
