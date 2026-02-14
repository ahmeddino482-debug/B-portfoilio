// ========== Dark / Light Mode ==========
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if(currentTheme === 'dark') {
    document.body.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    let theme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// ========== Language Switcher (EN/AR) ==========
const langSelect = document.getElementById('lang-select');
const i18nTexts = {
    en: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        hero_heading: "Hi, I'm [Your Name]",
        hero_tagline: "I build innovative solutions in AI, Automation, and Web Development.",
        hero_cta: "View Projects",
        about_heading: "About Me",
        about_bio: "I am a passionate [Your Profession] with experience in AI, Automation, Web Development, and Robotics.",
        skills_heading: "Skills",
        projects_heading: "Projects",
        view_live: "View Live",
        view_code: "GitHub Repo",
        contact_heading: "Contact Me",
        send_btn: "Send"
    },
    ar: {
        home: "الرئيسية",
        about: "من أنا",
        projects: "المشاريع",
        contact: "اتصل بي",
        hero_heading: "مرحبًا، أنا [اسمك]",
        hero_tagline: "أبني حلول مبتكرة في الذكاء الاصطناعي، الأتمتة، وتطوير الويب.",
        hero_cta: "عرض المشاريع",
        about_heading: "من أنا",
        about_bio: "أنا [مهنتك] شغوف ولدي خبرة في الذكاء الاصطناعي، الأتمتة، تطوير الويب، والروبوتات.",
        skills_heading: "المهارات",
        projects_heading: "المشاريع",
        view_live: "عرض مباشر",
        view_code: "مستودع GitHub",
        contact_heading: "اتصل بي",
        send_btn: "إرسال"
    }
};

function updateLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = i18nTexts[lang][key];
    });
}

// Initialize
const savedLang = localStorage.getItem('lang') || 'en';
langSelect.value = savedLang;
updateLanguage(savedLang);

langSelect.addEventListener('change', () => {
    const lang = langSelect.value;
    updateLanguage(lang);
    localStorage.setItem('lang', lang);
});

// ========== Scroll Animations ==========
const faders = document.querySelectorAll('#about, #projects, #contact, #hero .hero-content');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
