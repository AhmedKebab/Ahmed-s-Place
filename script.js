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
const backgroundRenders = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13ifj3dIwYhCEH4TFvQAavkFTnR1qtFzGqR5KDQYEx9igby3FxzOo4282&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ83AI-i7DANnInrVgQ0UnlekdMQDARAXdtRkYF03T7k7oHwK8R2HoEP9E&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpo3Lv0V7SStcA2feY8ih_zioGnewdMPKtcAgC-tZ6t-5cgYdzLUyeCEg&s=10",
  "https://preview.redd.it/gilbert-render-v0-c7ilwal1987g1.png?width=640&crop=smart&auto=webp&s=5753367a13742fd65bb50621e8b8ad3b64172b11",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1YmkNjBAdrLvvYfpckLPDLKo6A2a3e92UxP_FMRKtALnnlbQ6hypsvM&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrVb7aFuo62goXpilDb5IxI75ku2j2vhMBDDMZwL5e9NxJhmUXb_V2iGeI&s=10",
  "https://preview.redd.it/chimera-reworked-version-of-my-old-render-v0-z6u9u4yd3lzh1.png?auto=webp&s=c673de37767c4a4769c158379a685dcd77ef67e1",
  "https://tr.rbxcdn.com/180DAY-3f77f4bb9bb743c1f40a757c66d6ad76/768/432/Image/Webp/noFilter",
  "https://i.redd.it/x43zzt42csmh1.png",
  "https://i.ytimg.com/vi/DHwwzwDy4vk/sddefault.jpg",
  "https://i.namu.wiki/i/foIBbv2917W_JkD8MeqWV-AEw1AtoWBfzld6wM6WxnL12NjB-e4dD5drnm8YnZiH1E0fdpR_EljsN10mS6JCMQ.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTurQVaWA2MCkI069hvtpLb4GHuw0pBMGaCuVpwvyQnUK34uwHU8fTxky4&s=10",
  "https://images.hiwaifu.com/uploads/Api/robot_avatar/202609/f2da9b18fd378d1b7af8ff868ef54659.webp?image_process=resize,w_640",
  "https://i.redd.it/ywu95sh5k1sg1.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc_jGhVRQfeWP3cgqwVIzwnybLjJFPETDHNan89CIBqycBesZY-o9kWrmv&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBE--L8q9AhHh5d8jtTms4DHzKSjVXBw8zm_R-uKH6DQ-52sUoyMHrGpU&s=10",
  "https://i.redd.it/qgtmbsh5k1sg1.png",
  "https://i.redd.it/dof7oth5k1sg1.png",
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
  ["Lurker_Save.mp4", "6e"],
  ["Lurker_Maul.mp4", "3d"],
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
const introScreen = document.querySelector("#intro-screen");
const categoryScreen = document.querySelector("#category-screen");
const detailScreen = document.querySelector("#detail-screen");
const detailTitle = document.querySelector("#detail-title");
const detailViewport = document.querySelector("#detail-viewport");
const enemyWikiLink = document.querySelector("#enemy-wiki-link");
const themeSetting = document.querySelector("#theme-setting");
const qualitySetting = document.querySelector("#quality-setting");
const settingsStatus = document.querySelector("#settings-status");
const mediaModal = document.querySelector("#media-modal");
const mediaPlayer = document.querySelector("#media-player");
const mediaClose = document.querySelector("#media-close");
const reconstructEffect = document.querySelector("#reconstruct-effect");
const beginButton = document.querySelector("#begin-button");
const backButton = document.querySelector("#back-button");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const imageSceneDuration = 22000;
const settingsVersion = 2;

let renderQueue = [];
let previousRenderIndex = -1;
const recentRenderLimit = 7;
const recentRenderIndices = [];
let carouselTimer;
let activeScreen = introScreen;
let pendingScreen = null;
let isTransitioning = false;
let currentEnemyId = null;
let enemyCatalogScrollTop = 0;
let activeMediaTrigger = null;
let activeBackgroundImage = null;
const settingsStorageKey = "examination-site-settings";

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

function shuffledRenderIndices() {
  const queue = backgroundRenders.map((_, index) => index);
  for (let index = queue.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [queue[index], queue[swapIndex]] = [queue[swapIndex], queue[index]];
  }
  return queue;
}

