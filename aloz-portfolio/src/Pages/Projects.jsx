import React from "react";
import WIP from "../assets/wip.svg";

export default function Projects() {
  return (
    <div>
      <div
        id="projects"
        className="px-5 mr-24 sm:px-10 md:px-20 pt-8 mt-20 mb-10"
      >
        <p className="font-bold text-base-content text-3xl md:text-4xl text-center sm:text-left">
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
                <a className="btn btn-outline btn-accent">View</a>
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
                <a className="btn btn-outline btn-accent">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
