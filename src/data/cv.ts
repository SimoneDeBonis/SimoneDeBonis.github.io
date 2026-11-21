import type { Lang } from '../i18n/ui';

export interface CvItem {
  title: string;
  organization: string;
  location: string;
  period: string;
  description?: string;
  skills?: string[];
  badgeUrl?: string;
}

export interface CvData {
  pdfPath: string;
  experience: CvItem[];
  education: CvItem[];
  courses: CvItem[];
}

export const cvData: Record<Lang, CvData> = {
  en: {
    pdfPath: '/assets/pdf/CV_Simone_De_Bonis_eng.pdf',
    experience: [
      {
        title: 'Machine Learning Engineer',
        organization: 'Intesa Sanpaolo',
        location: 'Torino, IT',
        period: 'Jan 2025 – Present',
        description:
          'Designing, engineering, and maintaining production machine learning solutions and data pipelines.',
        skills: ['Machine Learning', 'Python', 'MLOps', 'Data Engineering'],
      },
      {
        title: 'Data Scientist',
        organization: 'Psaier Energies',
        location: 'Bressanone, IT',
        period: 'Oct 2023 – Dec 2024',
        description:
          'Built forecasting models for Italian energy trading, migrated legacy pipelines to Microsoft Azure, and developed real-time Power BI decision dashboards.',
        skills: ['Azure', 'Power BI', 'Python', 'SQL', 'Time Series Forecasting'],
      },
      {
        title: 'Research Internship',
        organization: 'Università Politecnica delle Marche (UNIVPM)',
        location: 'Ancona, IT',
        period: 'Feb 2023 – Oct 2023',
        description:
          'Research on ensemble machine learning models for predictive maintenance and engine fault diagnosis on automotive telemetry data.',
        skills: ['Python', 'Machine Learning', 'Predictive Maintenance'],
      },
      {
        title: 'Freelancer',
        organization: 'Independent',
        location: 'Remote',
        period: 'Nov 2022 – Feb 2023',
        description: 'Data analysis and quantitative modeling projects.',
        skills: ['Python', 'Data Analysis'],
      },
    ],
    education: [
      {
        title: 'M.Sc. in Data Science for Economics and Business',
        organization: 'Università Politecnica delle Marche (UNIVPM)',
        location: 'Ancona, IT',
        period: '2021 – 2023',
        description: 'Computational Statistics, Big Data Engineering, Big Data Econometrics.',
        skills: ['Computational Statistics', 'Big Data Engineering', 'Econometrics'],
      },
      {
        title: 'B.Sc. in Economics, Markets and Institutions',
        organization: 'Alma Mater Studiorum – Università di Bologna',
        location: 'Bologna, IT',
        period: '2017 – 2021',
        description: 'Statistics, Econometrics, Corporate Finance.',
        skills: ['Statistics', 'Econometrics', 'Corporate Finance'],
      },
      {
        title: 'Scientific High School Diploma (Liceo Scientifico)',
        organization: 'Liceo Scientifico',
        location: 'Ferrara, IT',
        period: '2012 – 2017',
        description: 'Main focus on physics, mathematics, and computer science.',
      },
    ],
    courses: [
      {
        title: 'Artificial Intelligence & Machine Learning',
        organization: 'IFOA',
        location: '60 hours',
        period: 'Certified',
        badgeUrl:
          'https://app.myopenbadge.com/receive/FvZtgrxBNEc-6e7e1bc881c70fd0eeed0ab7f35f3b0c-d3m8KeZqx-51641983520/heIx-44b5361112e0b13a7cb64e3e1a062ef0-lqmF5u7A-8/public',
      },
      {
        title: 'Deep Learning Applications',
        organization: 'IFOA',
        location: '60 hours',
        period: 'Certified',
        badgeUrl:
          'https://app.myopenbadge.com/receive/FvZtgrxBNEc-6e7e1bc881c70fd0eeed0ab7f35f3b0c-d3m8KeZqx-51641983520/BiIfnvezJ-0034b39650acd254eb26916bcabc6800-3cUvBJxMthsm-2/public',
      },
      {
        title: 'Marketing Analytics & Business Intelligence',
        organization: 'Forpin',
        location: '120 hours',
        period: 'Certified',
        badgeUrl:
          'https://app.myopenbadge.com/receive/FvZtgrxBNEc-6e7e1bc881c70fd0eeed0ab7f35f3b0c-d3m8KeZqx-51641983520/grhHFS-9be5fb854c73a297d744009314116fbc-9NvfF3GcXQ-2/public',
      },
    ],
  },
  it: {
    pdfPath: '/assets/pdf/CV_Simone_De_Bonis_ita.pdf',
    experience: [
      {
        title: 'Machine Learning Engineer',
        organization: 'Intesa Sanpaolo',
        location: 'Torino, IT',
        period: 'Gen 2025 – Presente',
        description:
          'Progettazione, ingegnerizzazione e manutenzione di modelli di Machine Learning e pipeline dati in produzione.',
        skills: ['Machine Learning', 'Python', 'MLOps', 'Data Engineering'],
      },
      {
        title: 'Data Scientist',
        organization: 'Psaier Energies',
        location: 'Bressanone, IT',
        period: 'Ott 2023 – Dic 2024',
        description:
          'Sviluppo di modelli di forecasting per il trading energetico, migrazione dei flussi dati su Microsoft Azure e realizzazione di dashboard Power BI.',
        skills: ['Azure', 'Power BI', 'Python', 'SQL', 'Time Series Forecasting'],
      },
      {
        title: 'Tirocinio di Ricerca',
        organization: 'Università Politecnica delle Marche (UNIVPM)',
        location: 'Ancona, IT',
        period: 'Feb 2023 – Ott 2023',
        description:
          'Ricerca su modelli ensemble di Machine Learning per la manutenzione predittiva e la diagnosi dei guasti su dati telemetrici automotive.',
        skills: ['Python', 'Machine Learning', 'Manutenzione Predittiva'],
      },
      {
        title: 'Freelancer',
        organization: 'Indipendente',
        location: 'Remoto',
        period: 'Nov 2022 – Feb 2023',
        description: 'Progetti di analisi dati e modellazione quantitativa.',
        skills: ['Python', 'Data Analysis'],
      },
    ],
    education: [
      {
        title: "Laurea Magistrale in Data Science per l'Economia e le Imprese",
        organization: 'Università Politecnica delle Marche (UNIVPM)',
        location: 'Ancona, IT',
        period: '2021 – 2023',
        description: 'Statistica Computazionale, Big Data Engineering, Big Data Econometrics.',
        skills: ['Computational Statistics', 'Big Data Engineering', 'Econometrics'],
      },
      {
        title: 'Laurea Triennale in Economia, Mercati e Istituzioni',
        organization: 'Alma Mater Studiorum – Università di Bologna',
        location: 'Bologna, IT',
        period: '2017 – 2021',
        description: 'Statistica, Econometria, Finanza Aziendale.',
        skills: ['Statistica', 'Econometria', 'Finanza Aziendale'],
      },
      {
        title: 'Diploma di Liceo Scientifico',
        organization: 'Liceo Scientifico',
        location: 'Ferrara, IT',
        period: '2012 – 2017',
        description: 'Interessi principali in fisica, matematica e informatica.',
      },
    ],
    courses: [
      {
        title: 'Artificial Intelligence & Machine Learning',
        organization: 'IFOA',
        location: '60 ore',
        period: 'Certificato',
        badgeUrl:
          'https://app.myopenbadge.com/receive/FvZtgrxBNEc-6e7e1bc881c70fd0eeed0ab7f35f3b0c-d3m8KeZqx-51641983520/heIx-44b5361112e0b13a7cb64e3e1a062ef0-lqmF5u7A-8/public',
      },
      {
        title: 'Applicazioni di Deep Learning',
        organization: 'IFOA',
        location: '60 ore',
        period: 'Certificato',
        badgeUrl:
          'https://app.myopenbadge.com/receive/FvZtgrxBNEc-6e7e1bc881c70fd0eeed0ab7f35f3b0c-d3m8KeZqx-51641983520/BiIfnvezJ-0034b39650acd254eb26916bcabc6800-3cUvBJxMthsm-2/public',
      },
      {
        title: 'Marketing Analytics & Business Intelligence',
        organization: 'Forpin',
        location: '120 ore',
        period: 'Certificato',
        badgeUrl:
          'https://app.myopenbadge.com/receive/FvZtgrxBNEc-6e7e1bc881c70fd0eeed0ab7f35f3b0c-d3m8KeZqx-51641983520/grhHFS-9be5fb854c73a297d744009314116fbc-9NvfF3GcXQ-2/public',
      },
    ],
  },
};
