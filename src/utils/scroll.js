export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Adjust this value based on your header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const scrollToProjects = () => {
  scrollToSection('projects');
};

export const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};