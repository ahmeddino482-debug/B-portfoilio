// =========================
// Dark / Light Mode Toggle
// INITIAL LOAD SETTINGS
// =========================
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
// Dark theme default
const savedTheme = localStorage.getItem("theme") || "dark";
document.body.classList.add(savedTheme);

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});
// Saved language
const savedLang = localStorage.getItem("language") || "en";
document.documentElement.setAttribute("dir", savedLang === "ar" ? "rtl" : "ltr");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classList.add("light");
}
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
// Language Toggle
// LANGUAGE TOGGLE
// =========================
const langEn = document.getElementById("langEn");
const langAr = document.getElementById("langAr");
@@ -31,68 +34,61 @@ const aboutText = document.getElementById("aboutText");
const aboutContent = {
  en: `
    <p>Hello, I’m Ahmed Rashdan — a Data Scientist specializing in space technology, data analysis, and artificial intelligence.</p>
    <p>My passion for technology started early through curiosity about how complex systems work, from video games to satellites orbiting Earth. That curiosity grew into a strong foundation in programming, data science, and analytical thinking.</p>
    <p>I focus on transforming complex data into clear, actionable insights, with a particular interest in space-related applications such as satellite systems, orbital analysis, and space-tech analytics.</p>
    <p>Beyond technical skills, I understand the business side of space technology and how data-driven decisions can optimize performance, reduce costs, and support innovation.</p>
    <p>My passion for technology started early through curiosity about how complex systems work, from video games to satellites orbiting Earth.</p>
    <p>I focus on transforming complex data into clear, actionable insights, especially in satellite systems and orbital analytics.</p>
    <p>I combine technical precision with business understanding to build impactful data-driven solutions.</p>
  `,
  ar: `
    <p>مرحبًا، أنا أحمد رشدان — عالم بيانات متخصص في تقنيات الفضاء، تحليل البيانات، والذكاء الاصطناعي.</p>
    <p>بدأ شغفي بالتكنولوجيا في سن مبكرة من خلال الفضول حول كيفية عمل الأنظمة المعقدة، من ألعاب الفيديو إلى الأقمار الصناعية التي تدور حول الأرض. هذا الفضول تطور ليصبح أساسًا قويًا في البرمجة وعلوم البيانات.</p>
    <p>أركز على تحويل البيانات المعقدة إلى رؤى واضحة وقابلة للتنفيذ، مع اهتمام خاص بتطبيقات الفضاء مثل أنظمة الأقمار الصناعية والتحليل المداري.</p>
    <p>إلى جانب الجانب التقني، أمتلك فهمًا جيدًا للجانب التجاري لتقنيات الفضاء وكيف يمكن للقرارات المبنية على البيانات تحسين الأداء ودعم الابتكار.</p>
    <p>مرحبًا، أنا أحمد رشدان — عالم بيانات متخصص في تقنيات الفضاء وتحليل البيانات والذكاء الاصطناعي.</p>
    <p>بدأ شغفي بالتكنولوجيا من الفضول حول الأنظمة المعقدة، من ألعاب الفيديو إلى الأقمار الصناعية.</p>
    <p>أركز على تحويل البيانات المعقدة إلى رؤى واضحة خاصة في أنظمة الأقمار الصناعية والتحليل المداري.</p>
    <p>أجمع بين الدقة التقنية والفهم التجاري لبناء حلول قائمة على البيانات ذات تأثير حقيقي.</p>
  `
};

function setLanguage(lang) {
  if (lang === "en") {
    document.documentElement.setAttribute("dir", "ltr");
    aboutText.innerHTML = aboutContent.en;
    langEn.classList.add("active");
    langAr.classList.remove("active");
  } else {
    document.documentElement.setAttribute("dir", "rtl");
    aboutText.innerHTML = aboutContent.ar;
    langAr.classList.add("active");
    langEn.classList.remove("active");
  if (!aboutText) return;
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  aboutText.innerHTML = aboutContent[lang];
  if (langEn && langAr) {
    langEn.classList.toggle("active", lang === "en");
    langAr.classList.toggle("active", lang === "ar");
  }
  localStorage.setItem("language", lang);
}

// Language button events
langEn.addEventListener("click", () => setLanguage("en"));
langAr.addEventListener("click", () => setLanguage("ar"));

// Default language
setLanguage("en");
// Apply saved language
setLanguage(savedLang);

// Button events
if (langEn) langEn.addEventListener("click", () => setLanguage("en"));
if (langAr) langAr.addEventListener("click", () => setLanguage("ar"));

// =========================
// Scroll Reveal Animation
// SCROLL REVEAL
// =========================
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function () {
function revealOnScroll() {
  const windowH = window.innerHeight;
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowH = window.innerHeight;

    if (top < windowH - 50) {
      el.classList.add("active");
    }
    if (top < windowH - 50) el.classList.add("active");
  });
});
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Run on load

// =========================
// Hero Parallax Effect
// HERO PARALLAX
// =========================
window.addEventListener("mousemove", (e) => {
  const layers = document.querySelectorAll(".parallax-layer");

  layers.forEach((layer, index) => {
    const speed = (index + 1) * 0.02;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    layer.style.transform = `translate(${x}px, ${y}px)`;
  });
});
