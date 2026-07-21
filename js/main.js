// ===== Edit these arrays to update site content — no HTML editing required =====

// type: "stream"       (links out to Apple/Spotify/Bandcamp/Amazon)
//       "youtube"      (links out to a YouTube video)
//       "local"        (plays directly from a single mp3 you add to the audio/ folder — see audio/README.md)
//       "local-album"  (a full tracklist of local mp3s, playable in-page — see audio/README.md)
// category: powers the filter dropdown
const releases = [
  { title: "the polyester tapes vol. 3", type: "stream", url: "https://open.spotify.com/album/72BdaL7arLVaDp9waP8WBz?si=oZ1Ge9h5RimHojMGE1-TgA", category: "Instrumental Albums", cover: "images/albums/polyester-vol3.png" },
  { title: "the polyester tapes vol. 2", type: "stream", url: "https://open.spotify.com/album/3qOuRPDtyz5CfxWj2d8y84?si=lZYpPgMARuyUI6wJGzUjlg", category: "Instrumental Albums", cover: "images/albums/polyester-vol2.jpg" },
  { title: "ESPN — Why Not Us? UMES Volleyball", type: "local", file: "audio/espn-why-not-us.mp3", category: "Licensed Music", cover: "images/albums/espn-why-not-us.png" },
  { title: "Celebration EP (15 Year Anniversary Album)", type: "stream", url: "https://open.spotify.com/album/4G2xgOdRsU1O6pmx5JSrmg?si=Qzpva3RTQSKUxBjb9hmU4A", category: "Albums", cover: "images/albums/celebration-15-year.png" },
  { title: "the polyester tapes vol. 1", type: "stream", url: "https://open.spotify.com/album/6FZ5aOK969CQntlzmWbyR4?si=-Rhs0OvPSkS_o36o1Krd6Q", category: "Instrumental Albums", cover: "images/albums/polyester-vol1.jpg" },
  { title: "5450", type: "stream", url: "https://open.spotify.com/album/3MM6h797SOiJc7cI9E1YYC?si=rkWsFj2JR8qRYZJhudg0-w", category: "Instrumental Albums", cover: "images/albums/5450.jpg" },
  { title: "Green Tape (Acoustic)", type: "stream", url: "https://open.spotify.com/album/6NAsId3XvjW4aGwkEaCQ1n?si=KAhwU6qCQpudDpyxI68DSw", category: "Albums", cover: "images/albums/green-tape-acoustic.jpeg" },
  { title: "Green Tape (Live)", type: "stream", url: "https://open.spotify.com/album/0z84cas3oQYUchuCmJtZ0Y?si=K2EayPL1Tj69kvidvUubhw", category: "Albums", cover: "images/albums/green-tape-live.jpg" },
  { title: "The Green Tape (Deluxe)", type: "stream", url: "https://open.spotify.com/album/5376IC5g2w3mJc01ZO2K4l?si=UgAmg0OtRuShQMJQsq9a6A", category: "Albums", cover: "images/albums/green-tape-deluxe.jpg" },
  { title: "The Green Tape", type: "stream", url: "https://open.spotify.com/album/7EiLau233RW8alH97BGQME?si=1MPr6HxPTCmObQWt7t2nAA", category: "Albums", cover: "images/albums/the-green-tape.jpg" },
  { title: "10pmInPhuket", type: "stream", url: "https://open.spotify.com/album/7qjp7kccioVMZbUj30oTv9?si=-sZQ6mC6R3mfxTGdvqxneQ", category: "Singles", cover: "images/albums/10pminphuket.png" },
  { title: "Chances (feat. Lakeith Rashad)", type: "stream", url: "https://open.spotify.com/album/0tFDGVE3DxuCVvbOFXcWfU?si=EXjlPAIsRiucF7rjkPIiPQ", category: "Singles", cover: "images/albums/chances.png" },
  { title: "Pursuit Of It All (feat. DoBoy)", type: "stream", url: "https://open.spotify.com/album/4sYNCd1rIp0jaRT9bOyrUW?si=E4zNM8FgQtOlKD2JRY1mZw", category: "Singles", cover: "images/albums/pursuit-of-it-all.png" },
  { title: "Win (Freestyle)", type: "stream", url: "https://open.spotify.com/album/7MNzjVK4ObmsMAGufoHjIi?si=TNpqiaJGQe2UKqW_S3c9kA", category: "Singles", cover: "images/albums/win-freestyle.jpg" },
  { title: "Still Fresh", type: "stream", url: "https://open.spotify.com/album/5xjEkkCnFL6xXwUmKzocFr?si=JzM7fPy7Qx642Plwp1DUQA", category: "Singles", cover: "images/albums/still-fresh.jpg" },
  { title: "Vibe (Remix)", type: "stream", url: "https://open.spotify.com/album/0adPpcGkV2WzY4d8FZOz0R?si=nUzk_hLGSt-yS9Vtk3NF0w", category: "Singles", cover: "images/albums/vibe-remix.png" },
  { title: "Concrete Rose", type: "stream", url: "https://open.spotify.com/album/0MIZAgaggu7Gry3KUqHSi2?si=WByQ6tYxQ2OxKxoW-_6t4g", category: "Singles", cover: "images/albums/concrete-rose.jpg" },
  { title: "Restless", type: "stream", url: "https://open.spotify.com/album/27bcqCIjGSpgGMIhWTEUfF?si=pfCTLkEbT9uxW_ejrcn7BQ", category: "Singles", cover: "images/albums/restless.jpg" },
  { title: "Nostalgia", type: "stream", url: "https://open.spotify.com/album/4nHTNSLiebm87imB8ncCQw?si=wauqDj15RyKBOTmu0W254A", category: "Singles", cover: "images/albums/nostalgia.jpg" },
  { title: "Shooters (feat. Fedarro)", type: "stream", url: "https://open.spotify.com/album/2QjwY8Sod1YUj2p4gwdxAP?si=zWTprE4PRAuNxS1ioKgUdw", category: "Singles", cover: "images/albums/shooters.jpg" },
  { title: "Move Aside", type: "stream", url: "https://open.spotify.com/album/10nb8hpy0VtBoTQ3HnruL4?si=9VbUBv1jRnijpGXm4tszIg", category: "Singles", cover: "images/albums/move-aside.jpg" },
  { title: "Take Off", type: "stream", url: "https://open.spotify.com/album/00hUByCRIHDrbwhMocydTy?si=tbzBLFomSsiCJjNpHOeI6A", category: "Singles", cover: "images/albums/take-off.jpg" },
  { title: "MY Team Vs Everybody", type: "stream", url: "https://open.spotify.com/album/3kmZNTddMSwuY8bDhD72j1?si=p1uo5ZyBS66VwEsM4hB01A", category: "Singles", cover: "images/albums/my-team-vs-everybody.jpg" },
  { title: "Fresh as Can Be (feat. Kace the Producer)", type: "stream", url: "https://open.spotify.com/album/4McxXsBZadTUYwUxdAMcjl?si=ECsnFdG2Q-aosVCSrjkCuQ", category: "Singles", cover: "images/albums/fresh-as-can-be.png" },
  { title: "Fresh", type: "stream", url: "https://open.spotify.com/album/17kjUei21JN5YOKM79aHhU?si=P-aZHfy-QLmnUafwF7dfpQ", category: "Singles", cover: "images/albums/fresh.jpg" },
  { title: "the LOVE album", type: "stream", url: "https://open.spotify.com/album/2XEDbd8pWaJy54B8yKFYjk?si=rYLJdRbqQxe7r1nDi_O7HA", category: "Albums", cover: "images/albums/the-love-album.jpg" },
  { title: "Raised To Fail, Born To Succeed", type: "stream", url: "https://open.spotify.com/album/3PPAmetjHrLAHVpmi1V3kV?si=kmsx2pH2RdOFZ66gHE3qaw", category: "Albums", cover: "images/albums/raised-to-fail.jpg" },
  { title: "I'm In It To Win It EP", type: "stream", url: "https://open.spotify.com/album/15dX0aQIQrC8a18xg6Nw5n?si=Epd-K17sRlWa5ROLEZrV-g", category: "Albums", cover: "images/albums/im-in-it-to-win-it.jpg" },
  { title: "Celebration EP", type: "stream", url: "https://open.spotify.com/album/3gBpuXsV2emNMYFwNOJy0p?si=db8QYHb3QoOUIPAgipMYLg", category: "Albums", cover: "images/albums/celebration-ep.jpg" },
  { title: "Legion Of Doom vs Triune", type: "local-album", category: "Albums", cover: "images/albums/legion-of-doom.jpg", tracks: [
    { title: "Unintended Consequences", file: "audio/legion-of-doom/01_Unintended_Consequences.mp3" },
    { title: "Suburban Kids", file: "audio/legion-of-doom/02_Suburban_Kids.mp3" },
    { title: "Cipher Sounds", file: "audio/legion-of-doom/03_Cipher_Sounds.mp3" },
    { title: "Inner-City Renewal", file: "audio/legion-of-doom/04_Inner-City_Renewal.mp3" },
    { title: "Vertical Mobility", file: "audio/legion-of-doom/05_Vertical_Mobility.mp3" },
    { title: "Blame Them", file: "audio/legion-of-doom/06_Blame_Them.mp3" },
    { title: "Only Human", file: "audio/legion-of-doom/07_Only_Human.mp3" },
    { title: "This Is Your Police", file: "audio/legion-of-doom/08_This_Is_Your_Police.mp3" },
    { title: "Truth", file: "audio/legion-of-doom/09_Truth.mp3" },
    { title: "The Cost Of Life", file: "audio/legion-of-doom/10_The_Cost_Of_Life.mp3" },
    { title: "Kiss The Ring", file: "audio/legion-of-doom/11_Kiss_The_Ring.mp3" },
    { title: "World Turns", file: "audio/legion-of-doom/12_World_Turns.mp3" },
  ]},
];

