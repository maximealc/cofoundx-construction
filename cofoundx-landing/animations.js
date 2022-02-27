function getRandomInt(max) {
  return Math.floor(Math.random() * max * 2) - max;
}

const gradient = document.getElementById("moving-gradient");
const mediaQuery = window.matchMedia("(min-width: 768px)");

const transformGradient = (x, y) => {
  gradient.style.transform = `translate3d(${x}px, ${y}px, 0)`;
};

const moveGradient = (e) => {
  const mouseY = e.clientY - 500;
  const mouseX = e.clientX - 500;

  transformGradient(mouseX, mouseY);
};

if (mediaQuery.matches) {
  window.addEventListener("mousemove", moveGradient);
} else {
  return;
}
