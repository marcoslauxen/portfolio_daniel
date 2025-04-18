export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  category: string;
  links: {
    demo?: string;
    github?: string;
    article?: string;
  };
}

export interface Skill {
  id: string;
  name: string;
  icon?: string;
  category: string;
  level: number; // 1-5
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  text: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export type LanguageCode = 'en' | 'pt' | 'es';