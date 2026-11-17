const games = {
  examination: {
    name: "EXAMINATION",
    description: "Executions, saves, and quick-time events.",
    subtitle: "A closer look at the moments that make it tense.",
    category: "EXECUTIONS · QTE MOMENTS",
    feed: "EXAMINATION · COMMUNITY GAMEPLAY",
    roblox: "https://www.roblox.com/search/experiences?keyword=Examination",
    wiki: "https://examination.miraheze.org/wiki/Main_Page",
    videos: [
      { id: "I2TCZT6SeoY", title: "All Base Game + PS+ Executions (Updated)", creator: "ShadowFeddy69" },
      { id: "PptVk9qyb5Q", title: "All of the New Executions", creator: "Scott" },
      { id: "qHmCyjaCTsE", title: "Leader vs SIN QTE Successful", creator: "Burger Berk" },
      { id: "AQrZNLgAmoI", title: "Executions, Saves, etc.", creator: "Plutonium Heart · Assailant" },
      { id: "m4_M4IjqLPg", title: "Examination Executions", creator: "TheFenceMan" },
    ],
  },
  bees: {
    name: "BEE SWARM SIMULATOR",
    description: "Take a tour of the fields, hives, and world.",
    subtitle: "A colorful tour through the fields and hive.",
    category: "MAP TOURS · FIELD SHOWCASES",
    feed: "BEE SWARM SIMULATOR · COMMUNITY GAMEPLAY",
    roblox: "https://www.roblox.com/search/experiences?keyword=Bee%20Swarm%20Simulator",
    wiki: "https://bee-swarm-simulator.fandom.com/wiki/Bee_Swarm_Simulator_Wiki",
    videos: [
      { id: "P-sQtcUYBG0", title: "Hive + Map Tour", creator: "Monbie" },
      { id: "EaoRJsP6Lv4", title: "Ranking Every Field in Bee Swarm Simulator", creator: "Yarikz" },
      { id: "5NkgtQ8lQng", title: "Ranking Every Field in Bee Swarm Simulator", creator: "Leizar" },
      { id: "FK6eZkd6WYk", title: "Level 20 Blue Hive Boosting", creator: "RextaV2V2" },
    ],
  },
  brm5: {
    name: "BRM5",
    description: "Blackhawk Rescue Mission 5 trailers and showcases.",
    subtitle: "Trailers and cinematic community footage from the field.",
    category: "TRAILERS · CINEMATIC SHOWCASES",
    feed: "BRM5 · TRAILERS & COMMUNITY GAMEPLAY",
    roblox: "https://www.roblox.com/search/experiences?keyword=Blackhawk%20Rescue%20Mission%205",
    wiki: "https://brm5.fandom.com/wiki/Blackhawk_Rescue_Mission_5_Wiki",
    videos: [
      { id: "-SaFy_lj1Bs", title: "Blackhawk Rescue Mission 5 Operation Reveal", creator: "GameLoaded Entertainment" },
      { id: "d_fYx_JGhOE", title: "Blackhawk Rescue Mission 5 Operation Phoenix Reveal", creator: "GameLoaded Entertainment" },
      { id: "S_WY8JlJCy8", title: "Openworld Trailer", creator: "Redimrr" },
      { id: "RYg86iR3m50", title: "This is BRM5 · Cinematic Showcase", creator: "JayThyKay" },
    ],
  },
};

const gameButtons = [...document.querySelectorAll(".game-option")];
const videoFrame = document.querySelector("#video-frame");
const launchLink = document.querySelector("#launch-link");
const wikiLink = document.querySelector("#wiki-link");
const selectedTitle = document.querySelector("#selected-title");
const selectedDescription = document.querySelector("#selected-description");
const showcaseTitle = document.querySelector("#showcase-title");
const showcaseSubtitle = document.querySelector("#showcase-subtitle");
const captionCategory = document.querySelector("#caption-category");
const feedLabel = document.querySelector("#feed-label");
const currentIndex = document.querySelector("#current-index");
const sourceList = document.querySelector("#source-list");
const featuredSource = document.querySelector("#featured-source");
const mediaToggle = document.querySelector("#media-toggle");
const toggleLabel = document.querySelector("#toggle-label");
const toggleIcon = document.querySelector(".toggle-icon");
const playbackNote = document.querySelector("#playback-note");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let activeGame = "examination";
let isPaused = prefersReducedMotion.matches;

function buildEmbedUrl(videos) {
  const params = new URLSearchParams({
    autoplay: prefersReducedMotion.matches || isPaused ? "0" : "1",
    mute: "1",
    controls: "0",
    loop: "1",
    playlist: videos.map((video) => video.id).join(","),
    playsinline: "1",
    rel: "0",
    modestbranding: "1",
    enablejsapi: "1",
  });
  return `https://www.youtube-nocookie.com/embed/${videos[0].id}?${params}`;
}

function renderSources(videos) {
  sourceList.replaceChildren();
  videos.forEach((video) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = `https://www.youtube.com/watch?v=${video.id}`;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = `${video.title} — ${video.creator}`;
    item.append(link);
    sourceList.append(item);
  });
}

function selectGame(gameId) {
  const game = games[gameId];
  if (!game) return;

  activeGame = gameId;
  isPaused = prefersReducedMotion.matches;
  gameButtons.forEach((button) => {
    const active = button.dataset.game === gameId;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  selectedTitle.textContent = game.name;
  selectedDescription.textContent = game.description;
  showcaseTitle.textContent = game.name;
  showcaseSubtitle.textContent = game.subtitle;
  captionCategory.textContent = game.category;
  feedLabel.textContent = game.feed;
  launchLink.href = game.roblox;
  wikiLink.href = game.wiki;
  featuredSource.href = `https://www.youtube.com/watch?v=${game.videos[0].id}`;
  renderSources(game.videos);
  videoFrame.title = `${game.name} video showcase`;
  videoFrame.src = buildEmbedUrl(game.videos);
  currentIndex.textContent = String(Object.keys(games).indexOf(gameId) + 1).padStart(2, "0");
  updateMediaToggle();
  playbackNote.textContent = prefersReducedMotion.matches
    ? "AUTOPLAY PAUSED · REDUCED MOTION"
    : "AMBIENT VIDEO · AUTOPLAY MUTED";
}

function updateMediaToggle() {
  mediaToggle.setAttribute("aria-pressed", String(isPaused));
  toggleLabel.textContent = isPaused ? "PLAY VIDEO" : "PAUSE VIDEO";
  toggleIcon.textContent = isPaused ? "▶" : "Ⅱ";
}

gameButtons.forEach((button) => {
  button.addEventListener("click", () => selectGame(button.dataset.game));
});

mediaToggle.addEventListener("click", () => {
  isPaused = !isPaused;
  const command = isPaused ? "pauseVideo" : "playVideo";
  videoFrame.contentWindow.postMessage(
    JSON.stringify({ event: "command", func: command, args: [] }),
    "https://www.youtube-nocookie.com",
  );
  updateMediaToggle();
});

prefersReducedMotion.addEventListener("change", () => selectGame(activeGame));
selectGame(activeGame);