const photos = [
  { src: "images/photos/2.jpg", alt: "Triune studio portrait" },
  { src: "images/photos/3.jpg", alt: "Triune studio portrait" },
  { src: "images/photos/4.jpg", alt: "Triune studio portrait" },
  { src: "images/photos/6.jpg", alt: "Triune studio portrait" },
  { src: "images/photos/9.jpg", alt: "Triune studio portrait" },
  { src: "images/photos/10.jpg", alt: "Triune studio portrait" },
  { src: "images/photos/11.jpg", alt: "Triune studio portrait" },
  { src: "images/photos/12.jpg", alt: "Triune studio portrait" },
  { src: "images/photos/13.jpg", alt: "Triune studio portrait" },
  { src: "images/photos/16.jpg", alt: "Triune studio portrait" },
];

// videoId: the YouTube video ID. Thumbnails and embeds are pulled directly from YouTube by ID.
const shorts = [
  { title: "Green Tape Live Event Recap", videoId: "FwVI0-L5qWI", url: "https://youtu.be/FwVI0-L5qWI" },
  { title: "LabTalk: Let's Be Real, Battlerap is DEAD", videoId: "Ud1nmKGW-Qw", url: "https://youtu.be/Ud1nmKGW-Qw" },
  { title: "Green Tape Acoustic Promo Video", videoId: "n3qX-yxUx8U", url: "https://youtu.be/n3qX-yxUx8U" },
  { title: "LabTalk: The Year of The Diss Record?", videoId: "h7yqdtQIjAU", url: "https://youtu.be/h7yqdtQIjAU" },
  { title: "www - Rehearsal Footage #GREENTAPEACOUSTIC", videoId: "V24g8ydzX_c", url: "https://youtu.be/V24g8ydzX_c" },
  { title: "LabTalk: WE BACK!", videoId: "xm07hpspjjM", url: "https://youtu.be/xm07hpspjjM" },
  { title: "Power Spinoffs: Are You Still Watching?", videoId: "CD0ea8VAdOw", url: "https://youtu.be/CD0ea8VAdOw" },
];

