// Dark/Light mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});
if(localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');

// Language toggle (English/Arabic)
const translations = {
  en: {
    home:"Home", about:"About", projects:"Projects",
    heroTitle:"Hi, I'm Ahmed Rashdan", heroSubtitle:"Data Scientist & Space Technology Enthusiast",
    viewProjects:"View Projects", aboutTitle:"About Me",
    aboutBio:"I'm Ahmed Rashdan, a professional Data Scientist from Egypt specializing in data analysis and AI in space and satellite technology. My journey in tech began with my love for video games and curiosity about digital systems, leading me to build a strong foundation in data science and AI. I focus on integrating data science with space tech, analyzing orbital systems, and working with remote sensing data.",
    skillsTitle:"Skills",
    projectsTitle:"Projects", project1Title:"AI Data Analyzer", project1Desc:"A Python-based AI project for analyzing and visualizing large datasets efficiently.",
    project2Title:"Space Tech Dashboard", project2Desc:"A web dashboard visualizing satellite and space data with interactive charts.",
    viewLive:"View Live", githubRepo:"GitHub Repo", backToTop:"Back to Top"
  },
  ar: {
    home:"الرئيسية", about:"من أنا", projects:"المشاريع",
    heroTitle:"مرحبًا، أنا أحمد رشدان", heroSubtitle:"عالم بيانات ومتخصص في تقنيات الفضاء",
    viewProjects:"عرض المشاريع", aboutTitle:"من أنا",
    aboutBio:"مرحبًا، أنا أحمد رشدان، عالم بيانات محترف من مصر، متخصص في تحليل البيانات والذكاء الاصطناعي في مجال تقنيات الفضاء والأقمار الصناعية. بدأت رحلتي في مجال التكنولوجيا في سن مبكرة من خلال حبي لألعاب الفيديو وفضولي لفهم كيفية عمل الأنظمة الرقمية، مما دفعني لتعلّم البرمجة مبكرًا وبناء أساس قوي في علوم البيانات والذكاء الاصطناعي. أركز على دمج علوم البيانات مع تكنولوجيا الفضاء وتحليل الأنظمة المدارية والاستشعار عن بعد.",
    skillsTitle:"المهارات",
    projectsTitle:"المشاريع", project1Title:"محلل بيانات AI", project1Desc:"مشروع بايثون لتحليل وتصوير البيانات الكبيرة بكفاءة.",
    project2Title:"لوحة تحكم تقنيات الفضاء", project2Desc:"لوحة ويب لتصور بيانات الأقمار الصناعية والتفاعل معها.",
    viewLive:"عرض المشروع", githubRepo:"GitHub", backToTop:"العودة للأعلى"
  }
};

const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('change', (e) => {
  const lang = e.target.value;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.documentElement.dir = (lang==='ar')?'rtl':'ltr';
});
