import type { Lang } from '../i18n/ui';

export interface WorkHighlight {
  title: string;
  organization: string;
  organizationUrl?: string;
  period: string;
  description: string;
  bullets?: string[];
  tags: string[];
}

export interface ProfileData {
  name: string;
  role: string;
  location: string;
  avatar: string;
  emailUser: string;
  emailDomain: string;
  github: string;
  linkedin: string;
  cvPdfPath: string;
  tagline: string;
  bio: string;
  domainPills: string[];
  currentWork: WorkHighlight[];
  recentHighlights: WorkHighlight[];
}

export const profile: Record<Lang, ProfileData> = {
  en: {
    name: 'Simone De Bonis',
    role: 'Data Scientist',
    location: 'Torino, Italy',
    avatar: '/assets/img/posts/profile.jpg',
    emailUser: 'simonedebonis',
    emailDomain: 'outlook.com',
    github: 'https://github.com/SimoneDeBonis',
    linkedin: 'https://www.linkedin.com/in/simonedebonis/',
    cvPdfPath: '/assets/pdf/CV_Simone_De_Bonis_eng.pdf',
    tagline:
      'Data Scientist passionate about finance, energy markets, and quantitative modeling.',
    bio: 'I design and deploy production machine learning systems and quantitative forecasting models. Currently working as Data Scientist at Intesa Sanpaolo in Torino, after building energy trading forecasting pipelines at Psaier Energies.',
    domainPills: [
      'Data Science',
      'AI',
      'Quantitative Modeling',
      'Financial & Energy Markets',
    ],
    currentWork: [
      {
        title: 'Data Scientist',
        organization: 'Intesa Sanpaolo',
        period: 'Jan 2025 – Present · Torino, IT',
        description:
          'Engineering, scaling, and industrializing machine learning models and data-driven pipelines within Italy’s leading banking group.',
        tags: ['Machine Learning', 'MLOps', 'Python', 'Quantitative Finance'],
      },
      {
        title: 'Data Scientist (Energy Trading)',
        organization: 'Psaier Energies',
        period: 'Oct 2023 – Dec 2024 · Bressanone, IT',
        description:
          'Worked in the energy trading department developing forecasting models and cloud data pipelines for the Italian energy market:',
        bullets: [
          'Developed and monitored statistical and ML models for Italian energy market forecasts and analysis.',
          'Migrated legacy data workflows from on-premises infrastructure to Microsoft Azure.',
          'Analyzed large-scale market and consumption datasets using Python and SQL.',
          'Built real-time Power BI dashboards to support energy trading decisions.',
        ],
        tags: ['Energy Forecasting', 'Azure', 'Python', 'SQL', 'Power BI'],
      },
    ],
    recentHighlights: [
      {
        title: 'Master’s Thesis — Automotive Predictive Maintenance',
        organization: 'Università Politecnica delle Marche (UNIVPM)',
        period: '2023 · Ancona, IT',
        description:
          'Developed a Python ensemble framework integrating knowledge from multiple machine learning models on telemetry data to predict and explain engine failures for a leading automotive manufacturer.',
        tags: ['Predictive Maintenance', 'Ensemble Learning', 'Python', 'Telemetry'],
      },
      {
        title: 'Multivariate Time Series Anomaly Detection',
        organization: 'Big Data Lab',
        organizationUrl: 'https://www.bigdata-lab.it',
        period: '2023 · Project Work',
        description:
          'Applied advanced machine learning techniques for multivariate anomaly detection on high-frequency time series extracted and preprocessed from enterprise server logs.',
        tags: ['Anomaly Detection', 'Time Series', 'Log Analytics'],
      },
      {
        title: 'Early Warning System for Italian Municipalities',
        organization: 'University Research Project',
        period: '2023 · Data Science',
        description:
          'Collaborated on an early warning classification system using Support Vector Machines (SVM), Multi-Layer Perceptrons (MLP), and class-balancing techniques (SMOTE & ROSE) to predict financial default in Italian municipalities.',
        tags: ['SVM', 'MLP', 'SMOTE / ROSE', 'Credit Risk'],
      },
    ],
  },
  it: {
    name: 'Simone De Bonis',
    role: 'Data Scientist',
    location: 'Torino, Italia',
    avatar: '/assets/img/posts/profile.jpg',
    emailUser: 'simonedebonis',
    emailDomain: 'outlook.com',
    github: 'https://github.com/SimoneDeBonis',
    linkedin: 'https://www.linkedin.com/in/simonedebonis/',
    cvPdfPath: '/assets/pdf/CV_Simone_De_Bonis_ita.pdf',
    tagline:
      'Data Scientist appassionato di finanza, mercati energetici e modellazione quantitativa.',
    bio: 'Progetto e porto in produzione sistemi di Machine Learning e modelli quantitativi di previsione. Attualmente lavoro come Data Scientist in Intesa Sanpaolo a Torino, dopo aver sviluppato modelli predittivi per il trading energetico presso Psaier Energies.',
    domainPills: [
      'Machine Learning Engineering',
      'Modellazione Quantitativa',
      'Mercati Finanziari ed Energetici',
      'Serie Storiche & Anomaly Detection',
    ],
    currentWork: [
      {
        title: 'Data Scientist',
        organization: 'Intesa Sanpaolo',
        period: 'Gen 2025 – Presente · Torino, IT',
        description:
          'Sviluppo, scalabilità e messa in produzione di modelli di Machine Learning e pipeline dati in ambito bancario e finanziario.',
        tags: ['Machine Learning', 'MLOps', 'Python', 'Finanza Quantitativa'],
      },
      {
        title: 'Data Scientist (Energy Trading)',
        organization: 'Psaier Energies',
        period: 'Ott 2023 – Dic 2024 · Bressanone, IT',
        description:
          'Nel dipartimento di energy trading mi sono occupato di modelli previsionali e architetture dati cloud per il mercato elettrico italiano:',
        bullets: [
          'Sviluppo e monitoraggio di modelli per la previsione e l’analisi del mercato energetico italiano.',
          'Migrazione dei processi dati legacy da infrastruttura on-premises a Microsoft Azure.',
          'Analisi di dati di mercato e consumo tramite Python e SQL.',
          'Creazione di dashboard Power BI per il monitoraggio in tempo reale a supporto del trading.',
        ],
        tags: ['Forecasting Energetico', 'Azure', 'Python', 'SQL', 'Power BI'],
      },
    ],
    recentHighlights: [
      {
        title: 'Tesi Magistrale — Manutenzione Predittiva Automotive',
        organization: 'Università Politecnica delle Marche (UNIVPM)',
        period: '2023 · Ancona, IT',
        description:
          'Sviluppo di un framework in Python per integrare la conoscenza di diversi modelli di machine learning applicati a dati telemetrici, al fine di prevedere e comprendere i guasti ai motori per un’importante azienda automobilistica.',
        tags: ['Manutenzione Predittiva', 'Ensemble Learning', 'Python', 'Telemetria'],
      },
      {
        title: 'Anomaly Detection Multivariata su Serie Storiche',
        organization: 'Big Data Lab',
        organizationUrl: 'https://www.bigdata-lab.it',
        period: '2023 · Project Work',
        description:
          'Applicazione di tecniche avanzate di machine learning per la rilevazione di anomalie multivariate in serie storiche estratte e preprocessate da log di server.',
        tags: ['Anomaly Detection', 'Serie Storiche', 'Log Analytics'],
      },
      {
        title: 'Sistema di Early Warning per i Comuni Italiani',
        organization: 'Progetto Universitario',
        period: '2023 · Data Science',
        description:
          'Sviluppo in team di un sistema di early warning basato su Support Vector Machine (SVM), Multi-Layer Perceptron (MLP) e tecniche di bilanciamento (SMOTE & ROSE) per prevenire il dissesto finanziario dei comuni italiani.',
        tags: ['SVM', 'MLP', 'SMOTE / ROSE', 'Rischio di Credito'],
      },
    ],
  },
};