const press = [
  { title: "ESPN Original Why Not Us: UMES Volleyball", url: "https://espnpressroom.com/press-release/espn-original-why-not-us-umes-volleyball-to-premiere-march-30/", date: "2026" },
  { title: "Triune Talks Netflix & High On The Hog Documentary", url: "https://canvasrebel.com/meet-triune/", date: "2023" },
  { title: "Lifestyle & Daily Journey with Triune", url: "http://voyagela.com/interview/life-work-with-triune-of-long-beach/", date: "2023" },
  { title: "The Combine - Forever Remix Video Premier by Billboard.com", url: "https://www.billboard.com/music/rb-hip-hop/the-combine-forever-stash-konig-remix-video-8095186/", date: "2018" },
];

// ===== Rendering — no need to edit below this line =====

function toRoman(num) {
  const map = [[1000,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]];
  let out = "";
  for (const [val, sym] of map) {
    while (num >= val) { out += sym; num -= val; }
  }
  return out;
}

function spotifyEmbedUrl(url) {
  const m = url.match(/open\.spotify\.com\/(album|track)\/([a-zA-Z0-9]+)/);
  if (!m) return null;
  return `https://open.spotify.com/embed/${m[1]}/${m[2]}?utm_source=generator&theme=0`;
}

let activeFilter = "All";

const categoryOrder = ["Albums", "Instrumental Albums", "Licensed Music", "Singles"];

