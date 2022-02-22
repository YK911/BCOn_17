const header = document.querySelector(".header");
const scrolled = () => {
  const threshold = window.document.scrollTop() > 130;
  header.toggleClass("scrolled", threshold);
};
window.addEventListener("scroll", scrolled);
