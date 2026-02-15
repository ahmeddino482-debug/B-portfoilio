// ===== Dark/Light Mode =====
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});
if(localStorage.getItem('theme') === 'dark') body.classList.add('dark-mode');

// ===== Language Toggle =====
const langToggle = document.getElementById('lang-toggle');
const elements = document.querySelectorAll('[data-i18n]');
const placeholders = document.querySelectorAll('[data-i18n-placeholder]');

const translations = {
  en: {
    home:"Home", about:"About", projects:"Projects", contact:"Contact",
    heroTitle:"Hi, I'm Ahmed Rashdan", heroSubtitle:"Data Scientist & Space Technology Enthusiast",
    viewProjects:"View Projects", aboutTitle:"About Me",
    aboutBio:"I'm Ahmed Rashdan, a professional Data Scientist from Egypt specializing in data analysis and AI in space and satellite technology. My journey in tech began with my love for video games and curiosity about digital systems, leading me to build a strong foundation in data science and AI. I focus on integrating data science with space tech, analyzing orbital systems, and working with remote sensing data.",
    skillsTitle:"Skills", projectsTitle:"Projects",
    project1Title:"AI Data Analyzer", project1Desc:"A Python-based AI project for analyzing and visualizing large datasets efficiently.",
    project2Title:"Space Tech Dashboard", project2Desc:"A web dashboard visualizing satellite and space data with interactive charts.",
    viewLive:"View Live", githubRepo:"GitHub Repo",
    contactTitle:"Contact Me", namePlaceholder:"Name", emailPlaceholder:"Email",
    subjectPlaceholder:"Subject", messagePlaceholder:"Message", sendMessage:"Send",
    backToTop:"Back to Top"
  },
  ar: {
    home:"الرئيسية", about:"من أنا", projects:"المشاريع", contact:"تواصل معي",
    heroTitle:"مرحبًا، أنا أحمد رشدان", heroSubtitle:"عالم بيانات متخصص في تقنيات الفضاء",
    viewProjects:"مشاهدة المشاريع", aboutTitle:"من أنا",
    aboutBio:"مرحبًا، أنا أحمد رشدان، عالم بيانات محترف من مصر، متخصص في تحليل البيانات والذكاء الاصطناعي في مجال تقنيات الفضاء والأقمار الصناعية. بدأت رحلتي في مجال التكنولوجيا في سن مبكرة من خلال حبي لألعاب الفيديو وفضولي لفهم كيفية عمل الأنظمة الرقمية، مما دفعني لتعلّم البرمجة مبكرًا وبناء أساس قوي في علوم البيانات والذكاء الاصطناعي. أركز على دمج علوم البيانات مع تكنولوجيا الفضاء، وتحليل الأنظمة المدارية، والعمل مع بيانات الاستشعار عن بُعد.",
    skillsTitle:"المهارات", projectsTitle:"المشاريع",
    project1Title:"محلل بيانات الذكاء الاصطناعي", project1Desc:"مشروع بايثون لتحليل وتصور مجموعات البيانات الكبيرة بكفاءة.",
    project2Title:"لوحة تحكم تكنولوجيا الفضاء", project2Desc:"لوحة ويب لتصور بيانات الأقمار الصناعية والبيئة الفضائية بطريقة تفاعلية.",
    viewLive:"عرض مباشر", githubRepo:"مستودع GitHub",
    contactTitle:"تواصل معي", namePlaceholder:"الاسم", emailPlaceholder:"البريد الإلكتروني",
    subjectPlaceholder:"الموضوع", messagePlaceholder:"الرسالة", sendMessage:"إرسال",
    backToTop:"العودة للأعلى"
  }
};

langToggle.addEventListener('change', e => {
  const lang = e.target.value;
  elements.forEach(el => { const key=el.dataset.i18n; if(translations[lang][key]) el.textContent=translations[lang][key]; });
  placeholders.forEach(el => { const key=el.dataset.i18nPlaceholder; if(translations[lang][key]) el.placeholder=translations[lang][key]; });
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
});
