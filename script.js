// THEME TOGGLE
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  let theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// LANGUAGE TOGGLE
const languageToggle = document.getElementById('language-toggle');

const translations = {
  en: {
    heroHeading: "Ahmed Rashdan",
    heroTagline: "Professional Data Scientist | AI & Web Development Enthusiast",
    heroCTA: "View Projects",
    aboutTitle: "About Me",
    aboutBio: "Hi, I’m Ahmed Rashdan, a professional Data Scientist from Egypt with a strong passion for programming, data analysis, and artificial intelligence. My journey in technology began at a young age through my love for video games and curiosity about how they work, which inspired me to build a strong foundation in data science and AI.",
    skillsTitle: "Key Skills",
    projectsTitle: "Projects",
    socialTitle: "Connect with Me"
  },
  ar: {
    heroHeading: "أحمد رشدان",
    heroTagline: "عالم بيانات محترف | شغوف بالذكاء الاصطناعي وتطوير الويب",
    heroCTA: "عرض المشاريع",
    aboutTitle: "من أنا",
    aboutBio: "مرحبًا، أنا أحمد رشدان، عالم بيانات محترف من مصر ولدي شغف كبير بالبرمجة وتحليل البيانات والذكاء الاصطناعي. بدأت رحلتي في التكنولوجيا منذ صغري من خلال حبي لألعاب الفيديو وفضولي لمعرفة كيفية عملها، مما ألهمني لبناء أساس قوي في علم البيانات والذكاء الاصطناعي.",
    skillsTitle: "المهارات الأساسية",
    projectsTitle: "المشاريع",
    socialTitle: "تواصل معي"
  }
};

languageToggle.addEventListener('change', (e) => {
  const lang = e.target.value;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.getElementById('hero-heading').textContent = translations[lang].heroHeading;
  document.getElementById('hero-tagline').textContent = translations[lang].heroTagline;
  document.getElementById('hero-cta').textContent = translations[lang].heroCTA;
  document.getElementById('about-title').textContent = translations[lang].aboutTitle;
  document.getElementById('about-bio').textContent = translations[lang].aboutBio;
  document.getElementById('skills-title').textContent = translations[lang].skillsTitle;
  document.getElementById('projects-title').textContent = translations[lang].projectsTitle;
  document.getElementById('social-title').textContent = translations[lang].socialTitle;
});
