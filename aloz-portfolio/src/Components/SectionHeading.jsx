/* eslint-disable react/prop-types */

export default function SectionHeading({ children, className = "" }) {
  return (
    <div className={`font-bold text-3xl md:text-4xl ${className}`.trim()}>
      <p className="text-start md:text-left">{children}</p>
    </div>
  );
}
