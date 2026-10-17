// Reusable data-driven deity cards. Images link to Wikimedia Commons; check attribution details before reuse.
const deities = [
  {
    day: 1, weekday: "సోమవారం", god: "శ్రీ పరమశివుడు", shortName: "శివుడు",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shiva_statue_in_Murudeshwar.jpg",
    alt: "శ్రీ పరమశివుని చిత్రం", symbol: "🔱",
    stotram: "ఓం నమః శివాయ।\nకర్పూరగౌరం కరుణావతారం\nసంసారసారం భుజగేంద్రహారం॥",
    meaning: "శివుని కరుణ, శాంతి, మంగళాన్ని స్మరించే ప్రార్థన."
  },
  {
    day: 2, weekday: "మంగళవారం", god: "శ్రీ హనుమంతుడు", shortName: "హనుమంతుడు",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hanuman.jpg",
    alt: "శ్రీ హనుమంతుని చిత్రం", symbol: "🙏",
    stotram: "మనోజవం మారుతతుల్యవేగం\nజితేంద్రియం బుద్ధిమతాం వరిష్ఠమ్।\nవాతాత్మజం వానరయూథముఖ్యం\nశ్రీరామదూతం శరణం ప్రపద్యే॥",
    meaning: "హనుమంతుని వేగం, జ్ఞానం, భక్తిని స్మరించే శ్లోకం."
  },
  {
    day: 3, weekday: "బుధవారం", god: "శ్రీ వినాయకుడు", shortName: "వినాయకుడు",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ganesha.jpg",
    alt: "శ్రీ వినాయకుని చిత్రం", symbol: "🐘",
    stotram: "వక్రతుండ మహాకాయ\nసూర్యకోటి సమప్రభ।\nనిర్విఘ్నం కురు మే దేవ\nసర్వకార్యేషు సర్వదా॥",
    meaning: "ప్రారంభించే పనులు విఘ్నాలు లేకుండా సాగాలని చేసే ప్రార్థన."
  },
  {
    day: 4, weekday: "గురువారం", god: "శ్రీ దక్షిణామూర్తి", shortName: "దక్షిణామూర్తి",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dakshinamurthy.jpg",
    alt: "శ్రీ దక్షిణామూర్తి చిత్రం", symbol: "🪷",
    stotram: "గురుర్బ్రహ్మా గురుర్విష్ణుః\nగురుర్దేవో మహేశ్వరః।\nగురుః సాక్షాత్ పరబ్రహ్మ\nతస్మై శ్రీ గురవే నమః॥",
    meaning: "జ్ఞానాన్ని ప్రసాదించే గురువుకు నమస్కారం."
  },
  {
    day: 5, weekday: "శుక్రవారం", god: "శ్రీ మహాలక్ష్మి", shortName: "మహాలక్ష్మి",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lakshmi.jpg",
    alt: "శ్రీ మహాలక్ష్మి చిత్రం", symbol: "🪷",
    stotram: "నమస్తేస్తు మహామాయే\nశ్రీపీఠే సురపూజితే।\nశంఖచక్రగదాహస్తే\nమహాలక్ష్మి నమోస్తుతే॥",
    meaning: "శ్రేయస్సు, శాంతి, సమృద్ధి కోసం మహాలక్ష్మిని ప్రార్థించే శ్లోకం."
  },
  {
    day: 6, weekday: "శనివారం", god: "శ్రీ వేంకటేశ్వర స్వామి", shortName: "వేంకటేశ్వరుడు",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lord%20Venkateswara%20swamy.jpg",
    alt: "శ్రీ వేంకటేశ్వర స్వామి చిత్రం", symbol: "🙏",
    stotram: "శ్రియః కాంతాయ కళ్యాణనిధయే నిధయేర్థినామ్।\nశ్రీవేంకటనివాసాయ శ్రీనివాసాయ మంగళమ్॥",
    meaning: "శ్రీనివాసునికి మంగళం కలగాలని సమర్పించే శ్లోకం."
  },
  {
    day: 0, weekday: "ఆదివారం", god: "శ్రీ సూర్యనారాయణ స్వామి", shortName: "సూర్యనారాయణుడు",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Surya_statue.jpg",
    alt: "శ్రీ సూర్యనారాయణ స్వామి చిత్రం", symbol: "☀️",
    stotram: "జపాకుసుమసంకాశం\nకాశ్యపేయం మహాద్యుతిమ్।\nతమోఽరిం సర్వపాపఘ్నం\nప్రణతోఽస్మి దివాకరమ్॥",
    meaning: "ప్రకాశం, ఆరోగ్యం, శక్తిని ప్రసాదించే సూర్యునికి నమస్కారం."
  }
];

