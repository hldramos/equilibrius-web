export interface SegmentData {
  slug: string;
  title: string;
  summary: string;
  pains: string[];
  url: string;
}

export const SEGMENTS: SegmentData[] = [
  {
    slug: "comercio",
    title: "Comércio",
    summary: "Gestão de ICMS, estoque e obrigações acessórias para varejistas e atacadistas.",
    pains: [
      "Apuração de ICMS e aproveitamento de créditos",
      "Substituição tributária sem surpresa",
      "EFD ICMS/IPI em dia",
    ],
    url: "/segmentos/comercio",
  },
  {
    slug: "prestadores-de-servico",
    title: "Prestadores de serviço",
    summary: "ISS, retenções e regime de lucro para quem vende conhecimento e horas.",
    pains: [
      "ISS municipal e retenções de IR/CSRF",
      "Escolha entre Simples e Lucro Presumido",
      "Deduções legais para reduzir a carga",
    ],
    url: "/segmentos/prestadores-de-servico",
  },
  {
    slug: "clinicas-de-saude",
    title: "Clínicas de saúde",
    summary: "Tributação específica para saúde, PIS/COFINS cumulativo e não cumulativo.",
    pains: [
      "Regime tributário ideal para clínicas",
      "Retenções de INSS, ISS e IR",
      "Contabilidade gerencial para decisão",
    ],
    url: "/segmentos/clinicas-de-saude",
  },
  {
    slug: "industria",
    title: "Indústria",
    summary: "IPI, ICMS, crédito de insumo e SPED industrial sem ruído.",
    pains: [
      "Apuração de IPI e créditos de insumos",
      "SPED Industrial completo",
      "Gestão de créditos acumulados",
    ],
    url: "/segmentos/industria",
  },
  {
    slug: "agronegocio",
    title: "Agronegócio",
    summary: "Suspensão de IPI/COFINS, crédito rural e obrigações do setor.",
    pains: [
      "Suspensão de PIS/COFINS para insumos",
      "Créditos rurais e incentivados",
      "Obrigações acessórias específicas",
    ],
    url: "/segmentos/agronegocio",
  },
  {
    slug: "tecnologia",
    title: "Tecnologia",
    summary: "Lei do Bem, retenções de tomador e enquadramento para software e scale-up.",
    pains: [
      "Enquadramento Simples, Lucro Presumido ou Real",
      "Retenções de tomador de serviços",
      "Planejamento de PIS/COFINS para scale-up",
    ],
    url: "/segmentos/tecnologia",
  },
  {
    slug: "construcao-civil",
    title: "Construção civil",
    summary: "Retenções de INSS, ISS sobre obra e crédito acumulado.",
    pains: [
      "Retenções de INSS sobre obra",
      "ISS municipal e base de cálculo",
      "Crédito acumulado de ICMS",
    ],
    url: "/segmentos/construcao-civil",
  },
  {
    slug: "restaurantes",
    title: "Restaurantes",
    summary: "Simples Anexo III, IV e V — escolher certo entre comida e bebida.",
    pains: [
      "Enquadramento de Simples (Anexo III, IV ou V)",
      "ICMS sobre bebidas e incidências",
      "Controle de insumos e desperdício",
    ],
    url: "/segmentos/restaurantes",
  },
];