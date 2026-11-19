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
      { name: "CITY SHIELDER", image: "https://static.wikitide.net/examinationwiki/thumb/c/cd/MNPA_City_Shielder.png/315px-MNPA_City_Shielder.png" },
      { name: "FURY", image: "https://static.wikitide.net/examinationwiki/thumb/1/10/City_Fury.png/299px-City_Fury.png" },
      { name: "DREADNOUGHT", image: "https://static.wikitide.net/examinationwiki/thumb/6/68/City_Dreadnought.png/326px-City_Dreadnought.png" },
    ],
  },
];
const backgroundRenders = [
  "assets/background-renders/render-01.webp",
  "assets/background-renders/render-02.webp",
  "assets/background-renders/render-03.webp",
  "assets/background-renders/render-04.webp",
  "assets/background-renders/render-05.webp",
  "assets/background-renders/render-06.webp",
  "assets/background-renders/render-07.webp",
  "assets/background-renders/render-08.webp",
  "assets/background-renders/render-09.webp",
  "assets/background-renders/render-10.webp",
];
const mediaFileDirectories = new Map([
  ["Gilbert's_Execution.mp4", "dc"],
  ["Chimera_Execution.mp4", "82"],
  ["Chimera_P1_TP.mp4", "23"],
  ["Chimera_P2_TP.mp4", "46"],
  ["Chimera_Alt_P2_Execution.mp4", "2a"],
  ["Sinitzyn_P2_Execution.mp4", "2d"],
  ["Sinitzyn_QTE_Success.mp4", "57"],
  ["Official_render_of_Gilbert.png", "70"],
  ["Sinitzyn_QTE_Fail.mp4", "e1"],
  ["Cerberus_Intro_Cutscene.mp4", "6b"],
  ["CI_Turn_1.mp4", "4e"],
  ["CI_Turn_2.mp4", "b0"],
  ["CI_Execution_1.mp4", "6c"],
  ["CI_Execution_2.mp4", "d8"],
  ["CI_Execution_3.mp4", "9a"],
  ["CI_Counter_1.mp4", "85"],
  ["CI_QTE_Death.mp4", "26"],
  ["Taunt_animation.mp4", "9c"],
  ["Lurker_Execution_1.mp4", "0f"],
  ["Lurker_Execution_2.mp4", "5a"],
  ["Lurker_Execution_3.mp4", "e8"],
  ["Mutant_Execution_1.mp4", "f0"],
  ["Mutant_Execution_2.mp4", "3a"],
  ["Mutant_Execution_3.mp4", "a4"],
  ["Mutant.png", "58"],
  ["Mutant_Blocking.png", "b4"],
  ["Lurker_Save.mp4", "6e"],
  ["Lurker_Maul.mp4", "3d"],
  ["Barnacles_Alerted.mp4", "cb"],
  ["Barnacles_Death.mp4", "e9"],
  ["Riser_execution.mp4", "09"],
  ["Riser_save.mp4", "fd"],
  ["Riser_stomp.mp4", "fd"],
  ["Riser_dodge_2.mp4", "ee"],
  ["Riser_Roll.mp4", "62"],
  ["Riser_Fake_death.mp4", "28"],
  ["Enraged_Lurker.mp3", "cb"],
]);

function mediaFileUrl(filename) {
  const directory = mediaFileDirectories.get(filename);
  if (!directory) throw new Error(`Unknown Examination media file: ${filename}`);
  const encodedFilename = encodeURIComponent(filename).replaceAll("'", "%27");
  return `https://static.wikitide.net/examinationwiki/${directory[0]}/${directory}/${encodedFilename}`;
}

const backgroundImages = [
  document.querySelector("#background-image"),
  document.querySelector("#background-image-next"),
];
const showcase = document.querySelector(".showcase");
const backgroundStage = document.querySelector(".background-stage");
const frameScale = document.querySelector("#frame-scale");
const sourceScale = document.querySelector("#source-scale");
const introScreen = document.querySelector("#intro-screen");
const categoryScreen = document.querySelector("#category-screen");
const detailScreen = document.querySelector("#detail-screen");
const detailTitle = document.querySelector("#detail-title");
const detailViewport = document.querySelector("#detail-viewport");
const enemyWikiLink = document.querySelector("#enemy-wiki-link");
const categoryBackButton = document.querySelector("#category-back-button");
const themeSetting = document.querySelector("#theme-setting");
const qualitySetting = document.querySelector("#quality-setting");
const backgroundMusicSetting = document.querySelector("#background-music-setting");
const settingsStatus = document.querySelector("#settings-status");
const settingsMenu = document.querySelector(".settings-menu");
const settingsMenuSummary = settingsMenu.querySelector("summary");
const settingsControls = settingsMenu.querySelector(".settings-controls");
const mediaModal = document.querySelector("#media-modal");
const mediaPlayer = document.querySelector("#media-player");
const mediaImage = document.querySelector("#media-image");
const reconstructEffect = document.querySelector("#reconstruct-effect");
const analogGhostImage = document.querySelector("#analog-ghost");
const beginButton = document.querySelector("#begin-button");
const backButton = document.querySelector("#back-button");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const imageSceneDuration = 12000;
const minimumBackgroundAspectRatio = 1.6;
const settingsVersion = 3;

let renderQueue = [];
let previousRenderIndex = -1;
const recentRenderLimit = 7;
const recentRenderIndices = [];
const excludedRenderIndices = new Set();
let carouselTimer;
let activeScreen = introScreen;
let pendingScreen = null;
let isTransitioning = false;
let currentEnemyId = null;
let enemyCatalogScrollTop = 0;
let activeMediaTrigger = null;
let activeBackgroundImage = null;
let activeBackgroundRender = null;
let settingsMenuIsAnimating = false;
let settingsPanelHasFinished = false;
let settingsGearHasFinished = true;
let settingsMenuTransitionTimer;
const settingsStorageKey = "examination-site-settings";
const backgroundMusicVideoId = "2z5rMNH_yTI";
let backgroundMusicPlayer = null;
let backgroundMusicPlayerReady = false;

function hasActiveForegroundMedia() {
  return [...document.querySelectorAll("audio, video")].some((media) => !media.paused && !media.ended);
}

function createBackgroundMusicPlayer() {
  if (!backgroundMusicSetting.checked || backgroundMusicPlayer || typeof YT === "undefined") return;

  const playerContainer = document.createElement("div");
  playerContainer.id = "background-music-player";
  playerContainer.setAttribute("aria-hidden", "true");
  document.body.append(playerContainer);

  backgroundMusicPlayer = new YT.Player(playerContainer, {
    width: "1",
    height: "1",
    videoId: backgroundMusicVideoId,
    playerVars: {
      autoplay: 0,
      loop: 1,
      playlist: backgroundMusicVideoId,
      controls: 0,
      disablekb: 1,
      fs: 0,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
    },
    events: {
      onReady: (event) => {
        backgroundMusicPlayerReady = true;
        event.target.setVolume(50);
        enableBackgroundMusic();
      },
      onStateChange: (event) => {
        if (!backgroundMusicSetting.checked) return;
        if (event.data === YT.PlayerState.ENDED && !hasActiveForegroundMedia()) event.target.playVideo();
      },
    },
  });
}

window.onYouTubeIframeAPIReady = () => {
  createBackgroundMusicPlayer();
};

function enableBackgroundMusic() {
  if (!backgroundMusicSetting.checked || hasActiveForegroundMedia()) return;
  if (!backgroundMusicPlayer) {
    createBackgroundMusicPlayer();
  }
  if (backgroundMusicPlayerReady) {
    backgroundMusicPlayer.playVideo();
  }
}


function finishSettingsMenuTransition(force = false) {
  if (!settingsMenuIsAnimating) return;
  if (!force && (!settingsPanelHasFinished || !settingsGearHasFinished)) return;
  window.clearTimeout(settingsMenuTransitionTimer);
  if (settingsMenu.classList.contains("is-closing")) {
    settingsMenu.open = false;
  }
  settingsMenu.classList.remove("is-opening", "is-closing");
  settingsControls.style.removeProperty("max-height");
  settingsControls.style.removeProperty("opacity");
  settingsControls.style.removeProperty("transform");
  settingsControls.style.removeProperty("overflow-y");
  settingsMenuIsAnimating = false;
}

function setSettingsStatus(message) {
  settingsStatus.textContent = message;
  settingsStatus.hidden = false;
}

function isStorageError(error) {
  return error instanceof DOMException &&
    ["SecurityError", "QuotaExceededError"].includes(error.name);
}

