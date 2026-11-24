// src/config/constants.ts
// Fuente central del contenido del portfolio. Mantener aquí los datos y
// presentar cada bloque desde las páginas/componentes correspondientes.

export interface Project {
  title: string;
  status: string;
  description: string;
  context?: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface ProfessionalProject {
  name: string;
  description: string;
  contributions: string[];
  technologies: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  projects: ProfessionalProject[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  result?: string;
  status?: string;
  description: string;
  subjects: string[];
  finalProject?: string;
}

export interface Skill {
  name: string;
  context: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Language {
  name: string;
  level: string;
  certification?: string;
  notes?: string;
}

export const PROFILE = {
  name: "Iván Verano Peña",
  headline:
    "Desarrollador de software · Backend e integración de sistemas · Evolución hacia Python e IA",
  location: "Actualmente en Düsseldorf, Alemania · Regreso a España previsto para diciembre de 2026",
  email: "ivanverano94@gmail.com",
  summary:
    "Desarrollador de software con experiencia profesional en aplicaciones empresariales, integración de sistemas y soluciones web, de escritorio y móviles. He trabajado principalmente con Java, bases de datos relacionales y servicios web, participando en desarrollo, mantenimiento, pruebas, resolución de incidencias y soporte a producción. Actualmente amplío mi formación hacia Python y el desarrollo de software con IA, combinando formación estructurada con proyectos personales.",
  professionalFocus:
    "Mi trayectoria se ha desarrollado en equipos técnicos pequeños y proyectos con tecnologías diversas. Me interesa construir software mantenible, entender el problema antes de implementar una solución y utilizar las herramientas de IA como apoyo al desarrollo, manteniendo la revisión técnica y el criterio sobre el resultado.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/ivan-verano-pena" },
  { platform: "GitHub", url: "https://github.com/IvanVeranoV" },
];

export const PROJECTS: Project[] = [
  {
    title: "Telegram Weather Bot",
    status: "Proyecto personal · Desplegado",
    description:
      "Bot de Telegram desarrollado en Python para consultar información meteorológica. Integra geolocalización y datos de Open-Meteo para responder a las consultas de los usuarios.",
    context:
      "Proyecto personal orientado a practicar diseño modular, integración con APIs externas, automatización de pruebas y despliegue de un servicio backend.",
    features: [
      "Consulta meteorológica mediante una conversación con el bot de Telegram.",
      "Obtención de ubicación para contextualizar las consultas.",
      "Integración con Open-Meteo como proveedor de datos meteorológicos.",
      "Suite automatizada de 93 pruebas que pasó correctamente en la última validación del proyecto.",
      "Análisis opcional apoyado en Gemini, con control de tiempos de espera.",
      "Despliegue del servicio en Render, región de Frankfurt.",
    ],
    technologies: ["Python", "Telegram Bot API", "Open-Meteo", "pytest", "Render"],
  },
  {
    title: "Event Horizon · Cuenta atrás de eventos",
    status: "Proyecto personal · Publicado",
    description:
      "Aplicación web para crear y seguir eventos importantes mediante cuentas atrás. Permite personalizar cada evento y conservar o transferir los datos entre dispositivos.",
    features: [
      "Creación de eventos con título, fecha e imagen.",
      "Visualización de la cuenta atrás en tiempo real.",
      "Persistencia de eventos en el almacenamiento local del navegador.",
      "Importación y exportación de los eventos mediante archivos JSON.",
      "Aplicación desplegada y utilizada en un entorno familiar.",
    ],
    technologies: ["React", "TypeScript", "Vite", "LocalStorage", "JSON", "Vercel"],
    githubUrl: "https://github.com/IvanVeranoV/CuentaAtrasEventos",
    liveUrl: "https://cuenta-atras-eventos.vercel.app",
  },
  {
    title: "AppDietas",
    status: "Proyecto personal y TFM · En desarrollo",
    description:
      "Aplicación web familiar para organizar recetas, planificar menús semanales y generar listas de la compra a partir de los platos seleccionados. Es el proyecto práctico sobre el que se está desarrollando el Trabajo de Fin de Máster.",
    context:
      "El alcance contempla una gestión de ingredientes y recetas, planificación manual y generación aleatoria de menús, además de una lista de compra agrupada por departamentos y adaptada a unidades o envases completos.",
    features: [
      "Gestión de ingredientes, recetas y cantidades asociadas.",
      "Organización de ingredientes por categorías o departamentos de supermercado.",
      "Planificación manual de menús semanales y generación aleatoria como funcionalidad prevista.",
      "Generación de una lista de la compra a partir del menú seleccionado.",
      "Diseño del generador con criterios de variedad y equilibrio nutricional.",
      "Proyecto en desarrollo: las funcionalidades descritas forman parte del alcance y no deben interpretarse como todas finalizadas.",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Vue 3", "Docker", "pytest"],
    githubUrl: "https://github.com/IvanVeranoV/AppDietas",
  },
  {
    title: "Portfolio personal",
    status: "Proyecto personal · En evolución",
    description:
      "Sitio web personal para presentar mi trayectoria, formación y proyectos de desarrollo. El contenido se centraliza en configuración TypeScript para facilitar su mantenimiento y futuras ampliaciones.",
    features: [
      "Desarrollo con Astro y TypeScript.",
      "Estilos con Tailwind CSS 4 y CSS propio.",
      "Despliegue en Vercel.",
      "Estructura preparada para ampliar el contenido y añadir idiomas en una fase posterior.",
    ],
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/IvanVeranoV/portfolio",
    liveUrl: "https://ivanverano.vercel.app",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Sistemas de Facturaciones Electrónicos · Gómez Group Metering",
    role: "Analista programador",
    period: "09/07/2018 – 03/01/2022",
    location: "España",
    summary:
      "Trabajo en el departamento interno de IT de una empresa con un equipo técnico reducido. Participación transversal en implementación, mantenimiento, pruebas, resolución de incidencias y soporte de aplicaciones en producción.",
    responsibilities: [
      "Desarrollo y mantenimiento de aplicaciones web, de escritorio y móviles.",
      "Trabajo con Java y tecnologías de interfaz web, además de aplicaciones Android y soluciones Xamarin.",
      "Integración con bases de datos relacionales y servicios ya existentes.",
      "Análisis de incidencias, pruebas funcionales y evolución de aplicaciones en producción.",
      "Colaboración con otros desarrolladores, adaptando el alcance de cada contribución a la responsabilidad real dentro del proyecto.",
    ],
    projects: [
      {
        name: "Lectura remota de contadores",
        description:
          "Sistema relacionado con la recepción e interpretación de lecturas de contadores mediante comunicaciones por radio y repetidores.",
        contributions: [
          "Trabajo con tramas hexadecimales y análisis de la información recibida para interpretar las lecturas.",
          "Participación en el desarrollo, evolución y soporte de la solución.",
          "Uso de scripts de shell, tareas programadas mediante crontab y transferencias FTP en el entorno Linux/Unix.",
          "Trabajo con SQL Server y bases de datos SQLite locales.",
        ],
        technologies: ["Java", "Linux", "Shell", "crontab", "FTP", "SQL Server", "SQLite"],
      },
      {
        name: "Gestión de correos y generación de tickets",
        description:
          "Aplicación de escritorio para clasificar correos y facilitar la creación y distribución de tickets entre departamentos.",
        contributions: [
          "Desarrollo de aproximadamente el 90–95 % del código de la aplicación.",
          "Implementación de clasificación de correos, generación de tickets y autocompletado.",
          "Integración con el flujo de trabajo y la infraestructura de tickets que ya existían.",
        ],
        technologies: ["Java", "Java Swing"],
      },
      {
        name: "Gestión de vehículos y gastos",
        description:
          "Aplicación Android interna para consultar vehículos y empleados, gestionar asignaciones y registrar gastos relacionados con el repostaje.",
        contributions: [
          "Incorporación al proyecto cuando únicamente existía una pantalla inicial con seis botones.",
          "Desarrollo de gran parte de la aplicación desde esa base, en colaboración con un compañero sénior.",
          "Implementación de acceso y perfiles, consulta de empleados y vehículos, asignaciones, registro de gastos de repostaje y liberación de vehículos.",
        ],
        technologies: ["Java", "Android"],
      },
      {
        name: "Oficina Virtual",
        description:
          "Aplicaciones móviles nativas para Android e iOS que consumían servicios web ya disponibles en la empresa.",
        contributions: [
          "Desarrollo de parte de la aplicación cliente para Android.",
          "Desarrollo de parte de la aplicación cliente para iOS.",
          "Integración con servicios existentes; el desarrollo de los servicios y de la infraestructura correspondía principalmente a otro desarrollador.",
        ],
        technologies: ["Java", "Android", "Swift", "iOS"],
      },
      {
        name: "Aplicación corporativa informativa",
        description:
          "Aplicación móvil corporativa desarrollada con Xamarin.",
        contributions: [
          "Realización de aproximadamente el 90–95 % del desarrollo de la aplicación.",
          "Participación en el proceso de publicación en la plataforma de Apple.",
        ],
        technologies: ["Xamarin", "C#"],
      },
      {
        name: "Módulos de presupuestos",
        description:
          "Desarrollo de módulos vinculados a la gestión de presupuestos y a la generación de documentos PDF.",
        contributions: [
          "Desarrollo de módulos Java para aplicaciones web y de escritorio.",
          "Generación de documentos PDF a partir de la información de los presupuestos.",
        ],
        technologies: ["Java", "PDF"],
      },
      {
        name: "Herramienta de visualización de lectores",
        description:
          "Mantenimiento y evolución de una herramienta utilizada para visualizar información procedente de lectores.",
        contributions: [
          "Mantenimiento de la herramienta y atención a las necesidades de evolución e incidencias.",
        ],
        technologies: [],
      },
    ],
  },
  {
    company: "Grupo Oesía",
    role: "Técnico programador junior",
    period: "12/2016 – 07/2018",
    location: "Rivas-Vaciamadrid, Madrid, España",
    summary:
      "Participación en un proyecto para Orange, trabajando con aplicaciones y sistemas internos, servicios web, bases de datos y herramientas de gestión de incidencias.",
    responsibilities: [
      "Mantenimiento y desarrollo sobre aplicaciones Java y PHP.",
      "Trabajo con bases de datos Oracle y consultas SQL.",
      "Participación en la implementación e integración de servicios web SOAP/XML mediante Apache Axis2 y Tomcat.",
      "Trabajo con BMC Remedy y sistemas de gestión de incidencias.",
      "Desarrollo y mantenimiento de recolectores de errores y scripts en entornos Unix.",
      "Documentación técnica y resolución de incidencias.",
    ],
    projects: [
      {
        name: "Aplicaciones e integración de sistemas para Orange",
        description:
          "Trabajo en un entorno empresarial con aplicaciones conectadas a servicios web, bases de datos y herramientas corporativas.",
        contributions: [
          "Participación en el desarrollo y mantenimiento de componentes Java y PHP.",
          "Consultas y operaciones sobre Oracle para atender incidencias y necesidades del proyecto.",
          "Trabajo con servicios SOAP/XML implementados con Axis2 y desplegados en Apache Tomcat.",
          "Participación en la integración con BMC Remedy y en herramientas de recolección de errores.",
          "Uso de scripts Unix para tareas auxiliares y soporte.",
        ],
        technologies: ["Java", "PHP", "Oracle", "SQL", "SOAP", "XML", "Apache Axis2", "Tomcat", "BMC Remedy", "Unix"],
      },
    ],
  },
  {
    company: "Grupo Oesía",
    role: "Junior Tester · Prácticas de Formación Profesional",
    period: "09/2016 – 12/2016",
    location: "Madrid y alrededores, España",
    summary:
      "Prácticas en un proyecto relacionado con la aplicación Android de Yoigo, centradas en pruebas funcionales y automatización.",
    responsibilities: [
      "Realización de pruebas funcionales sobre una aplicación Android.",
      "Introducción a la automatización de pruebas móviles y ejecución de escenarios de interacción.",
    ],
    projects: [
      {
        name: "Pruebas funcionales de aplicación Android para Yoigo",
        description:
          "Validación del comportamiento de una aplicación Android mediante escenarios de prueba.",
        contributions: [
          "Ejecución y automatización de pruebas funcionales.",
          "Trabajo con herramientas del ecosistema de testing móvil, incluyendo Appium; Robotium formó parte del aprendizaje inicial.",
        ],
        technologies: ["Android", "Appium", "Robotium", "Selenium"],
      },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Máster en Desarrollo de Software con IA",
    institution: "BIG School",
    period: "19/03/2026 – En curso",
    status: "En curso",
    description:
      "Formación de más de 200 horas de práctica, dirigida por Brais Moure, orientada al desarrollo de software incorporando herramientas y técnicas de inteligencia artificial.",
    subjects: [
      "Integración de modelos de lenguaje (LLM) en aplicaciones de software.",
      "Agentes de inteligencia artificial.",
      "Arquitectura de software.",
      "Seguridad aplicada al desarrollo.",
      "Despliegue de aplicaciones en entornos cloud.",
    ],
  },
  {
    degree: "Programador Python",
    institution: "Tokio School",
    period: "01/2022 – 08/2022",
    result: "9,5",
    description:
      "Formación en programación con Python, desde fundamentos del lenguaje y orientación a objetos hasta tratamiento de datos y desarrollo de aplicaciones web y de escritorio.",
    subjects: [
      "Entornos de trabajo: Anaconda, Jupyter y PyCharm.",
      "Tipos de datos, operadores, entrada y salida de datos.",
      "Estructuras de decisión y funciones.",
      "Programación orientada a objetos: clases, atributos, métodos y herencia.",
      "Herencia múltiple y polimorfismo.",
      "Gestión de excepciones y tratamiento de datos temporales.",
      "Trabajo con archivos y formatos Excel, CSV y JSON.",
      "Conexión y trabajo con bases de datos.",
      "Análisis y tratamiento de datos con NumPy y Pandas.",
      "Desarrollo de aplicaciones web con Flask y SQLite3.",
      "Desarrollo de aplicaciones de escritorio con Tkinter y SQLite3.",
    ],
    finalProject:
      "Proyecto final desarrollado con Django, ORM, SQLite y Bootstrap para gestionar un negocio de venta de componentes informáticos.",
  },
  {
    degree: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
    institution: "Centro de Formación Profesional Juan XXIII",
    period: "2014 – 2016",
    result: "7,29",
    description:
      "Ciclo Formativo de Grado Superior orientado al desarrollo de aplicaciones multiplataforma. La relación de módulos se recoge según la documentación académica disponible.",
    subjects: [
      "Bases de datos.",
      "Entornos de desarrollo.",
      "Formación y orientación laboral.",
      "Lenguajes de marcas y sistemas de gestión de información.",
      "Programación.",
      "Sistemas informáticos.",
      "Acceso a datos.",
      "Desarrollo de interfaces.",
      "Empresa e iniciativa emprendedora.",
      "Inglés técnico para grado superior.",
      "Programación de servicios y procesos.",
      "Programación multimedia y dispositivos móviles.",
      "Sistemas de gestión empresarial.",
      "Proyecto de desarrollo de aplicaciones multiplataforma.",
      "Formación en centros de trabajo.",
    ],
    finalProject:
      "Proyecto académico relacionado con la automatización de pruebas funcionales en una aplicación Android.",
  },
  {
    degree: "Bachillerato de Ciencias Sociales",
    institution: "Liceo Villa Fontana",
    period: "2011 – 2014",
    description:
      "Estudios de Bachillerato en la modalidad de Ciencias Sociales.",
    subjects: [],
  },
];

export const LANGUAGES: Language[] = [
  {
    name: "Español",
    level: "Nativo",
  },
  {
    name: "Alemán",
    level: "B2",
    certification: "TELC Deutsch B2 Allgemein · 2023",
    notes: "Formación previa de seis meses en España y certificación TELC B2.",
  },
  {
    name: "Inglés",
    level: "B1",
    notes: "Nivel estimado y no acreditado mediante certificación oficial.",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Backend y programación",
    skills: [
      { name: "Java", context: "Experiencia profesional en aplicaciones empresariales, escritorio y Android." },
      { name: "Python", context: "Formación específica y proyectos personales; experiencia en crecimiento." },
      { name: "PHP", context: "Participación profesional en mantenimiento y desarrollo de aplicaciones." },
      { name: "C# / Xamarin", context: "Desarrollo de una aplicación móvil corporativa con Xamarin." },
      { name: "Programación orientada a objetos", context: "Formación y aplicación práctica con Java y Python." },
    ],
  },
  {
    name: "Frontend y aplicaciones",
    skills: [
      { name: "HTML y CSS", context: "Experiencia profesional y proyectos personales." },
      { name: "JavaScript", context: "Uso en interfaces web y proyectos personales." },
      { name: "Bootstrap", context: "Uso en aplicaciones web y en el proyecto final de Tokio School." },
      { name: "Ajax y jQuery", context: "Tecnologías utilizadas en desarrollos web profesionales." },
      { name: "React y TypeScript", context: "Proyecto personal Event Horizon." },
      { name: "Vue 3", context: "Frontend del proyecto AppDietas, actualmente en desarrollo." },
      { name: "Astro", context: "Desarrollo de este portfolio personal." },
      { name: "Android y Swift / iOS", context: "Participación profesional en aplicaciones móviles nativas." },
    ],
  },
  {
    name: "Bases de datos",
    skills: [
      { name: "SQL y PL/SQL", context: "Experiencia profesional con consultas, procedimientos y operaciones sobre bases de datos." },
      { name: "Oracle", context: "Uso profesional en el proyecto de Orange." },
      { name: "Microsoft SQL Server", context: "Uso profesional en soluciones de lectura remota." },
      { name: "SQLite", context: "Uso en aplicaciones y almacenamiento local." },
      { name: "MySQL", context: "Experiencia de trabajo con herramientas y entornos MySQL." },
      { name: "Hibernate", context: "Tecnología utilizada en desarrollos profesionales." },
      { name: "PostgreSQL", context: "Uso en el proyecto personal AppDietas." },
    ],
  },
  {
    name: "Servicios e integración",
    skills: [
      { name: "SOAP y XML", context: "Integración de servicios web en entorno profesional." },
      { name: "Apache Axis2 y Tomcat", context: "Tecnologías utilizadas en el proyecto de Orange." },
      { name: "APIs externas", context: "Integración con Open-Meteo y Telegram en proyectos personales." },
    ],
  },
  {
    name: "Testing y calidad",
    skills: [
      { name: "Appium", context: "Automatización de pruebas funcionales Android en entorno profesional." },
      { name: "Robotium", context: "Introducción y aprendizaje inicial durante las prácticas." },
      { name: "pytest", context: "Pruebas automatizadas en proyectos personales de Python." },
    ],
  },
  {
    name: "Entornos y herramientas",
    skills: [
      { name: "Linux / Unix y Bash", context: "Uso profesional de scripts, crontab, FTP y tareas auxiliares." },
      { name: "Git y GitHub", context: "Control de versiones y gestión de repositorios personales." },
      { name: "Docker y Docker Compose", context: "Uso práctico en entornos de desarrollo, especialmente AppDietas." },
      { name: "Render y Vercel", context: "Despliegue de proyectos personales." },
      { name: "BMC Remedy", context: "Herramienta utilizada en el entorno profesional de Orange." },
    ],
  },
  {
    name: "Desarrollo con IA",
    skills: [
      { name: "Integración de LLM", context: "Área de formación actual en el Máster de Desarrollo de Software con IA." },
      { name: "Agentes de IA", context: "Área de formación actual; no se presenta como experiencia profesional consolidada." },
      { name: "Arquitectura de software", context: "Formación y aplicación progresiva en proyectos personales." },
      { name: "Seguridad aplicada", context: "Área incluida en la formación actual." },
      { name: "Despliegue cloud", context: "Formación y experiencia práctica de despliegue en Render y Vercel." },
    ],
  },
];