const weekdayNames = ["ఆదివారం","సోమవారం","మంగళవారం","బుధవారం","గురువారం","శుక్రవారం","శనివారం"];
const monthNamesTe = ["జనవరి","ఫిబ్రవరి","మార్చి","ఏప్రిల్","మే","జూన్","జూలై","ఆగస్టు","సెప్టెంబర్","అక్టోబర్","నవంబర్","డిసెంబర్"];
const weekdayShortTe = ["ఆది","సోమ","మంగళ","బుధ","గురు","శుక్ర","శని"];

// SAMPLE VALUES copied from the design mockup. Replace with a verified panchangam source before production.
const panchang = [
  { cls: "pink", icon: "☾", label: "తిథి", value: "శుక్ల పంచమి", until: "(రా. 10:24 వరకు)" },
  { cls: "blue", icon: "✷", label: "నక్షత్రం", value: "రోహిణి", until: "(సా. 04:32 వరకు)" },
  { cls: "green", icon: "☀", label: "యోగం", value: "శోభన", until: "(రా. 03:15 వరకు)" },
  { cls: "violet", icon: "⌀", label: "కరణం", value: "బవ", until: "(రా. 10:24 వరకు)" }
];
const muhurtas = [
  ["🌅", "బ్రహ్మ ముహూర్తం", "04:51 AM - 05:43 AM"], ["✺", "అభిజిత్ ముహూర్తం", "11:48 AM - 12:36 PM"],
  ["✺", "విజయ ముహూర్తం", "01:57 PM - 02:45 PM"], ["◷", "గురు ముహూర్తం", "04:20 PM - 05:08 PM"],
  ["◷", "రాహుకాలం", "09:06 AM - 10:38 AM"], ["ॐ", "యమగండం", "01:50 PM - 03:22 PM"],
  ["ॐ", "గుళిక కాలం", "06:19 AM - 07:51 AM"], ["✹", "దుర్ముహూర్తం", "08:12 AM - 09:00 AM"],
  ["❂", "వర్జ్యం", "03:15 PM - 04:58 PM"]
];
const festivals = [
  { y: 2026, m: 9, d: 2, name: "గాంధీ జయంతి" }, { y: 2026, m: 9, d: 12, name: "దసరా (మహానవమి)" },
  { y: 2026, m: 9, d: 17, name: "విజయదశమి" }, { y: 2026, m: 9, d: 24, name: "కార్తీక దీపం (ప్రారంభం)" },
  { y: 2026, m: 9, d: 31, name: "దీపావళి" }
];

function getTodayDeity(date = new Date()) {
  return deities.find(item => item.day === date.getDay()) || deities[0];
}

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function artBlock(deity, cls) {
  return `<div class="${cls}"><span class="image-fallback" aria-hidden="true">${deity.symbol}</span><img src="${deity.image}" alt="${deity.alt}" loading="lazy" /></div>`;
}

