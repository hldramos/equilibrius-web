// ===================================================
// DADOS INSTITUCIONAIS — Equilibrius (validados)
// ===================================================
// Tudo que é dado confirmado pela empresa vive aqui.
// Pendências [VALIDAR COM CLIENTE] ficam null/undefined.

export const SITE = {
  name: "EQUILIBRIUS",
  fullName: "EQUILIBRIUS CONSULTORIA TRIBUTÁRIA & CONTÁBIL",
  cnpj: "60.608.081/0001-39",
  city: "Feira de Santana",
  state: "BA",
  model: "Escritório virtual",
  areaServed: "Brasil",
  whatsapp: "(75) 98146-3142",
  whatsappRaw: "5575981463142",
  whatsappLink: "https://wa.me/5575981463142?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Equilibrius%20e%20gostaria%20de%20falar%20sobre%20o%20meu%20caso.",
  email: "equilibriusconsultoria24@gmail.com",
  hours: "Segunda a sexta-feira, das 08h00 às 17h30",
  yearsActive: 5,
  voice: "Consultiva, estratégica e preventiva, com foco em soluções tributárias e contábeis.",
  // --- Pendentes ---
  razaoSocial: null, // [VALIDAR COM CLIENTE]
  crc: null,         // [VALIDAR COM CLIENTE]
  dpoEmail: null,    // [VALIDAR COM CLIENTE]
  equipe: [],        // [VALIDAR COM CLIENTE]
  cases: [],         // [VALIDAR COM CLIENTE]
  numClientes: null, // [VALIDAR COM CLIENTE]
  segments: [],      // [VALIDAR COM CLIENTE]
  // --- URL ---
  url: "https://equilibriusconsultoria.com.br",
  ogImage: "/og/equilibrius-og.png",
};

export const NAV_LINKS = [
  { label: "Serviços", href: "/servicos" },
  { label: "Segmentos", href: "/segmentos" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
] as const;

export type NavItem = (typeof NAV_LINKS)[number];