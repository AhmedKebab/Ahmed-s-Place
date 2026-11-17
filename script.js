const examinationWiki = "https://examination.miraheze.org/wiki";
const clips = [
  "Gilbert's_Execution.mp4",
  "Chimera_Execution.mp4",
  "Chimera_P1_TP.mp4",
  "Chimera_P2_TP.mp4",
  "Chimera_Alt_P2_Execution.mp4",
  "Sinitzyn_P2_Execution.mp4",
  "Sinitzyn_QTE_Success.mp4",
  "Sinitzyn_QTE_Fail.mp4",
  "Cerberus_Intro_Cutscene.mp4",
  "CI_Turn_1.mp4",
  "CI_Turn_2.mp4",
  "CI_Execution_1.mp4",
  "CI_Execution_2.mp4",
  "CI_Execution_3.mp4",
  "CI_Counter_1.mp4",
  "CI_QTE_Death.mp4",
  "Taunt_animation.mp4",
];
const video = document.querySelector("#examination-video");
const showcase = document.querySelector(".showcase");
const introScreen = document.querySelector("#intro-screen");
const categoryScreen = document.querySelector("#category-screen");
const detailScreen = document.querySelector("#detail-screen");
const detailTitle = document.querySelector("#detail-title");
const reconstructEffect = document.querySelector("#reconstruct-effect");
const beginButton = document.querySelector("#begin-button");
const backButton = document.querySelector("#back-button");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const fadeDuration = 350;

let clipQueue = [];
let previousClipIndex = -1;
let transitionTimer;
let activeScreen = introScreen;
let pendingScreen = null;
let isTransitioning = false;

function shuffledClipIndices() {
  const queue = clips.map((_, index) => index);
  for (let index = queue.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [queue[index], queue[swapIndex]] = [queue[swapIndex], queue[index]];
  }
  if (queue.length > 1 && queue.at(-1) === previousClipIndex) {
    [queue[0], queue[queue.length - 1]] = [queue.at(-1), queue[0]];
  }
  return queue;
}

function playNextClip() {
  if (clipQueue.length === 0) clipQueue = shuffledClipIndices();

  previousClipIndex = clipQueue.pop();
  const filename = clips[previousClipIndex];
  video.classList.add("is-fading");
  video.autoplay = !prefersReducedMotion.matches;
  video.controls = prefersReducedMotion.matches;
  video.src = `${examinationWiki}/Special:FilePath/${encodeURIComponent(filename).replaceAll("'", "%27")}`;
  video.load();

  if (prefersReducedMotion.matches) return;

  const playback = video.play();
  if (playback) {
    playback.catch((error) => {
      if (filename !== clips[previousClipIndex]) return;
      if (error.name === "NotAllowedError") {
        video.controls = true;
      } else {
        console.error(`Unable to play Examination clip ${filename}.`, error);
      }
    });
  }
}

function showScreen(screen) {
  showcase.classList.remove("is-reconstructing");
  activeScreen.hidden = true;
  screen.hidden = false;
  screen.classList.add("is-entering");
  activeScreen = screen;
  isTransitioning = false;
  screen.querySelector("[data-screen-title]").focus();
}

function transitionTo(screen) {
  if (isTransitioning) return;

  isTransitioning = true;
  pendingScreen = screen;
  if (prefersReducedMotion.matches) {
    showScreen(screen);
    pendingScreen = null;
    return;
  }

  showcase.classList.add("is-reconstructing");
}

beginButton.addEventListener("click", () => {
  beginButton.disabled = true;
  transitionTo(categoryScreen);
});

reconstructEffect.addEventListener("animationend", (event) => {
  if (event.target !== reconstructEffect || !pendingScreen) return;
  const screen = pendingScreen;
  pendingScreen = null;
  showScreen(screen);
});

categoryScreen.addEventListener("animationend", (event) => {
  if (event.target === categoryScreen) categoryScreen.classList.remove("is-entering");
});

categoryScreen.addEventListener("click", (event) => {
  const card = event.target.closest("[data-category]");
  if (!card || isTransitioning) return;

  detailTitle.textContent = card.dataset.category;
  transitionTo(detailScreen);
});

detailScreen.addEventListener("animationend", (event) => {
  if (event.target === detailScreen) detailScreen.classList.remove("is-entering");
});

backButton.addEventListener("click", () => transitionTo(categoryScreen));

video.addEventListener("loadeddata", () => {
  window.requestAnimationFrame(() => video.classList.remove("is-fading"));
});

video.addEventListener("timeupdate", () => {
  if (!Number.isFinite(video.duration)) return;
  const remaining = video.duration - video.currentTime;
  if (remaining > 0 && remaining <= fadeDuration / 1000) {
    video.classList.add("is-fading");
  }
});

video.addEventListener("ended", () => {
  const needsFade = !video.classList.contains("is-fading");
  video.classList.add("is-fading");
  transitionTimer = window.setTimeout(playNextClip, needsFade ? fadeDuration : 0);
});

video.addEventListener("error", () => {
  const filename = clips[previousClipIndex];
  console.error(`Unable to load Examination clip ${filename}.`, video.error);
  window.clearTimeout(transitionTimer);
  transitionTimer = window.setTimeout(playNextClip, 2000);
});

prefersReducedMotion.addEventListener("change", playNextClip);
playNextClip();