function createDeityCard(deity) {
  const article = el("article", `deity-card day-${deity.day}`);
  const button = el("button");
  button.type = "button";
  button.setAttribute("aria-label", `${deity.weekday}: ${deity.god} స్తోత్రం చూడండి`);
  const lines = deity.stotram.split("\n");
  button.innerHTML = `
    <h3 class="weekday">${deity.weekday}</h3>
    ${artBlock(deity, "deity-image-wrap")}
    <span class="god-name">${deity.shortName}</span>
    <span class="short-prayer">${lines[0]}<br>${lines[1] || ""}</span>
    <span class="play-pill">▶ స్తోత్రం చూడండి</span>`;
  button.addEventListener("click", () => {
    renderFeatured(deity);
    document.getElementById("daily-god").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  article.append(button);
  return article;
}

function renderFeatured(deity) {
  const root = document.getElementById("featured-deity");
  root.innerHTML = `
    ${artBlock(deity, "deity-art")}
    <div class="deity-copy">
      <p class="weekday-label">${deity.weekday}</p>
      <h3>${deity.god}</h3>
      <span class="blessing-badge">స్వామివారి అనుగ్రహం</span>
      <div class="sanskrit"></div>
      <p class="meaning"></p>
    </div>`;
  root.querySelector(".sanskrit").textContent = deity.stotram;
  root.querySelector(".meaning").textContent = `భావం: ${deity.meaning}`;
  wireImageFallbacks(root);
}

function wireImageFallbacks(scope = document) {
  scope.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => { img.style.display = "none"; }, { once: true });
    if (img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event("error"));
  });
}

function renderDate() {
  const now = new Date();
  document.getElementById("today-date").textContent =
    `${now.getDate()} ${monthNamesTe[now.getMonth()]} ${now.getFullYear()}, ${weekdayNames[now.getDay()]}`;
}

function renderPanchang() {
  const root = document.getElementById("panchang-summary");
  panchang.forEach(p => root.append(el("article", `p-card ${p.cls}`,
    `<span class="p-icon" aria-hidden="true">${p.icon}</span><h3>${p.label}</h3><strong>${p.value}</strong><small>${p.until}</small>`)));
}

function renderMuhurtas() {
  const root = document.getElementById("muhurta-list");
  muhurtas.forEach(([icon, name, time]) => root.append(el("li", "", `<span aria-hidden="true">${icon}</span><b>${name}</b><time>${time}</time>`)));
}

function renderFestivals() {
  const root = document.getElementById("festival-list");
  const now = new Date();
  festivals.forEach(f => {
    const today = f.y === now.getFullYear() && f.m === now.getMonth() && f.d === now.getDate();
    root.append(el("li", today ? "festival-today" : "",
      `<time>${String(f.d).padStart(2, "0")} ${monthNamesTe[f.m]}</time><b>${f.name}</b><span aria-hidden="true">›</span>`));
  });
}

let calendarMonth = new Date();
function renderMonthCalendar() {
  const grid = document.getElementById("month-calendar");
  const label = document.getElementById("month-label");
  const y = calendarMonth.getFullYear(), m = calendarMonth.getMonth();
  label.textContent = `${monthNamesTe[m]} ${y}`;
  grid.innerHTML = "";
  weekdayShortTe.forEach(day => grid.append(el("b", "weekday-head", day)));
  for (let i = 0, first = new Date(y, m, 1).getDay(); i < first; i++) grid.append(el("span"));
  const now = new Date();
  for (let day = 1, total = new Date(y, m + 1, 0).getDate(); day <= total; day++) {
    const isToday = day === now.getDate() && m === now.getMonth() && y === now.getFullYear();
    const hasFest = festivals.some(f => f.y === y && f.m === m && f.d === day);
    const cell = el("span", hasFest ? "has-festival" : "", isToday ? `<em class="today">${day}</em>` : String(day));
    if (isToday) cell.setAttribute("aria-current", "date");
    grid.append(cell);
  }
}

function init() {
  renderDate();
  renderPanchang();
  renderMuhurtas();
  renderFestivals();
  renderFeatured(getTodayDeity());
  const grid = document.getElementById("deity-grid");
  deities.slice().sort((a, b) => a.day - b.day).forEach(deity => grid.append(createDeityCard(deity)));
  wireImageFallbacks(grid);
  renderMonthCalendar();
  document.getElementById("prev-month").addEventListener("click", () => { calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1); renderMonthCalendar(); });
  document.getElementById("next-month").addEventListener("click", () => { calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1); renderMonthCalendar(); });
}

document.addEventListener("DOMContentLoaded", init);