function takeNextRenderIndex() {
  if (backgroundRenders.length <= recentRenderLimit) {
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
  recentRenderIndices.push(previousRenderIndex);
  if (recentRenderIndices.length > recentRenderLimit) recentRenderIndices.shift();

  const nextImage = activeBackgroundImage === backgroundImages[0]
    ? backgroundImages[1]
    : backgroundImages[0];
  const source = backgroundRenders[previousRenderIndex];
  nextImage.onload = () => {
    const aspectRatio = nextImage.naturalWidth / nextImage.naturalHeight;
    const isSmallRender = aspectRatio < 1.45;
    nextImage.classList.toggle("is-side-render", isSmallRender);
    nextImage.classList.remove("is-visible", "is-animating");
    void nextImage.offsetWidth;
    nextImage.classList.add("is-visible", "is-animating");

    activeBackgroundImage?.classList.remove("is-visible", "is-animating");
    activeBackgroundImage = nextImage;
    if (mediaModal.hidden) {
      carouselTimer = window.setTimeout(showNextRender, imageSceneDuration);
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

themeSetting.addEventListener("change", () => {
  applyVisualSettings();
  saveSettings();
});
qualitySetting.addEventListener("change", () => {
  applyVisualSettings();
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
      currentEnemyId = card.dataset.enemyId;
      const enemy = enemyCatalog
        .flatMap((section) => section.enemies.map((item) => ({
          ...item,
          category: section.label,
          id: getEnemyId(section, item),
        })))
        .find((item) => item.id === currentEnemyId);
      if (!enemy) {
        console.error(`Unable to find enemy data for ${currentEnemyId}.`);
        return;
      }

      detailTitle.textContent = enemy.name;
      enemyWikiLink.hidden = true;
      backButton.textContent = "Back to Enemies";
      if (currentEnemyId === "regulars-lurker") {
        renderLurkerDetail(enemy);
      } else {
        renderEnemyPlaceholder(enemy);
      }
      detailViewport.scrollTop = 0;
      detailTitle.focus();
    });
  });
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
        <div class="lurker-variant-grid">
          ${variantImages.map((variant) => `
            <figure class="lurker-variant">
              <img src="${variant.image}" alt="${variant.name} Lurker" loading="lazy" />
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
        <h3>Attacks</h3>
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

  detailViewport.querySelectorAll("[data-video-src]").forEach((button) => {
    button.addEventListener("click", () => openMediaVideo(button.dataset.videoSrc, button));
  });
}

function openMediaVideo(source, trigger) {
  activeMediaTrigger = trigger;
  window.clearTimeout(carouselTimer);
  mediaPlayer.classList.remove("is-fading");
  mediaPlayer.controls = false;
  mediaPlayer.src = source;
  mediaModal.hidden = false;
  mediaClose.focus();
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

function closeMediaVideo() {
  mediaModal.hidden = true;
  mediaPlayer.pause();
  mediaPlayer.removeAttribute("src");
  mediaPlayer.load();
  activeMediaTrigger?.focus();
  activeMediaTrigger = null;
  carouselTimer = window.setTimeout(showNextRender, imageSceneDuration);
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

mediaClose.addEventListener("click", closeMediaVideo);
mediaModal.addEventListener("click", (event) => {
  if (event.target !== mediaModal) return;
  const bounds = mediaPlayer.getBoundingClientRect();
  const clickedVideo =
    event.clientX >= bounds.left &&
    event.clientX <= bounds.right &&
    event.clientY >= bounds.top &&
    event.clientY <= bounds.bottom;
  if (!clickedVideo) closeMediaVideo();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mediaModal.hidden) closeMediaVideo();
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

showcase.addEventListener("pointermove", (event) => {
  const interactive = event.target.closest(
    ".category-card, .enemy-card, .animation-card, .begin-button, .media-close, .settings-menu summary, .settings-field select, .wiki-link",
  );
  if (!interactive || !showcase.contains(interactive)) return;
  const bounds = interactive.getBoundingClientRect();
  interactive.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
  interactive.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
});

loadSavedSettings();
applyVisualSettings();
showNextRender();
