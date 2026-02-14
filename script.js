// Dark / Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
} else {
  document.body.classList.add("light");
}

// Language Toggle
const langEn = document.getElementById("langEn");
const langAr = document.getElementById("langAr");
const aboutText = document.getElementById("aboutText");

const aboutContent = {
  en: `<p>Hello, I'm Ahmed Rashdan, a professional data scientist from Egypt, specialized in data analysis and AI in space tech and satellites.</p>
  <p>My journey started early with video games and curiosity about digital systems...</p>`,
  ar: `<p>مرحبًا، أنا أحمد رشدان، عالم بيانات محترف من مصر، متخصص في تحليل البيانات والذكاء الاصطناعي في مجال تقنيات الفضاء والأقمار الصناعية.</p>
  <p>بدأت رحلتي في مجال التكنولوجيا في سن مبكرة من خلال حبي لألعاب الفيديو...</p>`
};

function setLanguage(lang){
  if(lang === 'en'){
    document.documentElement.setAttribute('dir','ltr');
    aboutText.innerHTML = aboutContent.en;
    langEn.classList.add('active');
    langAr.classList.remove('active');
  } else {
    document.documentElement.setAttribute('dir','rtl');
    aboutText.innerHTML = aboutContent.ar;
    langAr.classList.add('active');
    langEn.classList.remove('active');
  }
}

langEn.addEventListener('click', () => setLanguage('en'));
langAr.addEventListener('click', () => setLanguage('ar'));
setLanguage('en');

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", function(){
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    const windowH = window.innerHeight;
    if(top < windowH - 50) el.classList.add("active");
  });
});

// Hero Parallax
window.addEventListener("mousemove", e => {
  const layers = document.querySelectorAll(".parallax-layer");
  layers.forEach((layer, index) => {
    const speed = (index + 1) * 0.02;
    const x = (window.innerWidth - e.pageX*speed)/100;
    const y = (window.innerHeight - e.pageY*speed)/100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});
