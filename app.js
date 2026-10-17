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
const teluguMonths = ["జనవరి","ఫిబ్రవరి","మార్చి","ఏప్రిల్","మే","జూన్","జూలై","ఆగస్టు","సెప్టెంబర్","అక్టోబర్","నవంబర్","డిసెంబర్"];

function getTodayDeity(date = new Date()) {
  return deities.find(item => item.day === date.getDay()) || deities[0];
}

function createDeityCard(deity) {
  const article = document.createElement("article");
  article.className = "deity-card";
  const button = document.createElement("button");
  button.type = "button";
  button.setAttribute("aria-label", `${deity.weekday}: ${deity.god} స్తోత్రం చూడండి`);
  button.innerHTML = `
    <div class="deity-image-wrap"><img src="${deity.image}" alt="${deity.alt}" loading="lazy" /><span class="image-fallback" aria-hidden="true">${deity.symbol}</span></div>
    <div class="deity-card-copy">
      <span class="weekday">${deity.weekday}</span>
      <h3>${deity.god}</h3>
      <span class="short-prayer">${deity.stotram.split("\n")[0]}</span>
      <span class="select-hint">స్తోత్రం చూడటానికి తాకండి ↗</span>
    </div>`;
  button.addEventListener("click", () => renderFeatured(deity));
  article.append(button);
  return article;
}

function renderFeatured(deity) {
  const root = document.getElementById("featured-deity");
  root.innerHTML = `
    <div class="deity-art"><img src="${deity.image}" alt="${deity.alt}" /><span class="image-fallback" aria-hidden="true">${deity.symbol}</span></div>
    <div class="deity-copy">
      <p class="eyebrow">${deity.weekday} ప్రత్యేకం</p>
      <h3>${deity.god}</h3>
      <p class="muted">చిన్న స్తోత్రం</p>
      <div class="sanskrit"></div>
      <p class="meaning"></p>
    </div>`;
  root.querySelector(".sanskrit").textContent = deity.stotram;
  root.querySelector(".meaning").textContent = `భావం: ${deity.meaning}`;
  wireImageFallbacks(root);
  document.getElementById("today-deity-label").textContent = deity.shortName;
}

function wireImageFallbacks(scope = document) {
  scope.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
      img.style.display = "none";
      const fallback = img.parentElement.querySelector(".image-fallback");
      if (fallback) fallback.classList.add("is-visible");
    }, { once: true });
    if (img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event("error"));
  });
}

function renderDate() {
  const now = new Date();
  document.getElementById("today-date").textContent =
    `${now.getDate()} ${teluguMonths[now.getMonth()]} ${now.getFullYear()}`;
  document.getElementById("today-day").textContent = weekdayNames[now.getDay()];
}

function init() {
  renderDate();
  const todayDeity = getTodayDeity();
  renderFeatured(todayDeity);
  const grid = document.getElementById("deity-grid");
  deities.slice().sort((a, b) => (a.day === 0 ? 7 : a.day) - (b.day === 0 ? 7 : b.day))
    .forEach(deity => grid.append(createDeityCard(deity)));
  wireImageFallbacks(grid);
}

document.addEventListener("DOMContentLoaded", init);

/* Accessible month grid with reusable calendar renderer. */
const monthNamesTe = ["జనవరి","ఫిబ్రవరి","మార్చి","ఏప్రిల్","మే","జూన్","జూలై","ఆగస్టు","సెప్టెంబర్","అక్టోబర్","నవంబర్","డిసెంబర్"];
const weekdayShortTe = ["ఆది","సోమ","మంగళ","బుధ","గురు","శుక్ర","శని"];
let calendarMonth = new Date();
function renderMonthCalendar() {
  const grid = document.getElementById("month-calendar");
  const label = document.getElementById("month-label");
  if (!grid || !label) return;
  label.textContent = monthNamesTe[calendarMonth.getMonth()] + " " + calendarMonth.getFullYear();
  grid.innerHTML = "";
  weekdayShortTe.forEach(day => { const cell=document.createElement("span"); cell.className="weekday-head"; cell.textContent=day; grid.append(cell); });
  const first = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), 1).getDay();
  const total = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth()+1, 0).getDate();
  for(let i=0;i<first;i++){const blank=document.createElement("span");blank.setAttribute("aria-hidden","true");grid.append(blank);}
  const now = new Date();
  for(let day=1;day<=total;day++){
    const cell=document.createElement("span"); cell.textContent=String(day);
    if(day===now.getDate() && calendarMonth.getMonth()===now.getMonth() && calendarMonth.getFullYear()===now.getFullYear()) { cell.className="today"; cell.setAttribute("aria-current","date"); }
    grid.append(cell);
  }
}
document.getElementById("prev-month")?.addEventListener("click",()=>{calendarMonth=new Date(calendarMonth.getFullYear(),calendarMonth.getMonth()-1,1);renderMonthCalendar();});
document.getElementById("next-month")?.addEventListener("click",()=>{calendarMonth=new Date(calendarMonth.getFullYear(),calendarMonth.getMonth()+1,1);renderMonthCalendar();});
document.addEventListener("DOMContentLoaded",renderMonthCalendar);
