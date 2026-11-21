export type Lang = 'en' | 'it';

export const languages: Record<Lang, string> = {
  en: 'English',
  it: 'Italiano',
};

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.cv': 'CV',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.archive': 'Archive',
    'nav.search': 'Search',
    'nav.searchPlaceholder': 'Search articles, projects, or CV keywords...',
    'nav.themeToggle': 'Toggle color theme',
    'hero.status': 'Machine Learning Engineer @ Intesa Sanpaolo',
    'hero.downloadCv': 'Download CV (PDF)',
    'hero.viewProjects': 'Explore Projects',
    'hero.copyEmail': 'Copy Email',
    'hero.emailCopied': 'Copied!',
    'home.bentoExperience': 'Experience',
    'home.bentoFullCv': 'Full CV →',
    'home.bentoFeaturedProject': 'Featured Project',
    'home.bentoAllProjects': 'All projects →',
    'home.bentoLatestPost': 'Latest Article',
    'home.bentoAllPosts': 'All articles →',
    'home.currentSection': 'What I’m Working On',
    'home.recentSection': 'Recent Work & Research Highlights',
    'home.recentPosts': 'Latest Articles',
    'home.viewArchive': 'View Full Archive →',
    'cv.title': 'Curriculum Vitae',
    'cv.subtitle': 'Professional experience, academic background, and verified certifications.',
    'cv.downloadPdf': 'Download PDF Resume',
    'cv.experience': 'Experience',
    'cv.education': 'Education',
    'cv.courses': 'Courses & Certifications',
    'cv.verifyBadge': 'Verify OpenBadge ↗',
    'projects.title': 'Projects',
    'projects.subtitle': 'Selected works in Machine Learning, Data Science, and Interactive Data Visualization.',
    'projects.filterAll': 'All',
    'projects.readMore': 'Read Full Case Study →',
    'projects.backToProjects': '← Back to Projects',
    'projects.originalDemo': 'View Interactive Dashboard / Repo ↗',
    'blog.title': 'Technical Blog',
    'blog.subtitle': 'Notes and articles on Machine Learning, Statistics, Quantitative Modeling, and Linear Algebra.',
    'blog.filterAllTags': 'All Topics',
    'blog.filterAllYears': 'All Years',
    'blog.minRead': 'min read',
    'blog.toc': 'On this page',
    'blog.share': 'Share article',
    'blog.copyLink': 'Copy link',
    'blog.backToBlog': '← Back to Blog',
    'archive.title': 'Article Archive',
    'archive.subtitle': 'Chronological index of all published articles.',
    'footer.rights': 'Some rights reserved under',
    'footer.securityNote': 'Static, cookieless & privacy-first personal website.',
  },
  it: {
    'nav.home': 'Home',
    'nav.cv': 'CV',
    'nav.projects': 'Progetti',
    'nav.blog': 'Blog',
    'nav.archive': 'Archivio',
    'nav.search': 'Cerca',
    'nav.searchPlaceholder': 'Cerca articoli, progetti o competenze nel CV...',
    'nav.themeToggle': 'Cambia tema colore',
    'hero.status': 'Machine Learning Engineer @ Intesa Sanpaolo',
    'hero.downloadCv': 'Scarica CV (PDF)',
    'hero.viewProjects': 'Esplora i Progetti',
    'hero.copyEmail': 'Copia Email',
    'hero.emailCopied': 'Copiata!',
    'home.bentoExperience': 'Esperienza',
    'home.bentoFullCv': 'CV completo →',
    'home.bentoFeaturedProject': 'Progetto in Evidenza',
    'home.bentoAllProjects': 'Tutti i progetti →',
    'home.bentoLatestPost': 'Ultimo Articolo',
    'home.bentoAllPosts': 'Tutti gli articoli →',
    'home.currentSection': 'Di Cosa Mi Occupo',
    'home.recentSection': 'Progetti e Ricerca Recenti',
    'home.recentPosts': 'Ultimi Articoli',
    'home.viewArchive': 'Vai all’Archivio Completo →',
    'cv.title': 'Curriculum Vitae',
    'cv.subtitle': 'Esperienza professionale, percorso accademico e certificazioni verificate.',
    'cv.downloadPdf': 'Scarica CV in PDF',
    'cv.experience': 'Esperienza Professionale',
    'cv.education': 'Istruzione',
    'cv.courses': 'Formazione e Certificazioni',
    'cv.verifyBadge': 'Verifica OpenBadge ↗',
    'projects.title': 'Progetti',
    'projects.subtitle': 'Progetti selezionati di Machine Learning, Data Science e Data Visualization interattiva.',
    'projects.filterAll': 'Tutti',
    'projects.readMore': 'Leggi Case Study Completo →',
    'projects.backToProjects': '← Torna ai Progetti',
    'projects.originalDemo': 'Apri Dashboard / Repository ↗',
    'blog.title': 'Blog Tecnico',
    'blog.subtitle': 'Articoli e approfondimenti su Machine Learning, Statistica, Modellazione Quantitativa e Algebra Lineare.',
    'blog.filterAllTags': 'Tutti i Temi',
    'blog.filterAllYears': 'Tutti gli Anni',
    'blog.minRead': 'min di lettura',
    'blog.toc': 'In questa pagina',
    'blog.share': 'Condividi articolo',
    'blog.copyLink': 'Copia link',
    'blog.backToBlog': '← Torna al Blog',
    'archive.title': 'Archivio Articoli',
    'archive.subtitle': 'Indice cronologico di tutti gli articoli pubblicati.',
    'footer.rights': 'Alcuni diritti riservati sotto licenza',
    'footer.securityNote': 'Sito statico, senza cookie di tracciamento e orientato alla privacy.',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui['en']): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, targetLang: Lang): string {
  // Normalize leading/trailing slashes
  const clean = path.replace(/^\/it(\/|$)/, '/').replace(/\/+/g, '/');
  if (targetLang === 'en') {
    return clean === '' ? '/' : clean;
  }
  return clean === '/' ? '/it' : `/it${clean}`;
}
