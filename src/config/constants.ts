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
    icon: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
    { platform: 'GitHub', url: 'https://github.com/tu-usuario', icon: 'github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/tu-usuario', icon: 'linkedin' }
];

export const PROJECTS: Project[] = [
    {
        title: 'E-Commerce Platform',
        description: 'A vibrant and secure full-stack e-commerce solution.',
        tags: ['Astro', 'Tailwind CSS', 'TypeScript'],
        githubUrl: 'https://github.com/tu-usuario/repo',
        liveUrl: 'https://tu-proyecto.com'
    }
];

export const SKILLS: string[] = ['TypeScript', 'Astro', 'Tailwind CSS', 'Node.js', 'Git'];