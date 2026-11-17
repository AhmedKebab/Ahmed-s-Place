const examinationWiki = "https://examination.miraheze.org/wiki";
const enemyCatalog = [
  {
    label: "Regulars",
    enemies: [
      { name: "LURKER", image: "https://static.wikitide.net/examinationwiki/thumb/7/7b/Engineer_Lurker.png/305px-Engineer_Lurker.png" },
      { name: "MUTANT", image: "https://static.wikitide.net/examinationwiki/thumb/a/aa/Engineer_Mutant.png/304px-Engineer_Mutant.png" },
      { name: "CRAWLER", image: "https://static.wikitide.net/examinationwiki/thumb/4/48/Crawler.png/360px-Crawler.png" },
      { name: "GRABBY", image: "https://static.wikitide.net/examinationwiki/thumb/9/96/Grabby.png/360px-Grabby.png" },
      { name: "BARNACLES", image: "https://static.wikitide.net/examinationwiki/thumb/9/92/Barnacles.png/540px-Barnacles.png" },
      { name: "RISER", image: "https://static.wikitide.net/examinationwiki/thumb/8/8b/HPCA_Riser.png/322px-HPCA_Riser.png" },
      { name: "KAMIKAZE", image: "https://static.wikitide.net/examinationwiki/thumb/f/fd/HPCA_Kamikaze.png/313px-HPCA_Kamikaze.png" },
      { name: "SHIELDER", image: "https://static.wikitide.net/examinationwiki/thumb/e/e5/MNPA_Shielder_2.png/299px-MNPA_Shielder_2.png" },
      { name: "SLASHER", image: "https://static.wikitide.net/examinationwiki/thumb/4/4f/HPCA_Slasher.png/312px-HPCA_Slasher.png" },
      { name: "RADAWAY", image: "https://static.wikitide.net/examinationwiki/thumb/f/f4/Radaway.png/276px-Radaway.png" },
      { name: "GUNNER", image: "https://static.wikitide.net/examinationwiki/thumb/b/bc/RSU_Gunner_1.png/337px-RSU_Gunner_1.png" },
      { name: "FURY", image: "https://static.wikitide.net/examinationwiki/thumb/6/68/RSU_Fury_2.png/325px-RSU_Fury_2.png" },
      { name: "ENGINEER", image: "https://static.wikitide.net/examinationwiki/thumb/d/d8/Engineer.png/262px-Engineer.png" },
      { name: "VORAX", image: "https://static.wikitide.net/examinationwiki/thumb/d/d2/RSU_Vorax.png/257px-RSU_Vorax.png" },
      { name: "DECEIVER", image: "https://static.wikitide.net/examinationwiki/thumb/e/e1/Standard_Deceiver.png/346px-Standard_Deceiver.png" },
    ],
  },
  {
    label: "Virals",
    enemies: [
      { name: "VIRAL RUNNER", image: "https://static.wikitide.net/examinationwiki/thumb/c/cf/Viral_Standard.png/313px-Viral_Standard.png" },
      { name: "VIRAL EXECUTIONER", image: "https://static.wikitide.net/examinationwiki/thumb/2/25/Standard_Executioner.png/321px-Standard_Executioner.png" },
      { name: "VIRAL LEADER", image: "https://static.wikitide.net/examinationwiki/thumb/0/03/Viral_Leader.png/333px-Viral_Leader.png" },
      { name: "VIRAL ENFORCER", image: "https://static.wikitide.net/examinationwiki/thumb/9/9f/Viral_Enforcer.png/305px-Viral_Enforcer.png" },
    ],
  },
  {
    label: "Rasonians",
    enemies: [
      { name: "INFANTRYMAN", image: "https://static.wikitide.net/examinationwiki/thumb/a/a3/RIF_Infantryman.png/332px-RIF_Infantryman.png" },
      { name: "COMBAT MEDIC", image: "https://static.wikitide.net/examinationwiki/thumb/7/79/RIF_Combat_Medic.png/284px-RIF_Combat_Medic.png" },
      { name: "SHOTGUNNER", image: "https://static.wikitide.net/examinationwiki/thumb/5/50/RIF_Shotgunner.png/298px-RIF_Shotgunner.png" },
      { name: "MACHINE GUNNER", image: "https://static.wikitide.net/examinationwiki/thumb/2/2a/RIF_Machine_Gunner.png/354px-RIF_Machine_Gunner.png" },
      { name: "SHIELDER", image: "https://static.wikitide.net/examinationwiki/thumb/d/d9/RIF_Shielder.png/333px-RIF_Shielder.png" },
    ],
  },
  {
    label: "Mini-Bosses",
    enemies: [
      { name: "LEAPER", image: "https://static.wikitide.net/examinationwiki/thumb/5/54/Leaper.png/284px-Leaper.png" },
      { name: "MIKHAIL WILLIAMS", image: "https://static.wikitide.net/examinationwiki/thumb/c/cc/Mikhail_Williams.png/307px-Mikhail_Williams.png" },
      { name: "DAVE", image: "https://static.wikitide.net/examinationwiki/thumb/6/6d/Dave_Render.webp/360px-Dave_Render.webp.png" },
      { name: "YAKOV ZHUKOV", image: "https://static.wikitide.net/examinationwiki/thumb/d/d1/Yakov_Zhukov_Render.png/360px-Yakov_Zhukov_Render.png" },
    ],
  },
  {
    label: "Bosses",
    enemies: [
      { name: "GILBERT", image: "https://static.wikitide.net/examinationwiki/thumb/b/b7/Gilbert_Var_2.png/296px-Gilbert_Var_2.png" },
      { name: "CHIMERA", image: "https://static.wikitide.net/examinationwiki/thumb/d/dc/Chimera_Var_2.png/306px-Chimera_Var_2.png" },
      { name: "SINITZYN 'SIN' KOMAREK", image: "https://static.wikitide.net/examinationwiki/thumb/d/d6/Sinitzyn_Komarek.png/348px-Sinitzyn_Komarek.png" },
      { name: "CERBERUS", image: "https://static.wikitide.net/examinationwiki/thumb/c/c9/Cerberus_V2.png/540px-Cerberus_V2.png" },
      { name: "D-ZERO", image: "https://static.wikitide.net/examinationwiki/thumb/8/8a/D-Zero_Var_2.png/274px-D-Zero_Var_2.png" },
    ],
  },
  {
    label: "City Infected",
    enemies: [
      { name: "RUNNER", image: "https://static.wikitide.net/examinationwiki/thumb/3/3c/Civilian_City_Runner.png/340px-Civilian_City_Runner.png" },
      { name: "SHIELDER", image: "https://static.wikitide.net/examinationwiki/thumb/c/cd/MNPA_City_Shielder.png/315px-MNPA_City_Shielder.png" },
      { name: "FURY", image: "https://static.wikitide.net/examinationwiki/thumb/1/10/City_Fury.png/299px-City_Fury.png" },
      { name: "DREADNOUGHT", image: "https://static.wikitide.net/examinationwiki/thumb/6/68/City_Dreadnought.png/326px-City_Dreadnought.png" },
    ],
  },
];
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
const detailViewport = document.querySelector("#detail-viewport");
const enemyWikiLink = document.querySelector("#enemy-wiki-link");
const reconstructEffect = document.querySelector("#reconstruct-effect");
const beginButton = document.querySelector("#begin-button");
const backButton = document.querySelector("#back-button");
const soundButton = document.querySelector("#sound-button");
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

  const category = card.dataset.category;
  detailTitle.textContent = category;
  enemyWikiLink.hidden = category !== "Enemies";
  if (category === "Enemies") {
    renderEnemyCatalog();
  }
  transitionTo(detailScreen);
});

