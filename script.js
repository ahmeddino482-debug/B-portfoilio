// =========================
// INITIAL LOAD SETTINGS
// =========================

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
document.body.classList.add(savedTheme);

// Load saved language
const savedLang = localStorage.getItem("language") || "en";
document.documentElement.setAttribute("dir", savedLang === "ar" ? "rtl" : "ltr");


// =========================
// DARK / LIGHT MODE
// =========================
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");

    document.body.classList.remove("dark", "light");
    document.body.classList.add(isDark ? "light" : "dark");

    localStorage.setItem("theme", isDark ? "light" : "dark");
  });
}


// =========================
// LANGUAGE TOGGLE
// =========================
const langEn = document.getElementById("langEn");
const langAr = document.getElementById("langAr");
const aboutText = document.getElementById("aboutText");

const aboutContent = {
  en: `
    <p>Hello, I’m Ahmed Rashdan — a Data Scientist specializing in space technology, data analysis, and artificial intelligence.</p>
    <p>My passion for technology started early through curiosity about how complex systems work, from video games to satellites orbiting Earth.</p>
    <p>I focus on transforming complex data into clear, actionable insights, especially in satellite systems and orbital analytics.</p>
    <p>I combine technical precision with business understanding to build impactful data-driven solutions.</p>
  `,
  ar: `
    <p>مرحبًا، أنا أحمد رشدان — عالم بيانات متخصص في تقنيات الفضاء وتحليل البيانات والذكاء الاصطناعي.</p>
    <p>بدأ شغفي بالتكنولوجيا من الفضول حول الأنظمة المعقدة، من ألعاب الفيديو إلى الأقمار الصناعية.</p>
    <p>أركز على تحويل البيانات المعقدة إلى رؤى واضحة خاصة في أنظمة الأقمار الصناعية والتحليل المداري.</p>
    <p>أجمع بين الدقة التقنية والفهم التجاري لبناء حلول قائمة على البيانات ذات تأثير حقيقي.</p>
  `
};

function setLanguage(lang) {
  if (!aboutText) return;

  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  aboutText.innerHTML = aboutContent[lang];

  if (langEn && langAr) {
    langEn.classList.toggle("active", lang === "en");
    langAr.classList.toggle("active", lang === "ar");
  }

  localStorage.setItem("language", lang);
}

// Apply saved language
setLanguage(savedLang);

// Button events
if (langEn) langEn.addEventListener("click", () => setLanguage("en"));
if (langAr) langAr.addEventListener("click", () => setLanguage("ar"));


// =========================
// SCROLL REVEAL
// =========================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowH = window.innerHeight;

  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < windowH - 50) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Run once on load


// =========================
// HERO PARALLAX
// =========================
window.addEventListener("mousemove", (e) => {
  const layers = document.querySelectorAll(".parallax-layer");

  layers.forEach((layer, index) => {
    const speed = (index + 1) * 0.02;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translate(${x}px, ${y}px)`;
  });
});
