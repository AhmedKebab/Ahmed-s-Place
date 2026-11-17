const scenes = [
  { name: "EXAMINATION", subtitle: "DON'T LOOK BACK" },
  { name: "BEE SWARM SIMULATOR", subtitle: "BUILD YOUR BUZZING CREW" },
  { name: "BRM5", subtitle: "DEPLOY. RESCUE. REPEAT." },
];

const sceneLayers = [...document.querySelectorAll(".hero-scene")];
const sceneButtons = [...document.querySelectorAll(".scene-control")];
const captionName = document.querySelector("#scene-caption");
const captionSubtitle = document.querySelector("#scene-subtitle");
const sceneProgress = document.querySelector(".controls-track i");
const heroIndex = document.querySelector(".hero-index span:first-child");
const hero = document.querySelector(".hero");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let activeIndex = 0;
let rotationTimer;

function showScene(index) {
  activeIndex = index;
  sceneLayers.forEach((scene, sceneIndex) => {
    scene.classList.toggle("is-active", sceneIndex === index);
  });
  sceneButtons.forEach((button, sceneIndex) => {
    const active = sceneIndex === index;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  captionName.textContent = scenes[index].name;
  captionSubtitle.textContent = scenes[index].subtitle;
  sceneProgress.style.transform = `translateX(${index * 100}%)`;
  heroIndex.textContent = String(index + 1).padStart(2, "0");
  restartRotation();
}

function restartRotation() {
  window.clearInterval(rotationTimer);
  if (!reducedMotion.matches && !hero.matches(":hover") && !hero.contains(document.activeElement)) {
    rotationTimer = window.setInterval(() => {
      showScene((activeIndex + 1) % scenes.length);
    }, 6500);
  }
}

sceneButtons.forEach((button) => {
  button.addEventListener("click", () => showScene(Number(button.dataset.index)));
});

hero.addEventListener("mouseenter", () => window.clearInterval(rotationTimer));
hero.addEventListener("mouseleave", restartRotation);
hero.addEventListener("focusin", () => window.clearInterval(rotationTimer));
hero.addEventListener("focusout", (event) => {
  if (!hero.contains(event.relatedTarget)) restartRotation();
});
reducedMotion.addEventListener("change", restartRotation);

restartRotation();
