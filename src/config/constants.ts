// src/config/constants.ts

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const PROFILE = {
  name: "Iván Verano Peña",
  headline: "Desarrollador Java | Formándome en IA y DevSecOps",
  location: "Düsseldorf, Renania Septentrional-Westfalia, Alemania",
  email: "ivanverano94@gmail.com",
  summary:
    "Desarrollador de software con experiencia en entornos profesionales reales, trabajando en proyectos de escritorio, web y mobile para Grupo Oesía y Sistemas de Facturaciones Electrónicos. He participado en el ciclo completo de desarrollo con Java, Android, C# y bases de datos relacionales (SQL, PL/SQL y Oracle). Actualmente curso el Máster en Desarrollo de Software con IA de BIG School, dirigido por Brais Moure, profundizando en integración de LLMs, agentes de IA, arquitectura de software, seguridad aplicada y despliegue en cloud.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/ivan-verano-pena" },
  { platform: "GitHub", url: "https://github.com/IvanVeranoV" },
];

export const PROJECTS: Project[] = [
  {
    title: "Event Horizon · Cuenta atrás de eventos",
    description:
      "Aplicación web para gestionar cuentas atrás de eventos en tiempo real de forma local, con opciones para exportar e importar los eventos entre dispositivos.",
    tags: ["JavaScript", "Vercel", "Almacenamiento local"],
    githubUrl: "https://github.com/IvanVeranoV/CuentaAtrasEventos",
    liveUrl: "https://cuenta-atras-eventos.vercel.app",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Sistemas de Facturaciones Electrónicos",
    role: "Analista programador",
    period: "Julio de 2018 - enero de 2022",
    location: "Madrid, Comunidad de Madrid, España",
    responsibilities: [
      "Desarrollo de programas web y de escritorio en Java.",
      "Desarrollo de aplicaciones para Android y aplicaciones básicas en Xamarin e iOS.",
      "Gestión de datos con Microsoft SQL Server, MySQL Workbench e Hibernate.",
    ],
  },
  {
    company: "Grupo Oesía",
    role: "Técnico programador junior",
    period: "Septiembre de 2016 - julio de 2018",
    location: "Rivas-Vaciamadrid, Madrid, España",
    responsibilities: [
      "Resolución de incidencias sobre bases de datos Oracle y peticiones vía BMC Remedy.",
      "Desarrollo de Web Services y recolectores de errores con Java, Axis2 y Apache Tomcat.",
      "Mantenimiento de aplicaciones Java y PHP, scripts Unix y documentación.",
    ],
  },
  {
    company: "Grupo Oesía",
    role: "Junior Tester",
    period: "Septiembre de 2016 - diciembre de 2016",
    location: "Madrid y alrededores, España",
    responsibilities: [
      "Automatización de pruebas funcionales en dispositivos Android para una aplicación de Yoigo con Java, Eclipse, Robotium y Appium.",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Máster en Desarrollo de Software con IA",
    institution: "BIG school",
    period: "Marzo de 2026 · En curso",
  },
  {
    degree: "Programador Python",
    institution: "Tokio School",
    period: "Enero de 2022 - agosto de 2022",
  },
  {
    degree:
      "Formación de Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
    institution: "Centro de Formación Profesional Juan XXIII",
    period: "2014 - 2016",
  },
  {
    degree: "Bachillerato de Ciencias Sociales",
    institution: "Liceo Villa Fontana",
    period: "2011 - 2014",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["JavaScript", "PHP"],
  },
  {
    name: "Backend",
    skills: ["Java", "C#", "Python", "Apache Tomcat", "Axis2"],
  },
  {
    name: "Mobile",
    skills: ["Android", "Xamarin", "iOS"],
  },
  {
    name: "Datos",
    skills: [
      "SQL",
      "PL/SQL",
      "Oracle",
      "Microsoft SQL Server",
      "MySQL",
      "Hibernate",
    ],
  },
  {
    name: "IA y DevSecOps",
    skills: [
      "Desarrollo de software con IA",
      "LLMs",
      "Agentes de IA",
      "DevSecOps",
      "Cloud",
      "Unix",
    ],
  },
  {
    name: "Testing",
    skills: ["Robotium", "Appium", "Eclipse"],
  },
  {
    name: "Soft skills",
    skills: ["Resolución de incidencias", "Documentación técnica"],
  },
];
