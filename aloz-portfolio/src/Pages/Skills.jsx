import IconPL from "../Components/IconPL";
import IconLF from "../Components/IconLF";
import IconTI from "../Components/IconTI";
import IconDB from "../Components/IconDB";
import SectionHeading from "../Components/SectionHeading";

const skillGroups = [
  {
    id: "programming-languages",
    title: (
      <>
        Programming <span className="text-accent">Languages</span>
      </>
    ),
    Icon: IconPL,
    className: "",
  },
  {
    id: "databases",
    title: (
      <>
        Data <span className="text-accent">bases</span>
      </>
    ),
    Icon: IconDB,
    className: "mt-14",
  },
  {
    id: "libraries-frameworks",
    title: (
      <>
        Libraries <span className="text-accent">&amp; Frameworks</span>
      </>
    ),
    Icon: IconLF,
    className: "mt-14 md:mt-20",
  },
  {
    id: "tools-ides",
    title: (
      <>
        Tools <span className="text-accent">&amp; IDEs</span>
      </>
    ),
    Icon: IconTI,
    className: "mt-14 md:mt-20",
  },
];

export default function Skills() {
  return (
    <div
      id="skills"
      className="flex flex-col md:flex-row md:justify-start mx-5 mr-28 md:mx-20 pt-10 md:pt-20 mt-10"
    >
      <div className="text-base-content md:mr-36">
        {skillGroups.map(({ id, title, Icon, className }) => (
          <div key={id}>
            <SectionHeading className={className}>{title}</SectionHeading>
            <div>
              <Icon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