function populateFilter() {
  const select = document.getElementById("categoryFilter");
  const present = new Set(releases.map(r => r.category));
  const ordered = categoryOrder.filter(c => present.has(c));
  const extras = [...present].filter(c => !categoryOrder.includes(c));
  const categories = ["All", ...ordered, ...extras];
  select.innerHTML = categories.map(c => `<option value="${c}">${c}</option>`).join("");
  select.addEventListener("change", () => {
    activeFilter = select.value;
    renderReleases();
  });
}

function renderReleases() {
  const grid = document.getElementById("tapeGrid");
  const list = activeFilter === "All" ? releases : releases.filter(r => r.category === activeFilter);

  if (list.length === 0) {
    grid.innerHTML = `<p style="color:var(--text-dim); padding: 24px 0;">Nothing in this category yet.</p>`;
    return;
  }

  const collapsibleCategories = ["Albums", "Instrumental Albums", "Singles", "Licensed Music"];

  grid.innerHTML = list.map((r, i) => {
    const thumb = r.cover
      ? `<img class="tape-thumb" src="${r.cover}" alt="" loading="lazy" referrerpolicy="no-referrer">`
      : `<span class="tape-thumb tape-thumb-empty" aria-hidden="true"></span>`;
    const title = `<span class="tape-title">${r.title}</span>`;
    const needsLink = (r.type === "stream" || r.type === "youtube") && r.url === "#";
    const sideLabel = needsLink ? `${r.category} · link needed` : r.category;
    const side = `<span class="tape-side">${sideLabel}</span>`;

    if (collapsibleCategories.includes(r.category)) {
      const albumId = "album-" + i;

      const sideNote = `<p class="tape-album-meta mono">${sideLabel}</p>`;
      let body = "";
      if (r.type === "local-album") {
        body = `
          ${sideNote}
          <div class="tape-album-layout">
            ${r.cover ? `<img class="tape-album-cover" src="${r.cover}" alt="${r.title} cover art">` : ""}
            <div class="tape-album-player-wrap">
              <audio class="tape-album-player" controls preload="none"></audio>
              <ol class="tape-tracklist">
                ${r.tracks.map((t, ti) => `
                  <li>
                    <button class="track-btn" data-file="${t.file}" data-title="${t.title}">
                      <span class="track-num mono">${String(ti + 1).padStart(2, "0")}</span>
                      <span class="track-title">${t.title}</span>
                    </button>
                  </li>
                `).join("")}
              </ol>
            </div>
          </div>
        `;
      } else if (r.type === "local") {
        body = `
          ${sideNote}
          <audio class="tape-simple-player" controls preload="none" src="${r.file}">
            Your browser can't play this file directly — <a href="${r.file}">download it</a> instead.
          </audio>
        `;
      } else {
        const embedSrc = !needsLink && r.type === "stream" ? spotifyEmbedUrl(r.url) : null;
        if (embedSrc) {
          body = `
            ${sideNote}
            <iframe class="tape-embed" src="${embedSrc}" width="100%" height="152" frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          `;
        } else {
          body = needsLink
            ? `${sideNote}<p class="tape-link-tbd">No link yet — add one in <span class="mono">js/main.js</span>.</p>`
            : `${sideNote}<a class="btn btn-ghost tape-listen-btn" href="${r.url}" target="_blank" rel="noopener">Listen</a>`;
        }
      }

      return `
        <div class="tape-card-album">
          <button class="tape-album-toggle" data-target="${albumId}" aria-expanded="false">
            ${thumb}
            ${title}
            <span class="tape-album-caret"><img src="images/toggle-icon.png" alt="" class="toggle-icon"></span>
          </button>
          <div class="tape-album-body" id="${albumId}" hidden>
            ${body}
          </div>
        </div>
      `;
    }

    if (r.type === "local") {
      return `
        <div class="tape-card tape-card-local">
          ${thumb}
          ${title}
          <audio controls preload="none" src="${r.file}">
            Your browser can't play this file directly — <a href="${r.file}">download it</a> instead.
          </audio>
          ${side}
        </div>
      `;
    }

    return `
      <a class="tape-card" href="${r.url}" target="${r.url === "#" ? "_self" : "_blank"}" rel="noopener">
        ${thumb}
        ${title}
        ${side}
      </a>
    `;
  }).join("");

  initAlbumPlayers();
}

