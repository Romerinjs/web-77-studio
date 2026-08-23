export interface SEOMetadata {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string[];
  noindex?: boolean;
}

export const DEFAULT_SEO: SEOMetadata = {
  title: "77 Studio | Digital Studio + Creative Partner + AI Company",
  description: "Un solo equipo para hacer que tu empresa se vea mejor, venda mejor y funcione mejor. Marketing, Web, IA + Automatización y Productos Digitales (Colombia + USA).",
  canonical: "https://77.studio",
  ogImage: "/img/77studio.png",
  ogType: "website",
  keywords: [
    "77 Studio",
    "Digital Studio",
    "Creative Partner",
    "Marketing Digital Colombia USA",
    "Desarrollo Web Astro",
    "Automatización de Procesos",
    "Inteligencia Artificial para Empresas",
    "SaaS y Productos Digitales"
  ]
};
