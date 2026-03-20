import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// EN
import enLayout from './assets/locales/en/layout.json';
import enExperiences from './assets/locales/en/resume/experiences.json';
import enProjects from './assets/locales/en/resume/projects.json';
import enEducation from './assets/locales/en/resume/education.json';
import enSkills from './assets/locales/en/resume/skills.json';
import enAbout from './assets/locales/en/resume/about.json';
import enHome from './assets/locales/en/resume/home.json';
import enSocial from './assets/locales/en/resume/social.json';
import enNavbar from './assets/locales/en/resume/navbar.json';

// TR
import trLayout from './assets/locales/tr/layout.json';
import trExperiences from './assets/locales/tr/resume/experiences.json';
import trProjects from './assets/locales/tr/resume/projects.json';
import trEducation from './assets/locales/tr/resume/education.json';
import trSkills from './assets/locales/tr/resume/skills.json';
import trAbout from './assets/locales/tr/resume/about.json';
import trHome from './assets/locales/tr/resume/home.json';
import trSocial from './assets/locales/tr/resume/social.json';
import trNavbar from './assets/locales/tr/resume/navbar.json';

// FA
import faLayout from './assets/locales/fa/layout.json';
import faExperiences from './assets/locales/fa/resume/experiences.json';
import faProjects from './assets/locales/fa/resume/projects.json';
import faEducation from './assets/locales/fa/resume/education.json';
import faSkills from './assets/locales/fa/resume/skills.json';
import faAbout from './assets/locales/fa/resume/about.json';
import faHome from './assets/locales/fa/resume/home.json';
import faSocial from './assets/locales/fa/resume/social.json';
import faNavbar from './assets/locales/fa/resume/navbar.json';

const resources = {
  en: {
    layout: enLayout,
    resExperiences: enExperiences,
    resProjects: enProjects,
    resEducation: enEducation,
    resSkills: enSkills,
    resAbout: enAbout,
    resHome: enHome,
    resSocial: enSocial,
    resNavbar: enNavbar,
  },
  tr: {
    layout: trLayout,
    resExperiences: trExperiences,
    resProjects: trProjects,
    resEducation: trEducation,
    resSkills: trSkills,
    resAbout: trAbout,
    resHome: trHome,
    resSocial: trSocial,
    resNavbar: trNavbar,
  },
  fa: {
    layout: faLayout,
    resExperiences: faExperiences,
    resProjects: faProjects,
    resEducation: faEducation,
    resSkills: faSkills,
    resAbout: faAbout,
    resHome: faHome,
    resSocial: faSocial,
    resNavbar: faNavbar,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'tr', 'fa'],
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

// Handle RTL layout shifts when Farsi is strictly active
i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.dir = lng === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  }
});

// Set initial direction block explicitly
if (typeof document !== 'undefined') {
  document.documentElement.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.lang = i18n.language || 'en';
}

export default i18n;