function initAlbumPlayers() {
  document.querySelectorAll(".tape-album-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const body = document.getElementById(btn.dataset.target);
      const isHidden = body.hasAttribute("hidden");
      body.toggleAttribute("hidden");
      btn.setAttribute("aria-expanded", String(isHidden));
    });
  });

  document.querySelectorAll(".tape-card-album").forEach(card => {
    const player = card.querySelector(".tape-album-player");
    if (!player) return;
    const trackButtons = card.querySelectorAll(".track-btn");
    trackButtons.forEach(tb => {
      tb.addEventListener("click", () => {
        trackButtons.forEach(x => x.classList.remove("playing"));
        tb.classList.add("playing");
        player.src = tb.dataset.file;
        player.play();
      });
    });
  });
}

function renderPhotos() {
  const grid = document.getElementById("photoGrid");
  grid.innerHTML = photos.map((p, i) => `
    <button class="photo-tile" data-index="${i}" aria-label="View photo">
      <img src="${p.src}" alt="${p.alt}" loading="lazy">
    </button>
  `).join("");
  initLightbox();
}

function initLightbox() {
  const overlay = document.getElementById("lightbox");
  const overlayImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");
  let current = 0;

  function show(i) {
    current = (i + photos.length) % photos.length;
    overlayImg.src = photos[current].src;
    overlayImg.alt = photos[current].alt || "";
  }
  function open(i) {
    show(i);
    overlay.hidden = false;
    requestAnimationFrame(() => overlay.classList.add("open"));
    document.body.style.overflow = "hidden";
  }
  function close() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => { overlay.hidden = true; overlayImg.src = ""; }, 200);
  }
  function next() { show(current + 1); }
  function prev() { show(current - 1); }

  document.querySelectorAll(".photo-tile").forEach(tile => {
    tile.addEventListener("click", () => open(parseInt(tile.dataset.index, 10)));
  });
  closeBtn.addEventListener("click", close);
  nextBtn.addEventListener("click", e => { e.stopPropagation(); next(); });
  prevBtn.addEventListener("click", e => { e.stopPropagation(); prev(); });
  overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", e => {
    if (overlay.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });
}

function videoTile(v, i) {
  const thumb = v.videoId
    ? `<img class="video-thumb" src="https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg" alt="" loading="lazy">`
    : `<span class="video-thumb video-thumb-empty" aria-hidden="true"></span>`;
  return `
    <button class="video-tile" data-video-id="${v.videoId || ''}" data-fallback-url="${v.url}" aria-label="Play ${v.title}">
      ${thumb}
      <span class="video-play" aria-hidden="true"><i></i></span>
      <span class="video-caption">
        <span class="video-tile-title">${v.title}</span>
      </span>
    </button>
  `;
}

function renderVideos() {
  document.getElementById("shortsList").innerHTML = shorts.map(videoTile).join("");
  initVideoPlayers();
}

function initVideoPlayers() {
  document.querySelectorAll(".video-tile").forEach(tile => {
    tile.addEventListener("click", () => {
      const id = tile.dataset.videoId;
      if (!id) {
        window.open(tile.dataset.fallbackUrl, "_blank", "noopener");
        return;
      }
      tile.innerHTML = `
        <iframe class="video-frame"
          src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      `;
      tile.disabled = true;
    }, { once: true });
  });
}

function renderPress() {
  const list = document.getElementById("pressList");
  if (press.length === 0) {
    list.innerHTML = `<li><span class="mono" style="color:var(--text-dim)">No press items yet — add some to the "press" array in js/main.js.</span></li>`;
    return;
  }
  list.innerHTML = press.map(p => `
    <li>
      <a href="${p.url}" target="_blank" rel="noopener">${p.title}</a>
      <span class="press-date mono">${p.date}</span>
    </li>
  `).join("");
}

function initNav() {
  const toggle = document.getElementById("navToggle");
  const list = document.getElementById("navList");
  toggle.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  list.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    list.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

function initCookieNotice() {
  const notice = document.getElementById("cookieNotice");
  const dismissBtn = document.getElementById("cookieNoticeDismiss");
  if (!notice || !dismissBtn) return;
  try {
    if (!localStorage.getItem("cookieNoticeDismissed")) {
      notice.hidden = false;
    }
  } catch (e) {
    notice.hidden = false;
  }
  dismissBtn.addEventListener("click", () => {
    notice.hidden = true;
    try { localStorage.setItem("cookieNoticeDismissed", "1"); } catch (e) {}
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
populateFilter();
renderReleases();
renderVideos();
renderPhotos();
renderPress();
initNav();
initCookieNotice();
