import Hero from "../assets/alo.webp";
import { scrollToSection } from "../utils/scrollNavigation";

export default function Home() {
  const handleScrollToSkills = () => {
    scrollToSection("skills");
  };

  return (
    <div id="landing" className="flex-wrap sm:flex justify-start pt-40">
      <div className="text-base-content lg:mr-40 md:mr-0 mr-24 mx-5 md:mx-20 z-50">
        <div className="font-bold text-4xl">
          <p>
            Hello,
            <br />
            I&apos;m Karlo Vequiso
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
              type="button"
              className="text-accent hover:text-accent hover:font-semibold transition duration-300"
              onClick={handleScrollToSkills}
            >
              about me.
            </button>
          </p>
        </div>
      </div>

      <div className="flex justify-center relative md:absolute w-full mr-5 z-40">
        <img src={Hero} alt="Portrait of Karlo Vequiso" className="w-96" />
      </div>
    </div>
  );
}