function renderEnemyCatalog() {
  detailViewport.innerHTML = enemyCatalog
    .map(
      (section) => `
        <section class="enemy-section" aria-labelledby="${section.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading">
          <h2 class="enemy-section-title" id="${section.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading">${section.label}</h2>
          <div class="enemy-grid">
            ${section.enemies
              .map(
                (enemy) => `
                  <button class="enemy-card" type="button" data-enemy-name="${enemy.name}" aria-label="View ${enemy.name}">
                    <img src="${enemy.image}" alt="${enemy.name}" loading="lazy" />
                    <span>${enemy.name}</span>
                  </button>
                `
              )
              .join("")}
          </div>
        </section>
      `
    )
    .join("");

  detailViewport.querySelectorAll(".enemy-card").forEach((card) => {
    card.addEventListener("click", () => {
      const enemyName = card.dataset.enemyName;
      detailViewport.setAttribute("data-selected-enemy", enemyName);
      detailViewport.querySelectorAll(".enemy-card").forEach((item) => {
        const isSelected = item.dataset.enemyName === enemyName;
        item.classList.toggle("is-selected", isSelected);
      });
    });
  });
}

detailScreen.addEventListener("animationend", (event) => {
  if (event.target === detailScreen) detailScreen.classList.remove("is-entering");
});

backButton.addEventListener("click", () => transitionTo(categoryScreen));

soundButton.addEventListener("click", () => {
  video.muted = !video.muted;
  soundButton.textContent = video.muted ? "Sound: Off" : "Sound: On";
  soundButton.setAttribute("aria-label", video.muted ? "Turn video sound on" : "Mute video sound");
  soundButton.setAttribute("aria-pressed", String(!video.muted));

  if (!video.muted && video.paused) {
    const playback = video.play();
    if (playback) {
      playback.catch((error) => {
        console.error("Unable to start Examination playback with sound.", error);
        video.muted = true;
        soundButton.textContent = "Sound: Off";
        soundButton.setAttribute("aria-label", "Turn video sound on");
        soundButton.setAttribute("aria-pressed", "false");
      });
    }
  }
});

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