function loadSavedSettings() {
  let serializedSettings;
  try {
    serializedSettings = window.localStorage.getItem(settingsStorageKey);
  } catch (error) {
    if (!isStorageError(error)) throw error;
    console.error("Unable to read saved Examination settings.", error);
    setSettingsStatus("Saved settings could not be read; current choices will apply for this visit only.");
    return;
  }
  if (!serializedSettings) return;

  let savedSettings;
  try {
    savedSettings = JSON.parse(serializedSettings);
  } catch (error) {
    if (!(error instanceof SyntaxError)) throw error;
    console.error("Saved Examination settings are not valid JSON.", error);
    setSettingsStatus("Saved settings were invalid, so default choices are being used.");
    return;
  }
  if (!savedSettings || typeof savedSettings !== "object" || Array.isArray(savedSettings)) {
    console.error("Saved Examination settings have an invalid format.");
    setSettingsStatus("Saved settings were invalid, so default choices are being used.");
    return;
  }

  const invalidFields = [];
  const validThemes = new Set(Array.from(themeSetting.options, (option) => option.value));
  const validQualities = new Set(Array.from(qualitySetting.options, (option) => option.value));
  const hasCurrentSettings = savedSettings.version === settingsVersion;
  if (validThemes.has(savedSettings.theme)) {
    themeSetting.value = savedSettings.theme;
  } else {
    invalidFields.push("theme");
  }
  if (hasCurrentSettings && validQualities.has(savedSettings.quality)) {
    qualitySetting.value = savedSettings.quality;
  } else if (hasCurrentSettings) {
    invalidFields.push("graphics quality");
  }
  if (hasCurrentSettings && typeof savedSettings.backgroundMusic === "boolean") {
    backgroundMusicSetting.checked = savedSettings.backgroundMusic;
  } else if (hasCurrentSettings) {
    invalidFields.push("background music");
  }
  if (invalidFields.length > 0) {
    console.error(`Saved Examination settings have invalid fields: ${invalidFields.join(", ")}.`);
    setSettingsStatus(`Some saved settings were invalid and have been reset: ${invalidFields.join(", ")}.`);
  } else if (!hasCurrentSettings) {
    setSettingsStatus("Settings updated with high graphics quality.");
  } else {
    setSettingsStatus("Your saved settings have been restored.");
  }
}

function saveSettings() {
  const settings = {
    version: settingsVersion,
    theme: themeSetting.value,
    quality: qualitySetting.value,
    backgroundMusic: backgroundMusicSetting.checked,
  };
  try {
    window.localStorage.setItem(settingsStorageKey, JSON.stringify(settings));
    setSettingsStatus("Settings saved in this browser.");
  } catch (error) {
    if (!isStorageError(error)) throw error;
    console.error("Unable to store Examination settings.", error);
    setSettingsStatus("Settings could not be stored; they will reset when you leave this page.");
  }
}

function applyVisualSettings() {
  showcase.dataset.theme = themeSetting.value;
  showcase.dataset.quality = qualitySetting.value;
}

function applyBackgroundMusicSetting() {
  if (!backgroundMusicSetting.checked) {
    if (backgroundMusicPlayerReady) backgroundMusicPlayer.pauseVideo();
    return;
  }
  enableBackgroundMusic();
}

function updateFrameScale() {
  const width = Math.round(backgroundStage.clientWidth);
  const height = Math.round(backgroundStage.clientHeight);
  if (width === 0 || height === 0) return;

  const isCompact = window.matchMedia("(max-width: 600px)").matches;
  const viewportRatio = (width / height).toFixed(2);
  frameScale.textContent = isCompact
    ? `F ${viewportRatio}:1`
    : `FRAME ${width} x ${height} px / ${viewportRatio}:1`;
  if (!activeBackgroundImage) {
    sourceScale.textContent = isCompact ? "I --" : "SOURCE --";
    return;
  }

  const imageRatio = (
    activeBackgroundImage.naturalWidth / activeBackgroundImage.naturalHeight
  ).toFixed(2);
  sourceScale.textContent = isCompact
    ? `I ${imageRatio}:1`
    : `SOURCE ${activeBackgroundImage.naturalWidth} x ${activeBackgroundImage.naturalHeight} px`;
}

window.addEventListener("resize", updateFrameScale);

function advanceAfterScene() {
  showNextRender();
}

function scheduleNextRender(delay = imageSceneDuration) {
  carouselTimer = window.setTimeout(advanceAfterScene, delay);
}

function shuffledRenderIndices() {
  const queue = backgroundRenders
    .map((_, index) => index)
    .filter((index) => !excludedRenderIndices.has(index));
  for (let index = queue.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [queue[index], queue[swapIndex]] = [queue[swapIndex], queue[index]];
  }
  return queue;
}

function takeNextRenderIndex() {
  const availableRenderCount = backgroundRenders.length - excludedRenderIndices.size;
  if (availableRenderCount === 0) {
    console.error("No wide background images are available for the main menu.");
    return null;
  }
  if (availableRenderCount <= recentRenderLimit) {
    if (renderQueue.length === 0) renderQueue = shuffledRenderIndices();
    return renderQueue.pop();
  }

  const recentRenders = new Set(recentRenderIndices);
  while (true) {
    if (renderQueue.length === 0) renderQueue = shuffledRenderIndices();

    for (let index = renderQueue.length - 1; index >= 0; index -= 1) {
      if (!recentRenders.has(renderQueue[index])) {
        return renderQueue.splice(index, 1)[0];
      }
    }

    renderQueue = [];
  }
}

function showNextRender() {
  window.clearTimeout(carouselTimer);
  previousRenderIndex = takeNextRenderIndex();
  if (previousRenderIndex === null) return;
  recentRenderIndices.push(previousRenderIndex);
  if (recentRenderIndices.length > recentRenderLimit) recentRenderIndices.shift();

  const nextImage = activeBackgroundImage === backgroundImages[0]
    ? backgroundImages[1]
    : backgroundImages[0];
  const source = backgroundRenders[previousRenderIndex];
  nextImage.onload = () => {
    if (nextImage.naturalWidth / nextImage.naturalHeight < minimumBackgroundAspectRatio) {
      excludedRenderIndices.add(previousRenderIndex);
      renderQueue = renderQueue.filter((index) => index !== previousRenderIndex);
      if (mediaModal.hidden) showNextRender();
      return;
    }

    analogGhostImage.src = source;
    nextImage.classList.remove("is-visible", "is-animating");
    void nextImage.offsetWidth;
    nextImage.classList.add("is-visible", "is-animating");

    activeBackgroundImage?.classList.remove("is-visible");
    activeBackgroundImage = nextImage;
    activeBackgroundRender = source;
    updateFrameScale();
    stopBackgroundCue();
    if (mediaModal.hidden) {
      scheduleNextRender();
    }
  };
  nextImage.onerror = () => {
    console.error(`Unable to load background render ${source}.`);
    if (mediaModal.hidden) {
      carouselTimer = window.setTimeout(showNextRender, 2000);
    }
  };
  nextImage.src = source;
}

function showScreen(screen) {
  showcase.classList.remove("is-reconstructing");
  showcase.classList.toggle("is-menu-active", screen === introScreen);
  activeScreen.hidden = true;
  screen.hidden = false;
  screen.classList.add("is-entering");
  activeScreen = screen;
  isTransitioning = false;
  if (screen === introScreen) beginButton.disabled = false;
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
  enableBackgroundMusic();
  beginButton.disabled = true;
  transitionTo(categoryScreen);
});

categoryBackButton.addEventListener("click", () => {
  transitionTo(introScreen);
});

themeSetting.addEventListener("change", () => {
  applyVisualSettings();
  saveSettings();
});
qualitySetting.addEventListener("change", () => {
  applyVisualSettings();
  saveSettings();
});
backgroundMusicSetting.addEventListener("change", () => {
  applyBackgroundMusicSetting();
  saveSettings();
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

function getEnemyId(section, enemy) {
  const sectionId = section.label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const enemyId = enemy.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `${sectionId}-${enemyId}`;
}

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
                  <button class="enemy-card" type="button" data-enemy-id="${getEnemyId(section, enemy)}" aria-label="View ${enemy.name}">
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
      enemyCatalogScrollTop = detailViewport.scrollTop;
      const enemy = enemyCatalog
        .flatMap((section) => section.enemies.map((item) => ({
          ...item,
          category: section.label,
          id: getEnemyId(section, item),
        })))
        .find((item) => item.id === card.dataset.enemyId);
      if (!enemy) {
        console.error(`Unable to find enemy data for ${card.dataset.enemyId}.`);
        return;
      }

      renderEnemyDetail(enemy);
    });
  });
}

function renderEnemyDetail(enemy) {
  currentEnemyId = enemy.id;
  detailTitle.textContent = enemy.name;
  enemyWikiLink.hidden = true;
  backButton.textContent = "Back to Enemies";
  if (currentEnemyId === "regulars-lurker") {
    renderLurkerDetail(enemy);
  } else if (currentEnemyId === "regulars-crawler") {
    renderCrawlerDetail(enemy);
  } else if (currentEnemyId === "regulars-grabby") {
    renderGrabbyDetail(enemy);
  } else if (currentEnemyId === "regulars-barnacles") {
    renderBarnaclesDetail(enemy);
  } else if (currentEnemyId === "regulars-riser") {
    renderRiserDetail(enemy);
  } else if (currentEnemyId === "regulars-mutant") {
    renderMutantDetail(enemy);
  } else if (currentEnemyId === "regulars-kamikaze") {
    renderKamikazeDetail(enemy);
  } else if (currentEnemyId === "regulars-shielder") {
    renderShielderDetail(enemy);
  } else if (currentEnemyId === "city-infected-city-shielder") {
    renderCityShielderDetail(enemy);
  } else {
    renderEnemyPlaceholder(enemy);
  }
  detailViewport.scrollTop = 0;
  detailTitle.focus();
}

function renderEnemyPlaceholder(enemy) {
  detailViewport.innerHTML = `
    <article class="enemy-detail enemy-detail-placeholder">
      <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
      <div>
        <p class="enemy-category-label">${enemy.category}</p>
        <h2>${enemy.name}</h2>
        <p>Information for this enemy will be added when it is ready.</p>
      </div>
    </article>
  `;
}

