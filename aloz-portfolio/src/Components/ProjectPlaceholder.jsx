/* eslint-disable react/prop-types */

export default function ProjectPlaceholder({ label }) {
  return (
    <>
      <div className="font-normal text-base md:text-lg mt-10 mb-14">
        <p>
          <button
            type="button"
            className="font-bold italic text-3xl md:text-4xl text-accent hover:text-primary transition-all duration-300"
          >
            {label}
          </button>
        </p>
      </div>
      <div className="divider"></div>
    </>
  );
}
