/* eslint-disable react/prop-types */

export default function DetailBlock({ children, className = "" }) {
  return (
    <div className={`font-normal text-base md:text-lg ${className}`.trim()}>
      {children}
    </div>
  );
}
