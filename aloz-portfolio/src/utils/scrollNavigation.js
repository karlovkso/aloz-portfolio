export function scrollToSection(sectionId, behavior = "smooth") {
  if (typeof document === "undefined") {
    return;
  }

  const section = document.getElementById(sectionId);
  if (!section) {
    return;
  }

  section.scrollIntoView({ behavior, block: "start" });
}
