import DetailBlock from "../Components/DetailBlock";
import SectionHeading from "../Components/SectionHeading";

const educationEntries = [
  {
    dateRange: "October 2021 - August 2025",
    details: [
      "Polytechnic University of the Philippines - Parañaque",
      "Bachelor of Science in Computer Engineering",
      "Magna Cum Laude",
    ],
  },
];

const experienceEntries = [
  {
    dateRange: "October 2025 – Present",
    company: "Macky Champ Software Ventures Inc.",
    role: "Junior Software Developer",
  },
  {
    dateRange: "December 2024 – January 2025",
    company: "Freelancing",
    role: "Project-Based Software Developer",
  },
  {
    dateRange: "September 2024 – October 2024",
    company: "Equitable Computer Services Inc.",
    role: "Software Engineer Intern",
  },
  {
    dateRange: "August 2023 – October 2023",
    company: "VCT Network and Data Solutions",
    role: "Software Developer Intern",
  },
];

const awardEntries = [
  {
    title: "Software Engineer of the Year",
    date: "October 2025",
    organization: "Polytechnic University of the Philippines - Parañaque",
  },
  {
    title: "Best Thesis Presenter",
    date: "October 2025",
    organization: "Polytechnic University of the Philippines - Parañaque",
  },
  {
    title: "Lean Six Sigma White Belt",
    date: "February 2024",
    organization: "Six Sigma PH",
  },
  {
    title: "Best System Analyst",
    date: "August 2023",
    organization: "Polytechnic University of the Philippines - Parañaque",
  },
];

export default function Experience() {
  return (
    <div className="relative">
      <div
        id="experience"
        className="flex flex-col mr-24 md:flex-row md:justify-start mx-5 md:mx-20 pt-20"
      >
        <div className="text-base-content w-full md:w-2/3">
          <SectionHeading>Education</SectionHeading>
          <DetailBlock className="mt-5 mb-14">
            {educationEntries.map((entry) => (
              <p key={entry.dateRange}>
                <span className="text-accent font-semibold">
                  {entry.dateRange}
                </span>
                <br />
                {entry.details.map((detail, detailIndex) => (
                  <span
                    key={`${entry.dateRange}-${detail}`}
                    className="text-start"
                  >
                    {detail}
                    {detailIndex < entry.details.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            ))}
          </DetailBlock>

          <div className="divider"></div>

          <SectionHeading className="mt-12">Experience</SectionHeading>
          {experienceEntries.map((entry) => (
            <DetailBlock key={entry.dateRange} className="mt-5">
              <p>
                <span className="text-accent font-semibold">
                  {entry.dateRange}
                </span>
                <br />
                <span>{entry.company}</span>
                <br />
                <span>{entry.role}</span>
              </p>
            </DetailBlock>
          ))}

          <div className="divider mt-14"></div>

          <SectionHeading className="mt-12">
            Certifications &amp; Awards
          </SectionHeading>
          {awardEntries.map((entry) => (
            <DetailBlock key={entry.title} className="mt-5">
              <p>
                <span className="text-accent font-semibold">{entry.title}</span>
                <br />
                <span>{entry.date}</span>
                <br />
                <span>{entry.organization}</span>
              </p>
            </DetailBlock>
          ))}
        </div>
      </div>
    </div>
  );
}