function renderShielderDetail(enemy) {
  const variantImages = [
    { name: "MNPA", image: "https://static.wikitide.net/examinationwiki/e/e5/MNPA_Shielder_2.png" },
    { name: "MNPA 2", image: "https://static.wikitide.net/examinationwiki/8/8a/MNPA_Shielder.png" },
    { name: "MGF MP", image: "https://static.wikitide.net/examinationwiki/5/5e/MGF_MP_Shielder.png" },
  ];
  const galleryImages = [
    { name: "Alternative MNPA render", file: "MPD_Shielder.png" },
    { name: "Removed RSU variant", file: "RSU_Shielder.png" },
  ];
  const sector1 = `${examinationWiki}/Sector_1`;
  const viralLeader = `${examinationWiki}/Viral_Leader`;
  const shieldPenetrators = ["AEN-50", "SHC-23", "Arcturus .50"];
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Shielder</h2>
          <p>“Those were issued to the military for the refugees that camped here, before everything went off. They're full of hate and spite.”</p>
          <p><strong>Shielders</strong> are a relatively common type of <a href="${examinationWiki}/Enemies" target="_blank" rel="noopener noreferrer">Enemy</a> in Examination. They carry a shield and baton, advancing on their targets while their shield blocks most incoming damage.</p>
          <button class="begin-button" type="button" data-related-enemy-id="city-infected-city-shielder">View City Shielder archive</button>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variants</h3>
        <div class="enemy-variant-grid">
          ${variantImages.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} Shielder image">
                <img src="${variant.image}" alt="${variant.name} Shielder" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn location</th><td><a href="${sector1}" target="_blank" rel="noopener noreferrer">Sector 1</a></td></tr>
              <tr><th scope="row">Health</th><td>350 HP</td></tr>
              <tr><th scope="row">Regeneration</th><td>3.5 HP/s</td></tr>
              <tr><th scope="row">Walk speed</th><td>7 studs/s</td></tr>
              <tr><th scope="row">Pursuit speed</th><td>7.5 studs/s; 11 when enraged</td></tr>
              <tr><th scope="row">Rush speed</th><td>13 studs/s</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Baton</td></tr>
              <tr><th scope="row">Damage</th><td>25; 30 when enraged</td></tr>
              <tr><th scope="row">Execution threshold</th><td>Below 35 HP; below 40 HP when enraged</td></tr>
              <tr><th scope="row">Respawn time</th><td>1 minute 55 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <p>Three Shielders spawn by default, with more appearing as the server's player count increases. A Shielder takes 1 minute and 55 seconds to respawn after death.</p>
        <div class="enemy-table-wrap">
          <table class="enemy-stats spawn-table">
            <thead><tr><th scope="col">Variant</th><th scope="col">Prioritized spawn location</th></tr></thead>
            <tbody>
              <tr><th scope="row">MNPA</th><td>Center of Sector 1, near a forklift</td></tr>
              <tr><th scope="row">MNPA 2</th><td>Sector 1, near the entrance gate</td></tr>
              <tr><th scope="row">MGF MP</th><td>Sector 1, near <a href="${examinationWiki}/Generator_2?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">Generator 2</a></td></tr>
            </tbody>
          </table>
        </div>
        <p>Shielders wander at 7 studs/s until they spot a target, then bang their shields and chase at 7.5 studs/s. At close range, they rush at 13 studs/s. If a target stays out of sight for more than 10 seconds, a Shielder returns to wandering.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attacks and attributes</h3>
        <p>A Shielder strikes with its baton for 25 damage every 2 seconds at medium range. When enraged, its attacks deal 30 damage with a 0.8-second cooldown. It executes players below 35 HP, or below 40 HP while enraged.</p>
        <ul>
          <li><strong>Stagger Immunity:</strong> Shielders are not stunned by gunshots.</li>
          <li><strong>Dreadnought:</strong> They open doors when walking up to them.</li>
          <li><strong>Shield:</strong> Blocks most incoming damage and can only be penetrated by ${shieldPenetrators.map((weapon) => `<a href="${examinationWiki}/${encodeURIComponent(weapon).replaceAll("%2E", ".")}" target="_blank" rel="noopener noreferrer">${weapon}</a>`).join(", ")}. The head and right arm remain partially exposed.</li>
          <li>When sprinting, a Shielder moves its arm-mounted shield aside, leaving itself exposed.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Rage</h3>
        <p>Near a <a href="${viralLeader}" target="_blank" rel="noopener noreferrer">Viral Leader</a>, a Shielder becomes enraged: its eyes turn red, pursuit speed increases to 11 studs/s, damage increases to 30, and attack cooldown drops to 0.8 seconds.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        <p>Shielder idle — plays on loop.</p>
        <audio class="enemy-audio" controls loop preload="none" src="https://static.wikitide.net/examinationwiki/3/38/Shielder_Idle.mp3">Your browser does not support audio playback.</audio>
        <p>Shield bang — plays when spotting a player.</p>
        <audio class="enemy-audio" controls preload="none" src="https://static.wikitide.net/examinationwiki/6/6f/Shielder_Bang.mp3">Your browser does not support audio playback.</audio>
        <p>Dreadnought scream — plays when stunned from a bash.</p>
        <audio class="enemy-audio" controls preload="none" src="https://static.wikitide.net/examinationwiki/1/1a/Dreadnought_Scream.mp3">Your browser does not support audio playback.</audio>
      </section>

      <section class="enemy-info-section">
        <h3>Gallery</h3>
        <div class="enemy-variant-grid">
          ${galleryImages.map((image) => {
            const source = `${examinationWiki}/Special:FilePath/${encodeURIComponent(image.file)}`;
            const page = `${examinationWiki}/File:${encodeURIComponent(image.file)}`;
            return `
              <figure class="enemy-variant">
                <button class="enemy-variant-image" type="button" data-image-src="${source}" aria-label="View ${image.name}">
                  <img src="${source}" alt="${image.name}" loading="lazy" />
                </button>
                <figcaption><a href="${page}" target="_blank" rel="noopener noreferrer">${image.name}</a></figcaption>
              </figure>
            `;
          }).join("")}
        </div>
        <div class="animation-grid">
          <button class="animation-card" type="button" data-video-src="${examinationWiki}/Special:FilePath/Shielder_Execution.mp4" aria-label="Play Shielder execution animation">
            <span class="animation-play-icon" aria-hidden="true">▶</span>
            <span>Execution animation</span>
          </button>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Shielders were members of the <a href="${examinationWiki}/Menlo%E2%80%99s_National_Police_Authority?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">MNPA</a> or the <a href="${examinationWiki}/Menlonian_Ground_Forces" target="_blank" rel="noopener noreferrer">MGF</a> military police. They were issued shields and batons to control riots among refugees near the <a href="${examinationWiki}/Itagura_Nuclear_Power_Plant" target="_blank" rel="noopener noreferrer">Itagura Nuclear Power Plant</a>.</p>
        <p>After infection with the <a href="${examinationWiki}/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a>, they underwent the Dreadnought mutation. They retain enough intelligence to use their equipment and interact with objects, but are more spiteful and violent than usual.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>The shield-banging sound effect comes from the Shield enemy in <a href="https://payday.fandom.com/wiki/Shield_(Payday_2)" target="_blank" rel="noopener noreferrer">PAYDAY 2</a>.</li>
          <li>An RSU Shielder variant was replaced by the second MNPA variant in the normal game, but can still be seen in Blood Handed Retriever.</li>
        </ul>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderCityShielderDetail(enemy) {
  const variantImages = [
    { name: "MNPA 1", image: "https://static.wikitide.net/examinationwiki/c/cd/MNPA_City_Shielder.png" },
    { name: "MNPA 2", image: "https://static.wikitide.net/examinationwiki/9/9f/MNPA_City_Shielder_2.png" },
  ];
  const galleryImages = [
    { name: "Old appearance", file: "RCU_Shielder_1.png" },
    { name: "Old appearance alternate render", file: "RCU_Shielder_2.png" },
  ];
  const streets = `${examinationWiki}/Locations#Streets`;
  const serverRestart = `${examinationWiki}/Mechanics#Relay_Station`;
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">City Infected · Combat Archive</p>
          <h2>City Shielder</h2>
          <p>“We held our ground until there was nothing left to hold.” — Sergeant Hermann Lutz</p>
          <p><strong>City Shielder</strong> is a unique variant of the <a href="${examinationWiki}/Shielder" target="_blank" rel="noopener noreferrer">Shielder</a>, with stronger defenses. Its shield blocks most incoming damage as it advances on the player.</p>
          <button class="begin-button" type="button" data-related-enemy-id="regulars-shielder">View regular Shielder archive</button>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variants</h3>
        <p>Both City Shielder variants are exclusive to the Server Restart event.</p>
        <div class="enemy-variant-grid">
          ${variantImages.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} City Shielder image">
                <img src="${variant.image}" alt="${variant.name} City Shielder" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn location</th><td><a href="${streets}" target="_blank" rel="noopener noreferrer">Streets</a></td></tr>
              <tr><th scope="row">Health</th><td>700 HP</td></tr>
              <tr><th scope="row">Regeneration</th><td>None</td></tr>
              <tr><th scope="row">Walk speed</th><td>10 studs/s</td></tr>
              <tr><th scope="row">Run speed</th><td>None</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Baton</td></tr>
              <tr><th scope="row">Secondary equipment</th><td>Counterattack</td></tr>
              <tr><th scope="row">Baton damage</th><td>25</td></tr>
              <tr><th scope="row">Counterattack damage</th><td>20</td></tr>
              <tr><th scope="row">Execution threshold</th><td>Below 35 HP</td></tr>
              <tr><th scope="row">Respawn time</th><td>None</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
              <tr><th scope="row">Affiliation</th><td>Menlo's National Police Authority</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <p>Two City Shielders spawn in the <a href="${streets}" target="_blank" rel="noopener noreferrer">Streets</a> during the <a href="${serverRestart}" target="_blank" rel="noopener noreferrer">Server Restart event</a>. They wander at 10 studs/s, bang their shields when spotting a target, then pursue it at the same speed. If a target stays out of sight for more than 10 seconds, they return to wandering.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attacks and protection</h3>
        <p>A City Shielder strikes with its baton for 25 damage every 2 seconds at medium range. It executes players below 35 HP.</p>
        <p>Every 5 seconds, it stops and braces its shield for 2.5 seconds. If a player bashes it during this protective stance, the Shielder counterattacks for 20 damage instead. The player is not stunned, and the City Shielder is not staggered.</p>
        <ul>
          <li><strong>Stagger Immunity:</strong> City Shielders are not stunned by gunshots.</li>
          <li><strong>Dreadnought:</strong> They open doors when walking up to them.</li>
          <li><strong>Shield:</strong> Blocks most incoming damage and can only be penetrated by <a href="${examinationWiki}/AEN-50" target="_blank" rel="noopener noreferrer">AEN-50</a>, <a href="${examinationWiki}/SHC-23" target="_blank" rel="noopener noreferrer">SHC-23</a>, and <a href="${examinationWiki}/Arcturus_.50" target="_blank" rel="noopener noreferrer">Arcturus .50</a>. The head and right arm remain partially exposed.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        <p>Shielder idle — plays on loop.</p>
        <audio class="enemy-audio" controls loop preload="none" src="https://static.wikitide.net/examinationwiki/3/38/Shielder_Idle.mp3">Your browser does not support audio playback.</audio>
        <p>Shield bang — plays when spotting a player.</p>
        <audio class="enemy-audio" controls preload="none" src="https://static.wikitide.net/examinationwiki/6/6f/Shielder_Bang.mp3">Your browser does not support audio playback.</audio>
        <p>Dreadnought scream — plays when stunned from a bash.</p>
        <audio class="enemy-audio" controls preload="none" src="https://static.wikitide.net/examinationwiki/1/1a/Dreadnought_Scream.mp3">Your browser does not support audio playback.</audio>
      </section>

      <section class="enemy-info-section">
        <h3>Gallery</h3>
        <div class="enemy-variant-grid">
          ${galleryImages.map((image) => {
            const source = `${examinationWiki}/Special:FilePath/${encodeURIComponent(image.file)}`;
            const page = `${examinationWiki}/File:${encodeURIComponent(image.file)}`;
            return `
              <figure class="enemy-variant">
                <button class="enemy-variant-image" type="button" data-image-src="${source}" aria-label="View ${image.name}">
                  <img src="${source}" alt="${image.name}" loading="lazy" />
                </button>
                <figcaption><a href="${page}" target="_blank" rel="noopener noreferrer">${image.name}</a></figcaption>
              </figure>
            `;
          }).join("")}
        </div>
        <div class="animation-grid">
          <button class="animation-card" type="button" data-video-src="${examinationWiki}/Special:FilePath/RCU_Shielder_Execution.mp4" aria-label="Play City Shielder execution animation">
            <span class="animation-play-icon" aria-hidden="true">▶</span>
            <span>Execution animation</span>
          </button>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>City Shielders were riot-control personnel with the <a href="${examinationWiki}/Menlo%27s_National_Police_Authority?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">Menlo's National Police Authority</a>, infected with the <a href="${examinationWiki}/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a> and mutated into <a href="${examinationWiki}/Dreadnought" target="_blank" rel="noopener noreferrer">Dreadnoughts</a>.</p>
        <p>Their appearance in the game is not canon, as the Server Restart event is not canon to the lore.</p>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderLurkerDetail(enemy) {
  const variantImages = [
    { name: "Engineer", image: "https://static.wikitide.net/examinationwiki/7/7b/Engineer_Lurker.png" },
    { name: "Welder", image: "https://static.wikitide.net/examinationwiki/a/ae/Welder_Lurker.png" },
    { name: "RSU", image: "https://static.wikitide.net/examinationwiki/thumb/f/fb/RSU_Lurker.png/600px-RSU_Lurker.png" },
    { name: "MMS", image: "https://static.wikitide.net/examinationwiki/e/e7/MMS_Lurker.png" },
    { name: "HPCA", image: "https://static.wikitide.net/examinationwiki/b/b2/HPCA_Lurker.png" },
    { name: "RIF OZK", image: "https://static.wikitide.net/examinationwiki/f/f3/OZK_Lurker.png" },
  ];
  const animations = [
    { name: "Execution animation 1", file: "Lurker_Execution_1.mp4" },
    { name: "Execution animation 2", file: "Lurker_Execution_2.mp4" },
    { name: "Execution animation 3", file: "Lurker_Execution_3.mp4" },
    { name: "Save animation", file: "Lurker_Save.mp4" },
    { name: "Maul animation", file: "Lurker_Maul.mp4" },
  ];
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Lurker</h2>
          <p>Simple basic things. Basic fodder, basic everywhere. Just don't let them have their bloody hands on you.</p>
          <p>Lurker is the most common type of enemy in Examination. They have average speed and damage, possessing no special attributes of their own. They are only dangerous in groups.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variants</h3>
        <div class="enemy-variant-grid">
          ${variantImages.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} Lurker image">
                <img src="${variant.image}" alt="${variant.name} Lurker" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Health</th><td>150 HP</td></tr>
              <tr><th scope="row">Regeneration</th><td>1.5 HP/s</td></tr>
              <tr><th scope="row">Walk speed</th><td>9</td></tr>
              <tr><th scope="row">Run speed</th><td>17</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Fists</td></tr>
              <tr><th scope="row">Damage</th><td>15</td></tr>
              <tr><th scope="row">Execution threshold</th><td>Below 30 HP</td></tr>
              <tr><th scope="row">Respawn time</th><td>2 minutes 10 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <p>Six Lurkers spawn on the map by default. More may spawn as the player count increases. Each variant has a prioritized spawn location.</p>
        <div class="enemy-table-wrap">
          <table class="enemy-stats spawn-table">
            <thead><tr><th scope="col">Variant</th><th scope="col">Prioritized spawn location</th></tr></thead>
            <tbody>
              <tr><td>Engineer</td><td>Near Sector 1 entrance</td></tr>
              <tr><td>Welder</td><td>Near Sector 1 entrance</td></tr>
              <tr><td>RSU</td><td>Sector 1, near Generator 2</td></tr>
              <tr><td>MMS</td><td>Center of Sector 1</td></tr>
              <tr><td>HPCA</td><td>Sector 2, near Library and Resting rooms</td></tr>
              <tr><td>RIF OZK</td><td>Sector 3, in Subsector-1</td></tr>
            </tbody>
          </table>
        </div>
        <p>Lurkers take 2 minutes and 10 seconds to respawn after death.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <p>Lurkers punch their target, dealing 15 damage per hit with a 1-second cooldown and short attack range.</p>
        <p>If a Lurker hits a player below 30 HP, it attempts an execution. There is a 50% chance that a save animation plays instead: the player fights back and kicks the Lurker away, becomes infected, and is healed to 15 HP. The Lurker cannot attack for 3 seconds afterward.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Rage</h3>
        <p>Near a Viral Leader, a Lurker becomes enraged: its eyes turn red and it screams constantly. Its damage drops to 10, attack cooldown to 0.6 seconds, and chase speed increases to 30 studs/s. It also gains the Maul ability.</p>
        <h4>Maul</h4>
        <p>After landing four punches, the Lurker mauls the next player it hits. The special animation makes the Lurker completely invincible. The player loses 45 HP and becomes Marked. Marked players turn into a Viral on death even if they were not infected. Maul cannot reduce a player's HP below 1.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        <p>Enraged Lurker — plays on loop while the Lurker is enraged.</p>
        <audio class="enemy-audio" controls preload="none" src="${mediaFileUrl("Enraged_Lurker.mp3")}">
          Your browser does not support audio playback.
        </audio>
      </section>

      <section class="enemy-info-section">
        <h3>Animation gallery</h3>
        <div class="animation-grid">
          ${animations.map((animation) => `
            <button class="animation-card" type="button" data-video-src="${mediaFileUrl(animation.file)}" aria-label="Play ${animation.name}">
              <span class="animation-play-icon" aria-hidden="true">▶</span>
              <span>${animation.name}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Lurkers are the “standard” variant of those affected by the WE-30 pathogen. Their durability and strength are nearly identical to a healthy human, but their awareness and intelligence are significantly impaired, making them predictable as they always take direct paths to their prey.</p>
        <p>Given enough lifetime, Lurkers have the potential to mutate into other variants of the pathogen.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <p>Early in Examination's development, Lurkers could grab both of a player's arms and hold them in place for other infected to attack. The code was considered too complicated, so the feature was scrapped; Virals were given the Maul ability instead.</p>
        <p>This may have been inspired by the grab ability of Shamblers from Guts &amp; Blackpowder.</p>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderCrawlerDetail(enemy) {
  const galleryImage = "https://examination.miraheze.org/wiki/Special:FilePath/Mutant_Crawler.png";
  const galleryPage = "https://examination.miraheze.org/wiki/File:Mutant_Crawler.png";
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Crawler</h2>
          <p>“Poor things and poor people who broke their legs trying to escape fate. They're always a breath away from their lungs collapsing. I'd say so when my flesh is constantly gliding through cement.”</p>
          <p><strong>Crawlers</strong> are a rare type of <a href="https://examination.miraheze.org/wiki/Enemies" target="_blank" rel="noopener noreferrer">Enemy</a> in Examination. They have fast movement speed and attack rate, however their damage and health are very low.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn Location</th><td><a href="https://examination.miraheze.org/wiki/Reactor_4" target="_blank" rel="noopener noreferrer">Reactor 4</a></td></tr>
              <tr><th scope="row">Health points</th><td>50</td></tr>
              <tr><th scope="row">Regeneration</th><td>0.5 HP/s</td></tr>
              <tr><th scope="row">Default speed</th><td>5</td></tr>
              <tr><th scope="row">Pursuit speed</th><td>23</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Jaws</td></tr>
              <tr><th scope="row">Damage</th><td>8</td></tr>
              <tr><th scope="row">Respawn time</th><td>40 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <h4>Spawn</h4>
        <p>A total of 2 Crawlers spawn inside Reactor 4, closer to the ladder to the basement. After death, a Crawler takes 40 seconds to respawn.</p>
        <h4>Behavior</h4>
        <p>A Crawler wanders around the map at 5 studs/s until it spots a target. Once a target is in sight, it chases at 23 studs/s. If the target stays out of sight for more than 10 seconds, the Crawler starts wandering around the map again.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <p>A Crawler bites its target, dealing 8 damage per hit with a 0.6-second cooldown and short attack range.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Stagger Immunity:</strong> Crawlers are not stunned by gunshots.</li>
          <li><strong>Taser Resistance:</strong> Stun from the <a href="https://examination.miraheze.org/wiki/TASC-10" target="_blank" rel="noopener noreferrer">TASC-10</a> lasts only 3.5 seconds.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Gallery</h3>
        <figure class="enemy-variant">
          <button class="enemy-variant-image" type="button" data-image-src="${galleryImage}" aria-label="View Crawler image">
            <img src="${galleryImage}" alt="Crawler" loading="lazy" />
          </button>
          <figcaption><a href="${galleryPage}" target="_blank" rel="noopener noreferrer">Mutant Crawler</a></figcaption>
        </figure>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Crawlers are workers of the power plant who broke or lost their legs while attempting to escape the infected, in the end also becoming infected with the <a href="https://examination.miraheze.org/wiki/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a>. Due to being near the reactor, they have been heavily malformed by the radiation.</p>
        <p>Due to the loss of their legs, they are extremely fragile and easy to kill.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>Crawler has the lowest respawn time out of all enemies in the game.</li>
        </ul>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderGrabbyDetail(enemy) {
  const galleryImages = [
    { name: "Idle Grabby", file: "Grabby_Placeholder.png" },
    { name: "Idle Grabby 2", file: "Grabby_Idle.png" },
  ];
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Grabby</h2>
          <p><strong>Grabby</strong> is a unique <a href="https://examination.miraheze.org/wiki/Enemies" target="_blank" rel="noopener noreferrer">Enemy</a> type in Examination. They are stationary and rely on catching the player off-guard to instantly kill them.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn Location</th><td><a href="https://examination.miraheze.org/wiki/Reactor_4" target="_blank" rel="noopener noreferrer">Reactor 4</a></td></tr>
              <tr><th scope="row">Health points</th><td>2000</td></tr>
              <tr><th scope="row">Regeneration</th><td>None</td></tr>
              <tr><th scope="row">Walk speed</th><td>0</td></tr>
              <tr><th scope="row">Run speed</th><td>0</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Claws</td></tr>
              <tr><th scope="row">Execution</th><td>QTE Failure</td></tr>
              <tr><th scope="row">Respawn time</th><td>30 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <h4>Spawn</h4>
        <p>A total of 4 Grabby Mutants spawn throughout Reactor 4. They take about 30 seconds to respawn after death.</p>
        <h4>Behavior</h4>
        <p>Grabby is completely stationary and waits until a player passes by.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <h4>Grab</h4>
        <p>When a player is about 3 studs in front of Grabby, it grabs and locks the player in place.</p>
        <p>The player must pass a quick-time event consisting of one random key, with about a 2-second margin. If the player succeeds, they escape the grab and Grabby dies. If the player fails, Grabby instantly kills them.</p>
        <p>The player can be saved without passing the QTE if Grabby is killed during the 2-second margin.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Stagger Immunity:</strong> Grabbies are not stunned by gunshots.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Gallery</h3>
        <div class="enemy-variant-grid">
          ${galleryImages.map((image) => {
            const source = `https://examination.miraheze.org/wiki/Special:FilePath/${image.file}`;
            const page = `https://examination.miraheze.org/wiki/File:${image.file}`;
            return `
              <figure class="enemy-variant">
                <button class="enemy-variant-image" type="button" data-image-src="${source}" aria-label="View ${image.name}">
                  <img src="${source}" alt="${image.name}" loading="lazy" />
                </button>
                <figcaption><a href="${page}" target="_blank" rel="noopener noreferrer">${image.name}</a></figcaption>
              </figure>
            `;
          }).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Similar to normal <a href="https://examination.miraheze.org/wiki/Mutant" target="_blank" rel="noopener noreferrer">Mutants</a>, Grabby Mutants are workers and engineers of the power plant who were trapped and infected with the <a href="https://examination.miraheze.org/wiki/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a> in the area of <a href="https://examination.miraheze.org/wiki/Reactor_4" target="_blank" rel="noopener noreferrer">Reactor 4</a>. However, they were caught in debris and subsequently merged with the flesh walls of the area.</p>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderBarnaclesDetail(enemy) {
  const animations = [
    { name: "Alerted Barnacles", source: mediaFileUrl("Barnacles_Alerted.mp4") },
    { name: "Barnacles death animation", source: mediaFileUrl("Barnacles_Death.mp4") },
    { name: "Barnacles execution animation", source: "assets/Barnacles_Execution.mp4" },
  ];
  const alertedSound = "https://static.wikitide.net/examinationwiki/b/bf/Barnacles_Alerted.mp3";
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Barnacles</h2>
          <p><strong>Barnacles</strong> are a unique <a href="https://examination.miraheze.org/wiki/Enemies" target="_blank" rel="noopener noreferrer">Enemy</a> type in Examination. Similarly to the <a href="https://examination.miraheze.org/wiki/Grabby" target="_blank" rel="noopener noreferrer">Grabby</a>, they are stationary, however they pose a much bigger threat.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn Location</th><td><a href="https://examination.miraheze.org/wiki/Reactor_4#Infested_Basement" target="_blank" rel="noopener noreferrer">Reactor 4 Infested Basement</a></td></tr>
              <tr><th scope="row">Health points</th><td>2</td></tr>
              <tr><th scope="row">Regeneration</th><td>None</td></tr>
              <tr><th scope="row">Walk speed</th><td>None</td></tr>
              <tr><th scope="row">Run speed</th><td>None</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Claws</td></tr>
              <tr><th scope="row">Execution</th><td>On contact</td></tr>
              <tr><th scope="row">Respawn time</th><td>8 minutes 30 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <h4>Spawn</h4>
        <p>A total of 4 Barnacles spawn in Reactor 4's <a href="https://examination.miraheze.org/wiki/Reactor_4#Infested_Basement" target="_blank" rel="noopener noreferrer">Infested Basement</a>. They take 8 minutes and 30 seconds to respawn after death.</p>
        <h4>Behavior</h4>
        <p>Barnacles are completely stationary. When a player is nearby, they become alerted: their eyes glow and they stretch their arms toward the player. They return to idle after the player moves away.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <h4>Execution</h4>
        <p>Upon making physical contact with a player, Barnacles perform an execution on them.</p>
        <h4>Flammability</h4>
        <p>Barnacles are immune to all damage sources except the <a href="https://examination.miraheze.org/wiki/SHC-23" target="_blank" rel="noopener noreferrer">SHC-23</a>. They always die after two SHC-23 hits: the first visually burns the Barnacle, while the second kills it with a special animation.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Stagger Immunity:</strong> Barnacles are not stunned by gunshots.</li>
          <li>Barnacles can only be damaged by the <a href="https://examination.miraheze.org/wiki/SHC-23" target="_blank" rel="noopener noreferrer">SHC-23</a>.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        <p>Alerted Barnacles — plays on loop when Barnacles are alerted.</p>
        <audio class="enemy-audio" controls loop preload="none" src="${alertedSound}">
          Your browser does not support audio playback.
        </audio>
      </section>

      <section class="enemy-info-section">
        <h3>Animation gallery</h3>
        <div class="animation-grid">
          ${animations.map((animation) => `
            <button class="animation-card" type="button" data-video-src="${animation.source}" aria-label="Play ${animation.name}">
              <span class="animation-play-icon" aria-hidden="true">▶</span>
              <span>${animation.name}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>TBA</p>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderRiserDetail(enemy) {
  const variantImages = [
    { name: "HPCA 1", image: "https://static.wikitide.net/examinationwiki/8/8b/HPCA_Riser.png" },
    { name: "HPCA 2", image: "https://static.wikitide.net/examinationwiki/e/e6/HPCA_Riser_2.png" },
    { name: "MFD", image: "https://static.wikitide.net/examinationwiki/d/dc/MFD_Riser.png" },
    { name: "RIF", image: "https://static.wikitide.net/examinationwiki/2/2f/RIF_Riser.png" },
    { name: "RIF OZK", image: "https://static.wikitide.net/examinationwiki/8/86/OZK_Riser.png" },
  ];
  const animations = [
    { name: "Execution animation", file: "Riser_execution.mp4" },
    { name: "Save animation", file: "Riser_save.mp4" },
    { name: "Stomp execution", file: "Riser_stomp.mp4" },
    { name: "Dodge animation", file: "Riser_dodge_2.mp4" },
    { name: "Roll animation", file: "Riser_Roll.mp4" },
    { name: "Fake death animation", file: "Riser_Fake_death.mp4" },
  ];
  const sector1 = `${examinationWiki}/Sector_1`;
  const sector2 = `${examinationWiki}/Sector_2`;
  const sector3 = `${examinationWiki}/Sector_3`;
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Riser</h2>
          <p>“Well they're always the usually stubborn people you'd know. Now reduced to stubborn things. They have some good sense of self preservation, probably cause the virus didn't hit their brain well, or not done yet.”</p>
          <p><strong>Riser</strong> is one of the most common types of <a href="${examinationWiki}/Enemies" target="_blank" rel="noopener noreferrer">Enemies</a> in Examination. They are fast, have decent damage and health, and can dodge incoming attacks or trick new players with a fake death.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variants</h3>
        <div class="enemy-variant-grid">
          ${variantImages.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} Riser image">
                <img src="${variant.image}" alt="${variant.name} Riser" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn locations</th><td><a href="${sector1}" target="_blank" rel="noopener noreferrer">Sector 1</a>, <a href="${sector2}" target="_blank" rel="noopener noreferrer">Sector 2</a>, and <a href="${sector3}" target="_blank" rel="noopener noreferrer">Sector 3</a></td></tr>
              <tr><th scope="row">Health points</th><td>400</td></tr>
              <tr><th scope="row">Regeneration</th><td>4 HP/s (MFD, RIF); none (HPCA, OZK)</td></tr>
              <tr><th scope="row">Walk speed</th><td>9 studs/s</td></tr>
              <tr><th scope="row">Run speed</th><td>20 studs/s</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Fists</td></tr>
              <tr><th scope="row">Damage</th><td>17</td></tr>
              <tr><th scope="row">Execution</th><td>Against players below 34 HP</td></tr>
              <tr><th scope="row">Respawn time</th><td>5 minutes 10 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <h4>Spawn</h4>
        <p>Five Risers spawn on the map by default, with more appearing as the server's player count increases. Their prioritized locations are:</p>
        <div class="enemy-table-wrap">
          <table class="enemy-stats spawn-table">
            <thead><tr><th scope="col">Variant</th><th scope="col">Spawn location</th></tr></thead>
            <tbody>
              <tr><th scope="row">HPCA 1</th><td><a href="${sector1}" target="_blank" rel="noopener noreferrer">Sector 1</a>, near Generator 2</td></tr>
              <tr><th scope="row">HPCA 2</th><td><a href="${sector1}" target="_blank" rel="noopener noreferrer">Sector 1</a>, near <a href="${sector2}" target="_blank" rel="noopener noreferrer">Sector 2</a>'s emergency exit</td></tr>
              <tr><th scope="row">MFD</th><td><a href="${sector1}" target="_blank" rel="noopener noreferrer">Sector 1</a>, near Sector 2's emergency exit</td></tr>
              <tr><th scope="row">RIF</th><td><a href="${sector3}" target="_blank" rel="noopener noreferrer">Sector 3</a>, in Subsector-3</td></tr>
              <tr><th scope="row">RIF OZK</th><td><a href="${sector3}" target="_blank" rel="noopener noreferrer">Sector 3</a>, in Subsector-1</td></tr>
            </tbody>
          </table>
        </div>
        <p>A Riser takes 5 minutes and 10 seconds to respawn after death.</p>
        <h4>Behavior</h4>
        <p>Risers wander at 9 studs/s until they spot a target, then chase at 20 studs/s. If the target stays out of sight for more than 10 seconds, a Riser returns to wandering.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attacks and abilities</h3>
        <h4>Attacks</h4>
        <p>A Riser punches its target for 17 damage per hit, with a 0.7-second cooldown and short range. It executes players below 34 HP. There is a 50% chance that a save animation plays instead: the player fights back and kicks the Riser away, is left with 15 HP, and the Riser cannot attack for 3 seconds.</p>
        <h4>Protection</h4>
        <p>When hit, a Riser has a chance to dodge. The 0.5-second dodge animation immobilizes it and makes it immune to damage. After dodging, it can roll to the side when hit; rolling immobilizes it but does not grant damage immunity.</p>
        <h4>Fake death</h4>
        <p>The first time its health reaches 150 or below, a Riser falls to the floor with a high-pitched scream and becomes immune to damage. After about 2 seconds, it gets up with a roar and resumes normal behavior; it can be damaged during the rising animation. While it is down, a player can interact with the prompt on its head to execute it.</p>
        <p>High single-hit damage that would kill it outright, or enough damage dealt during a roll, can bypass fake death. It can activate only once per life.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Stagger Immunity:</strong> Risers are not stunned by gunshots.</li>
          <li><strong>Fire Resistance:</strong> The MFD variant takes one fewer tick of burn damage from the <a href="${examinationWiki}/SHC-23" target="_blank" rel="noopener noreferrer">SHC-23</a>.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        <p>Riser idle — plays on loop, except for HPCA 2.</p>
        <audio class="enemy-audio" controls loop preload="none" src="https://static.wikitide.net/examinationwiki/6/63/Riser_Idle.mp3">
          Your browser does not support audio playback.
        </audio>
      </section>

      <section class="enemy-info-section">
        <h3>Animation gallery</h3>
        <div class="animation-grid">
          ${animations.map((animation) => `
            <button class="animation-card" type="button" data-video-src="${mediaFileUrl(animation.file)}" aria-label="Play ${animation.name}">
              <span class="animation-play-icon" aria-hidden="true">▶</span>
              <span>${animation.name}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Risers are a variant of the <a href="${examinationWiki}/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a>'s <a href="${examinationWiki}/Fury" target="_blank" rel="noopener noreferrer">Fury</a> emotional mutation. The pathogen has not fully affected their bodies, allowing them to retain a sense of self-preservation and react to gunfire by dodging. They can take boxing stances, but lack the intelligence for complex interactions with objects.</p>
        <p>Like Furies, they are full of hatred and rush down their prey to beat them to a pulp. When suffering major organ failure and nearing death, their bodies rapidly dump adrenaline, keeping them alive for a few more seconds.</p>
        <p>Given enough time, some Risers may mutate further into variants such as Dreadnoughts.</p>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderMutantDetail(enemy) {
  const variantImages = [
    { name: "Engineer", image: "https://static.wikitide.net/examinationwiki/a/aa/Engineer_Mutant.png" },
    { name: "HPCA", image: "https://static.wikitide.net/examinationwiki/0/08/HPCA_Mutant.png" },
    { name: "HPCA 2", image: "https://static.wikitide.net/examinationwiki/8/85/HPCA_2_Mutant.png" },
    { name: "HPCA 3", image: "https://static.wikitide.net/examinationwiki/c/cf/HPCA_3_Mutant.png" },
    { name: "RSU", image: "https://static.wikitide.net/examinationwiki/c/cf/RSU_Mutant.png" },
    { name: "RSU 2", image: "https://static.wikitide.net/examinationwiki/6/6a/RSU_2_Mutant.png" },
    { name: "MFD", image: "https://static.wikitide.net/examinationwiki/d/d9/MFD_Mutant.png" },
    { name: "MNPA", image: "https://static.wikitide.net/examinationwiki/4/44/MNPA_Mutant.png" },
  ];
  const animations = [
    { name: "Execution animation 1", file: "Mutant_Execution_1.mp4" },
    { name: "Execution animation 2", file: "Mutant_Execution_2.mp4" },
    { name: "Execution animation 3", file: "Mutant_Execution_3.mp4" },
  ];
  const archiveImages = [
    { name: "Old model", file: "Mutant.png" },
    { name: "Removed block ability", file: "Mutant_Blocking.png" },
  ];
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Mutant</h2>
          <p>“Grotesque, aren't they? Get used to it, as long as you're alive down there, it won't matter much. This virus likes to actively participate with radioactive rays.”</p>
          <p><strong>Mutant</strong> is a common type of <a href="https://examination.miraheze.org/wiki/Enemies" target="_blank" rel="noopener noreferrer">Enemy</a> in Examination. They have average speed and low damage, but a fast attack rate. They are dangerous in groups.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variations</h3>
        <div class="enemy-variant-grid">
          ${variantImages.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} Mutant image">
                <img src="${variant.image}" alt="${variant.name} Mutant" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn Location</th><td><a href="https://examination.miraheze.org/wiki/Reactor_4" target="_blank" rel="noopener noreferrer">Reactor 4</a></td></tr>
              <tr><th scope="row">Health points</th><td>330</td></tr>
              <tr><th scope="row">Regeneration</th><td>3.3 HP/s</td></tr>
              <tr><th scope="row">Walk speed</th><td>8</td></tr>
              <tr><th scope="row">Run speed</th><td>18</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Claws</td></tr>
              <tr><th scope="row">Damage</th><td>13</td></tr>
              <tr><th scope="row">Execution</th><td>&lt;28 HP</td></tr>
              <tr><th scope="row">Respawn time</th><td>5 minutes</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <h4>Spawn</h4>
        <p>Eight Mutants spawn in multiple areas throughout Reactor 4. Mutants take 5 minutes to respawn after death.</p>
        <h4>Movement</h4>
        <p>Mutants wander around the map at 8 studs/s until they spot a target. Once a target is in sight, they chase at 18 studs/s. If the target stays out of sight for more than 10 seconds, the Mutant returns to wandering.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <p>Mutants slash their target with their claws, dealing 13 damage per hit with a 0.9-second cooldown and medium attack range.</p>
        <p>A Mutant performs an execution if it hits a player with less than 28 HP.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Stagger Immunity:</strong> Mutants are not stunned by gunshots.</li>
          <li><strong>Taser Resistance:</strong> Stun from the <a href="https://examination.miraheze.org/wiki/TASC-10" target="_blank" rel="noopener noreferrer">TASC-10</a> lasts only 3.5 seconds, and the Mutant remains standing instead of falling.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Animation gallery</h3>
        <div class="animation-grid">
          ${animations.map((animation) => `
            <button class="animation-card" type="button" data-video-src="${mediaFileUrl(animation.file)}" aria-label="Play ${animation.name}">
              <span class="animation-play-icon" aria-hidden="true">▶</span>
              <span>${animation.name}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Archived gallery</h3>
        <div class="enemy-variant-grid">
          ${archiveImages.map((image) => {
            const source = mediaFileUrl(image.file);
            return `
              <figure class="enemy-variant">
                <button class="enemy-variant-image" type="button" data-image-src="${source}" aria-label="View ${image.name}">
                  <img src="${source}" alt="${image.name}" loading="lazy" />
                </button>
                <figcaption>${image.name}</figcaption>
              </figure>
            `;
          }).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Mutants are workers and engineers of the power plant who were trapped and infected with the <a href="https://examination.miraheze.org/wiki/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a> in <a href="https://examination.miraheze.org/wiki/Reactor_4" target="_blank" rel="noopener noreferrer">Reactor 4</a>. Radiation enhanced the effects of the pathogen, making them decently stronger than the normal strain.</p>
        <p>The radiation also significantly malformed them and stripped away their skin, leaving them as a fleshy mass with bones and claws.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>Mutants currently have more appearance variations than any other enemy in the game.</li>
          <li>In <a href="https://examination.miraheze.org/wiki/1.3.699" target="_blank" rel="noopener noreferrer">Patch 1.3699</a>, Mutants could block their head when shot. This ability was removed shortly afterward.</li>
        </ul>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderKamikazeDetail(enemy) {
  const variantImages = [
    { name: "HPCA", image: "https://static.wikitide.net/examinationwiki/f/fd/HPCA_Kamikaze.png" },
    { name: "RSU", image: "https://static.wikitide.net/examinationwiki/6/64/RSU_Kamikaze.png" },
    { name: "RSU 2", image: "https://static.wikitide.net/examinationwiki/c/c3/RSU_Kamikaze_2.png" },
    { name: "OZK", image: "https://static.wikitide.net/examinationwiki/a/a9/OZK_Kamikaze.png" },
  ];
  const galleryImages = [
    { name: "Idle OZK Kamikaze", file: "OZK_Kamikaze_Idle.png" },
    { name: "Idle MGF MP Kamikaze", file: "MP_Kamikaze_Idle.png" },
    { name: "Removed variant render", file: "MGF_Kamikaze.png" },
  ];
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Kamikaze</h2>
          <p>“That's only the tip of the iceberg, there's more than one. The minute that pin gets pulled... outcome? Guy go boom.”</p>
          <p><strong>Kamikazes</strong> are an uncommon but dangerous type of <a href="${examinationWiki}/Enemies" target="_blank" rel="noopener noreferrer">Enemy</a> in Examination. Although relatively easy to kill, they can sprint quickly and deal high damage with their grenade.</p>
          <p>The facility's close quarters make them a serious threat: they can catch an inattentive player off guard and rush in to detonate.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variants</h3>
        <div class="enemy-variant-grid">
          ${variantImages.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} Kamikaze image">
                <img src="${variant.image}" alt="${variant.name} Kamikaze" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn locations</th><td><a href="${examinationWiki}/Sector_1" target="_blank" rel="noopener noreferrer">Sector 1</a>, <a href="${examinationWiki}/Sector_2" target="_blank" rel="noopener noreferrer">Sector 2</a>, and <a href="${examinationWiki}/Sector_3" target="_blank" rel="noopener noreferrer">Sector 3</a></td></tr>
              <tr><th scope="row">Health</th><td>50 HP</td></tr>
              <tr><th scope="row">Regeneration</th><td>0.5 HP/s</td></tr>
              <tr><th scope="row">Walk speed</th><td>9</td></tr>
              <tr><th scope="row">Run speed</th><td>28 (36 when enraged)</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Grenade</td></tr>
              <tr><th scope="row">Damage</th><td>75 (99 when enraged)</td></tr>
              <tr><th scope="row">Respawn time</th><td>2 minutes 15 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <h4>Spawn</h4>
        <p>A total of 4 Kamikazes spawn on the map. Each variant has a specific spawn location, and a Kamikaze takes 2 minutes and 15 seconds to respawn after death.</p>
        <div class="enemy-table-wrap">
          <table class="enemy-stats spawn-table">
            <thead><tr><th scope="col">Variant</th><th scope="col">Spawn location</th></tr></thead>
            <tbody>
              <tr><td>HPCA</td><td><a href="${examinationWiki}/Sector_1" target="_blank" rel="noopener noreferrer">Sector 1</a>, near <a href="${examinationWiki}/Sector_2" target="_blank" rel="noopener noreferrer">Sector 2</a>'s emergency exit</td></tr>
              <tr><td>RSU</td><td><a href="${examinationWiki}/Sector_1" target="_blank" rel="noopener noreferrer">Sector 1</a>, near <a href="${examinationWiki}/Sector_2" target="_blank" rel="noopener noreferrer">Sector 2</a>'s emergency exit</td></tr>
              <tr><td>RSU 2</td><td><a href="${examinationWiki}/Sector_2" target="_blank" rel="noopener noreferrer">Sector 2</a> Logistics</td></tr>
              <tr><td>OZK</td><td><a href="${examinationWiki}/Sector_3" target="_blank" rel="noopener noreferrer">Sector 3</a>, in Subsector-1</td></tr>
            </tbody>
          </table>
        </div>
        <h4>Behavior</h4>
        <p>A Kamikaze wanders at 9 studs/s until it spots a target, then chases at 28 studs/s. If the target stays out of sight for more than 10 seconds, it returns to wandering.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <h4>Attack</h4>
        <p>When alerted and near a living entity, a Kamikaze primes its grenade and charges the closest entity. It explodes near its target, dealing 75 damage within a radius of about 5 studs. Once primed, the grenade still explodes even if the Kamikaze is killed.</p>
        <p>The attack can target enemies or allies, though it will usually damage only one target.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Stagger Immunity:</strong> Kamikazes are not stunned by gunshots.</li>
          <li><strong>Execution Immunity:</strong> They cannot be executed, except with <a href="${examinationWiki}/Controllable_Infection#Viral_fists" target="_blank" rel="noopener noreferrer">Viral Fists</a>.</li>
          <li><strong>Taser Resistance:</strong> Stun from the <a href="${examinationWiki}/TASC-10" target="_blank" rel="noopener noreferrer">TASC-10</a> lasts only 3.5 seconds, and the Kamikaze remains standing.</li>
          <li><strong>Dreadnought:</strong> Kamikazes open doors as they walk up to them.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Rage</h3>
        <p>Near a <a href="${examinationWiki}/Viral_Leader" target="_blank" rel="noopener noreferrer">Viral Leader</a>, a Kamikaze becomes enraged: its eyes turn red, its chase speed rises to 36 studs/s, and its grenade damage increases to 99.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        <p>Kamikaze idle — plays while idle.</p>
        <audio class="enemy-audio" controls loop preload="none" src="https://static.wikitide.net/examinationwiki/2/25/Kamikaze_Idle_V2.mp3">
          Your browser does not support audio playback.
        </audio>
        <p>Kamikaze scream — plays while charging.</p>
        <audio class="enemy-audio" controls preload="none" src="https://static.wikitide.net/examinationwiki/a/a5/Kamikaze_Scream.mp3">
          Your browser does not support audio playback.
        </audio>
      </section>

      <section class="enemy-info-section">
        <h3>Gallery</h3>
        <div class="enemy-variant-grid">
          ${galleryImages.map((image) => {
            const source = `${examinationWiki}/Special:FilePath/${encodeURIComponent(image.file)}`;
            const page = `${examinationWiki}/File:${encodeURIComponent(image.file).replaceAll("%20", "_")}`;
            return `
              <figure class="enemy-variant">
                <button class="enemy-variant-image" type="button" data-image-src="${source}" aria-label="View ${image.name}">
                  <img src="${source}" alt="${image.name}" loading="lazy" />
                </button>
                <figcaption><a href="${page}" target="_blank" rel="noopener noreferrer">${image.name}</a></figcaption>
              </figure>
            `;
          }).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Kamikazes are individuals infected with the <a href="${examinationWiki}/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a>, likely alongside heavy radiation exposure. Their faces have been melted away, leaving exposed flesh. Their ability to use grenades and interact with objects indicates that they have undergone the Dreadnought mutation.</p>
        <p>Under the pathogen's agonizing influence, they disregard self-preservation and may try to kill their targets with a suicide bombing. Unlike normal Dreadnoughts, they are notably fragile and have no survival instinct.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>A Kamikaze variant resembling the <a href="${examinationWiki}/Menlonian_Ground_Forces" target="_blank" rel="noopener noreferrer">Menlonian Ground Forces</a> military police was removed, likely because it did not fit the lore.</li>
          <li>Kamikazes had an execution animation in early development, but it was removed.</li>
        </ul>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function bindEnemyMedia() {
  detailViewport.querySelectorAll("[data-related-enemy-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const enemy = enemyCatalog
        .flatMap((section) => section.enemies.map((item) => ({
          ...item,
          category: section.label,
          id: getEnemyId(section, item),
        })))
        .find((item) => item.id === button.dataset.relatedEnemyId);
      if (!enemy) {
        console.error(`Unable to find related enemy data for ${button.dataset.relatedEnemyId}.`);
        return;
      }

      renderEnemyDetail(enemy);
    });
  });
  detailViewport.querySelectorAll("[data-video-src]").forEach((button) => {
    button.addEventListener("click", () => openMediaVideo(button.dataset.videoSrc, button));
  });
  detailViewport.querySelectorAll("[data-image-src]").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
      openMediaImage(button.dataset.imageSrc, image.alt, button);
    });
  });
}

function openMediaVideo(source, trigger) {
  activeMediaTrigger = trigger;
  window.clearTimeout(carouselTimer);
  mediaImage.hidden = true;
  mediaImage.removeAttribute("src");
  mediaPlayer.classList.remove("is-fading");
  mediaPlayer.hidden = false;
  mediaPlayer.controls = false;
  mediaPlayer.muted = false;
  mediaPlayer.volume = 1;
  mediaPlayer.src = source;
  mediaModal.hidden = false;
  mediaModal.focus();
  if (typeof mediaModal.requestFullscreen === "function") {
    mediaModal.requestFullscreen().catch((error) => {
      console.info("Browser fullscreen is unavailable; using the full-page media viewer.", error);
    });
  }
  const playback = mediaPlayer.play();
  if (playback) {
    playback.catch((error) => {
      if (error.name === "NotAllowedError") {
        console.info("Gallery playback with sound is waiting for browser permission.");
      } else {
        console.error("Unable to play the selected enemy animation.", error);
      }
    });
  }
}

function openMediaImage(source, alt, trigger) {
  activeMediaTrigger = trigger;
  window.clearTimeout(carouselTimer);
  mediaPlayer.pause();
  mediaPlayer.removeAttribute("src");
  mediaPlayer.load();
  mediaPlayer.hidden = true;
  mediaImage.alt = alt;
  mediaImage.src = source;
  mediaImage.hidden = false;
  mediaModal.hidden = false;
  mediaModal.focus();
}

function closeMediaViewer() {
  if (document.fullscreenElement === mediaModal) {
    document.exitFullscreen().catch((error) => {
      console.error("Unable to exit the media viewer's fullscreen mode.", error);
    });
  }
  mediaModal.hidden = true;
  mediaPlayer.pause();
  mediaPlayer.removeAttribute("src");
  mediaPlayer.load();
  mediaPlayer.hidden = true;
  mediaImage.hidden = true;
  mediaImage.removeAttribute("src");
  mediaImage.alt = "";
  activeMediaTrigger?.focus();
  activeMediaTrigger = null;
  scheduleNextRender();
}

detailScreen.addEventListener("animationend", (event) => {
  if (event.target === detailScreen) detailScreen.classList.remove("is-entering");
});

backButton.addEventListener("click", () => {
  if (currentEnemyId) {
    currentEnemyId = null;
    detailTitle.textContent = "Enemies";
    enemyWikiLink.hidden = false;
    backButton.textContent = "Back";
    renderEnemyCatalog();
    detailViewport.scrollTop = enemyCatalogScrollTop;
    detailTitle.focus();
    return;
  }
  transitionTo(categoryScreen);
});

mediaModal.addEventListener("click", (event) => {
  if (event.target === mediaModal) closeMediaViewer();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mediaModal.hidden) closeMediaViewer();
});
document.addEventListener("fullscreenchange", () => {
  if (mediaModal.hidden) return;
  if (document.fullscreenElement !== mediaModal) {
    closeMediaViewer();
  }
});

window.addEventListener("pointerdown", enableBackgroundMusic, { passive: true });
window.addEventListener("keydown", enableBackgroundMusic);
settingsMenuSummary.addEventListener("click", (event) => {
  event.preventDefault();
  if (settingsMenuIsAnimating) return;
  const isClosing = settingsMenu.open;
  settingsMenuIsAnimating = true;
  settingsPanelHasFinished = false;
  settingsGearHasFinished = false;

  if (settingsMenu.open) {
    const height = settingsControls.getBoundingClientRect().height;
    settingsControls.style.overflowY = "hidden";
    settingsControls.style.maxHeight = `${height}px`;
    settingsControls.style.opacity = "1";
    settingsControls.style.transform = "translateY(0)";
    void settingsControls.offsetHeight;
    window.requestAnimationFrame(() => {
      settingsMenu.classList.add("is-closing");
      settingsControls.style.maxHeight = "0px";
      settingsControls.style.opacity = "0";
      settingsControls.style.transform = "translateY(-24px)";
    });
  } else {
    settingsMenu.classList.remove("is-closing");
    settingsMenu.open = true;
    settingsControls.style.removeProperty("max-height");
    settingsControls.style.removeProperty("opacity");
    settingsControls.style.removeProperty("transform");
    settingsControls.style.removeProperty("overflow-y");
    const maxHeight = Math.min(settingsControls.scrollHeight, window.innerHeight * 0.58, 480);
    settingsControls.style.overflowY = "hidden";
    settingsControls.style.maxHeight = "0px";
    settingsControls.style.opacity = "0";
    settingsControls.style.transform = "translateY(-24px)";
    void settingsControls.offsetHeight;
    window.requestAnimationFrame(() => {
      settingsMenu.classList.add("is-opening");
      settingsControls.style.maxHeight = `${maxHeight}px`;
      settingsControls.style.opacity = "1";
      settingsControls.style.transform = "translateY(0)";
    });
  }

  settingsMenuTransitionTimer = window.setTimeout(
    () => finishSettingsMenuTransition(true),
    1000,
  );
});
settingsControls.addEventListener("transitionend", (event) => {
  if (event.target === settingsControls && event.propertyName === "max-height") {
    settingsPanelHasFinished = true;
    finishSettingsMenuTransition();
  }
});
settingsMenu.querySelector(".settings-gear").addEventListener("animationend", (event) => {
  if (!["settings-gear-spin", "settings-gear-spin-reverse"].includes(event.animationName)) return;
  settingsGearHasFinished = true;
  finishSettingsMenuTransition();
});
mediaPlayer.addEventListener("pause", () => {
  if (mediaModal.hidden || mediaPlayer.ended || mediaPlayer.readyState === 0) return;
  const playback = mediaPlayer.play();
  if (playback) {
    playback.catch((error) => {
      if (error.name === "NotAllowedError") {
        console.info("Gallery playback is waiting for browser permission.");
      } else {
        console.error("Unable to resume the selected enemy animation.", error);
      }
    });
  }
});

mediaPlayer.addEventListener("loadeddata", () => {
  window.requestAnimationFrame(() => mediaPlayer.classList.remove("is-fading"));
});
mediaPlayer.addEventListener("ended", () => {
  mediaPlayer.classList.add("is-fading");
});

function syncBackgroundMusicWithForegroundMedia() {
  if (hasActiveForegroundMedia()) {
    if (backgroundMusicPlayerReady) backgroundMusicPlayer.pauseVideo();
  } else {
    enableBackgroundMusic();
  }
}

document.addEventListener("play", syncBackgroundMusicWithForegroundMedia, true);
for (const eventName of ["pause", "ended", "emptied", "error"]) {
  document.addEventListener(
    eventName,
    () => queueMicrotask(syncBackgroundMusicWithForegroundMedia),
    true,
  );
}

showcase.addEventListener("pointermove", (event) => {
  const interactive = event.target.closest(
    ".category-card, .enemy-card, .animation-card, .begin-button, .settings-menu summary, .settings-field select, .wiki-link",
  );
  if (!interactive || !showcase.contains(interactive)) return;
  const bounds = interactive.getBoundingClientRect();
  interactive.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
  interactive.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
});

loadSavedSettings();
applyVisualSettings();
updateFrameScale();
createBackgroundMusicPlayer();
showNextRender();
