const examinationWiki = "https://examination.miraheze.org/wiki";

const games = {
  examination: {
    name: "EXAMINATION",
    description: "Randomized executions, QTEs, and cutscenes from the wiki galleries.",
    subtitle: "Gallery clips play automatically in a randomized, non-repeating rotation.",
    category: "EXECUTIONS · QTE · CUTSCENES",
    feed: "EXAMINATION · WIKI GALLERY",
    media: "gallery",
    roblox: "https://www.roblox.com/search/experiences?keyword=Examination",
    wiki: `${examinationWiki}/Main_Page`,
    videos: [
      { filename: "Gilbert's_Execution.mp4", title: "Gilbert Execution" },
      { filename: "Chimera_Execution.mp4", title: "Chimera Execution" },
      { filename: "Chimera_P1_TP.mp4", title: "Chimera Phase 1" },
      { filename: "Chimera_P2_TP.mp4", title: "Chimera Phase 2" },
      { filename: "Chimera_Alt_P2_Execution.mp4", title: "Chimera Alternate Phase 2 Execution" },
      { filename: "Sinitzyn_P2_Execution.mp4", title: "Sinitzyn Phase 2 Execution" },
      { filename: "Sinitzyn_QTE_Success.mp4", title: "Sinitzyn QTE Success" },
      { filename: "Sinitzyn_QTE_Fail.mp4", title: "Sinitzyn QTE Fail" },
      { filename: "Cerberus_Intro_Cutscene.mp4", title: "Cerberus BTR Intro Cutscene" },
      { filename: "CI_Turn_1.mp4", title: "Controllable Infection Turn 1" },
      { filename: "CI_Turn_2.mp4", title: "Controllable Infection Turn 2" },
      { filename: "CI_Execution_1.mp4", title: "Controllable Infection Execution 1" },
      { filename: "CI_Execution_2.mp4", title: "Controllable Infection Execution 2" },
      { filename: "CI_Execution_3.mp4", title: "Controllable Infection Execution 3" },
      { filename: "CI_Counter_1.mp4", title: "Controllable Infection Counter" },
      { filename: "CI_QTE_Death.mp4", title: "Controllable Infection QTE Death" },
      { filename: "Taunt_animation.mp4", title: "Taunt Animation" },
    ],
    artworks: [
      {
        filename: "Chimera_artwork.png",
        title: "Chimera Artwork",
        url: "https://static.wikitide.net/examinationwiki/thumb/0/06/Chimera_artwork.png/240px-Chimera_artwork.png",
      },
      { filename: "Official_render_of_Gilbert.png", title: "Official Render of Gilbert" },
      { filename: "Gilbert_redesign_(cancelled).png", title: "Gilbert Redesign (Cancelled)" },
    ],
  },
  bees: {
    name: "BEE SWARM SIMULATOR",
    description: "Take a tour of the fields, hives, and world.",
    subtitle: "A colorful tour through the fields and hive.",
    category: "MAP TOURS · FIELD SHOWCASES",
    feed: "BEE SWARM SIMULATOR · COMMUNITY GAMEPLAY",
    media: "youtube",
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
    media: "youtube",
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
const mp4Player = document.querySelector("#mp4-player");
const artworkFrame = document.querySelector("#artwork-frame");
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
const mediaStatusText = document.querySelector("#media-status-text");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const fadeDuration = 350;

let activeGame = "examination";
let clipQueue = [];
let artworkQueue = [];
let currentClip;
let previousClipIndex = -1;
let previousArtworkIndex = -1;
let clipsSinceArtwork = 0;
let artworkTimer;
let transitionTimer;

function filePath(filename) {
  const encodedFilename = encodeURIComponent(filename).replaceAll("'", "%27");
  return `${examinationWiki}/Special:FilePath/${encodedFilename}`;
}

function filePage(filename) {
  return `${examinationWiki}/File:${filename}`;
}

function buildYoutubeUrl(videos) {
  const params = new URLSearchParams({
    autoplay: prefersReducedMotion.matches ? "0" : "1",
    mute: "1",
    controls: "0",
    loop: "1",
    playlist: videos.map((video) => video.id).join(","),
    playsinline: "1",
    rel: "0",
    modestbranding: "1",
  });
  return `https://www.youtube-nocookie.com/embed/${videos[0].id}?${params}`;
}

function renderSources(game) {
  sourceList.replaceChildren();
  const sources = game.media === "gallery"
    ? [...game.videos, ...game.artworks]
    : game.videos;

  sources.forEach((source) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = source.id
      ? `https://www.youtube.com/watch?v=${source.id}`
      : filePage(source.filename);
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = source.creator
      ? `${source.title} — ${source.creator}`
      : `${source.title} — Examination Wiki`;
    item.append(link);
    sourceList.append(item);
  });
}

function setGalleryStatus(message) {
  mediaStatusText.textContent = message;
}

function shuffledIndices(length, previousIndex) {
  const queue = Array.from({ length }, (_, index) => index);
  for (let index = queue.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [queue[index], queue[swapIndex]] = [queue[swapIndex], queue[index]];
  }
  if (queue.length > 1 && queue.at(-1) === previousIndex) {
    [queue[0], queue[queue.length - 1]] = [queue.at(-1), queue[0]];
  }
  return queue;
}

function playNextClip() {
  if (activeGame !== "examination") return;
  if (clipQueue.length === 0) {
    clipQueue = shuffledIndices(games.examination.videos.length, previousClipIndex);
  }

  previousClipIndex = clipQueue.pop();
  currentClip = games.examination.videos[previousClipIndex];
  const clip = currentClip;
  artworkFrame.hidden = true;
  mp4Player.hidden = false;
  mp4Player.classList.add("media-faded");
  mp4Player.autoplay = !prefersReducedMotion.matches;
  mp4Player.controls = prefersReducedMotion.matches;
  mp4Player.title = clip.title;
  mp4Player.src = filePath(clip.filename);
  featuredSource.href = filePage(clip.filename);
  captionCategory.textContent = games.examination.category;
  feedLabel.textContent = games.examination.feed;
  setGalleryStatus(prefersReducedMotion.matches ? "REDUCED MOTION · USE VIDEO CONTROLS" : "RANDOM GALLERY CLIP · AUTOPLAY MUTED");
  mp4Player.load();

  if (prefersReducedMotion.matches) return;

  const playRequest = mp4Player.play();
  if (playRequest) {
    playRequest.catch((error) => {
      if (activeGame !== "examination" || currentClip !== clip) return;
      if (error.name === "NotAllowedError") {
        mp4Player.controls = true;
        setGalleryStatus("AUTOPLAY BLOCKED · USE VIDEO CONTROLS");
      } else {
        setGalleryStatus(`VIDEO PLAYBACK FAILED · ${clip.filename}`);
        console.error(`Unable to play ${clip.filename}.`, error);
      }
    });
  }
}

function showArtwork() {
  if (activeGame !== "examination") return;
  if (artworkQueue.length === 0) {
    artworkQueue = shuffledIndices(games.examination.artworks.length, previousArtworkIndex);
  }
  const artworkIndex = artworkQueue.pop();
  const artwork = games.examination.artworks[artworkIndex];
  previousArtworkIndex = artworkIndex;
  mp4Player.pause();
  mp4Player.hidden = true;
  artworkFrame.hidden = false;
  artworkFrame.classList.add("media-faded");
  artworkFrame.src = artwork.url || filePath(artwork.filename);
  artworkFrame.alt = `${artwork.title} from the Examination Wiki`;
  artworkFrame.title = artwork.title;
  featuredSource.href = filePage(artwork.filename);
  captionCategory.textContent = `${artwork.title.toUpperCase()} · QUICK SHOWCASE`;
  feedLabel.textContent = "EXAMINATION · WIKI ARTWORK";
  setGalleryStatus("ARTWORK INTERLUDE · 2 SECONDS");

  artworkTimer = window.setTimeout(() => {
    artworkFrame.classList.add("media-faded");
    artworkTimer = window.setTimeout(() => {
      artworkFrame.hidden = true;
      if (artworkQueue.length > 0) {
        showArtwork();
      } else {
        clipsSinceArtwork = 0;
        playNextClip();
      }
    }, fadeDuration);
  }, 2000);
}

function buildGalleryCycle() {
  if (activeGame !== "examination") return;
  clipsSinceArtwork += 1;
  if (clipsSinceArtwork >= 4) showArtwork();
  else playNextClip();
}

function selectGame(gameId) {
  const game = games[gameId];
  if (!game) return;

  activeGame = gameId;
  window.clearTimeout(artworkTimer);
  window.clearTimeout(transitionTimer);
  mp4Player.pause();
  mp4Player.hidden = true;
  artworkFrame.hidden = true;
  videoFrame.hidden = true;
  videoFrame.classList.add("media-faded");
  videoFrame.src = "about:blank";
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
  currentIndex.textContent = String(Object.keys(games).indexOf(gameId) + 1).padStart(2, "0");
  renderSources(game);

  if (game.media === "gallery") {
    clipQueue = [];
    artworkQueue = [];
    previousClipIndex = -1;
    previousArtworkIndex = -1;
    clipsSinceArtwork = 0;
    playNextClip();
    return;
  }

  featuredSource.href = `https://www.youtube.com/watch?v=${game.videos[0].id}`;
  videoFrame.title = `${game.name} video showcase`;
  videoFrame.classList.add("media-faded");
  videoFrame.src = buildYoutubeUrl(game.videos);
  videoFrame.hidden = false;
  setGalleryStatus(prefersReducedMotion.matches ? "REDUCED MOTION · AUTOPLAY PAUSED" : "AUTO-PLAYING · MUTED");
}

mp4Player.addEventListener("loadeddata", () => {
  if (activeGame === "examination") {
    window.requestAnimationFrame(() => mp4Player.classList.remove("media-faded"));
  }
});

mp4Player.addEventListener("timeupdate", () => {
  if (activeGame === "examination" && Number.isFinite(mp4Player.duration)) {
    const timeRemaining = mp4Player.duration - mp4Player.currentTime;
    if (timeRemaining > 0 && timeRemaining <= fadeDuration / 1000) {
      mp4Player.classList.add("media-faded");
    }
  }
});

mp4Player.addEventListener("ended", () => {
  if (activeGame !== "examination") return;
  const needsFade = !mp4Player.classList.contains("media-faded");
  mp4Player.classList.add("media-faded");
  transitionTimer = window.setTimeout(buildGalleryCycle, needsFade ? fadeDuration : 0);
});

mp4Player.addEventListener("error", () => {
  if (activeGame !== "examination" || !currentClip) return;
  setGalleryStatus(`CLIP UNAVAILABLE · ${currentClip.filename}`);
  console.error(`Unable to load Examination gallery clip ${currentClip.filename}.`, mp4Player.error);
  transitionTimer = window.setTimeout(playNextClip, 2000);
});

artworkFrame.addEventListener("error", () => {
  if (activeGame === "examination") setGalleryStatus("ARTWORK UNAVAILABLE · CONTINUING CLIPS");
});

artworkFrame.addEventListener("load", () => {
  if (!artworkFrame.hidden && activeGame === "examination") {
    window.requestAnimationFrame(() => artworkFrame.classList.remove("media-faded"));
  }
});

videoFrame.addEventListener("load", () => {
  if (!videoFrame.hidden) window.requestAnimationFrame(() => videoFrame.classList.remove("media-faded"));
});

gameButtons.forEach((button) => {
  button.addEventListener("click", () => selectGame(button.dataset.game));
});

prefersReducedMotion.addEventListener("change", () => selectGame(activeGame));
selectGame(activeGame);
