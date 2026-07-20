// ===== Edit these arrays to update site content — no HTML editing required =====

// type: "stream"       (links out to Apple/Spotify/Bandcamp/Amazon)
//       "youtube"      (links out to a YouTube video)
//       "local"        (plays directly from a single mp3 you add to the audio/ folder — see audio/README.md)
//       "local-album"  (a full tracklist of local mp3s, playable in-page — see audio/README.md)
// category: powers the filter dropdown
const releases = [
  { title: "the polyester tapes vol. 3", type: "stream", url: "https://music.apple.com/us/album/the-polyester-tapes-vol-3-ep/6772341520", category: "Instrumental Albums" },
  { title: "the polyester tapes vol. 2", type: "stream", url: "https://music.apple.com/us/album/the-polyester-tapes-vol-2-ep/1892104851", category: "Instrumental Albums" },
  { title: "ESPN — Why Not Us? UMES Volleyball", type: "local", file: "audio/espn-why-not-us.mp3", category: "Licensed Music" },
  { title: "Celebration EP (15 Year Anniversary Album)", type: "stream", url: "#", category: "Albums" },
  { title: "the polyester tapes vol. 1", type: "stream", url: "https://music.apple.com/us/album/the-polyester-tapes-vol-1-ep/1825572465", category: "Instrumental Albums" },
  { title: "5450", type: "stream", url: "https://music.apple.com/us/album/5450-ep/1808803946", category: "Instrumental Albums" },
  { title: "Green Tape (Acoustic)", type: "stream", url: "https://music.apple.com/us/album/green-tape-acoustic/1741963232", category: "Albums" },
  { title: "Green Tape (Live)", type: "stream", url: "https://music.apple.com/us/album/the-green-tape-live/1700299391", category: "Albums" },
  { title: "The Green Tape (Deluxe)", type: "stream", url: "https://music.apple.com/us/album/the-green-tape-deluxe-version/1687778802", category: "Albums" },
  { title: "The Green Tape", type: "stream", url: "https://open.spotify.com/album/7EiLau233RW8alH97BGQME", category: "Albums" },
  { title: "Singles", type: "stream", url: "#", category: "Singles" },
  { title: "the LOVE album", type: "stream", url: "https://music.apple.com/us/album/the-love-album/1467230811", category: "Albums" },
  { title: "Raised To Fail, Born To Succeed", type: "stream", url: "https://music.apple.com/us/album/raised-to-fail-born-to-succeed/1843579843", category: "Albums" },
  { title: "I'm In It To Win It EP", type: "stream", url: "https://www.amazon.com/Im-Win-EP-Triune/dp/B00XSGMYZ2", category: "Albums" },
  { title: "Celebration EP", type: "stream", url: "https://music.apple.com/us/album/celebration/1111394766", category: "Albums" },
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
  { title: "Lit Ones & High Life", type: "youtube", url: "#", category: "Albums" },
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

const press = [
  // { title: "Article headline here", url: "https://example.com", date: "2026" },
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

  const collapsibleCategories = ["Albums", "Instrumental Albums"];

  grid.innerHTML = list.map((r, i) => {
    const index = `<span class="tape-index">${toRoman(list.length - i)}</span>`;
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
        body = needsLink
          ? `${sideNote}<p class="tape-link-tbd">No link yet — add one in <span class="mono">js/main.js</span>.</p>`
          : `${sideNote}<a class="btn btn-ghost tape-listen-btn" href="${r.url}" target="_blank" rel="noopener">Listen</a>`;
      }

      return `
        <div class="tape-card tape-card-album">
          <button class="tape-album-toggle" data-target="${albumId}" aria-expanded="false">
            ${index}
            ${title}
            <span class="tape-album-caret">+</span>
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
          ${index}
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
        ${index}
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
      btn.querySelector(".tape-album-caret").textContent = isHidden ? "−" : "+";
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
  grid.innerHTML = photos.map(p => `
    <a href="${p.src}" target="_blank" rel="noopener">
      <img src="${p.src}" alt="${p.alt}" loading="lazy">
    </a>
  `).join("");
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

document.getElementById("year").textContent = new Date().getFullYear();
populateFilter();
renderReleases();
renderPhotos();
renderPress();
initNav();
