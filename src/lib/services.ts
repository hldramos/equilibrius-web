export interface ServiceData {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  faq: { question: string; answer: string }[];
  url: string;
}

export const SERVICES: ServiceData[] = [
  {
    slug: "contabilidade-empresarial",
    title: "Contabilidade empresarial",
    summary: "Fechamento, obrigações acessórias e demonstrações no prazo.",
    icon: "calculator",
    url: "/servicos/contabilidade-empresarial",
    faq: [
      {
        question: "Vocês cuidam de todas as obrigações mensais?",
        answer:
          "Sim. Centralizamos escrituração, obrigações acessórias (DCTF, EFD, SPED) e demonstrações contábeis, com cronograma de vencimentos monitorado.",
      },
    ],
  },
  {
    slug: "consultoria-tributaria",
    title: "Consultoria tributária",
    summary: "Enquadramento, aproveitamento de créditos e defesa fiscal fundamentada.",
    icon: "scale",
    url: "/servicos/consultoria-tributaria",
    faq: [
      {
        question: "A consultoria tributária serve para empresa pequena?",
        answer:
          "Sim. O enquadramento correto e o aproveitamento de créditos aplicam-se a qualquer porte — o que muda é a complexidade, não a elegibilidade.",
      },
    ],
  },
  {
    slug: "planejamento-tributario",
    title: "Planejamento tributário",
    summary: "Escolha de regime com base em números do seu negócio, não em achismo.",
    icon: "chart",
    url: "/servicos/planejamento-tributario",
    faq: [
      {
        question: "Planejamento tributário é legal?",
        answer:
          "Sim. Trabalhamos exclusivamente com fundamentos legais citáveis (Leis, LCs, instruções normativas). Nenhuma recomendação depende de brecha ou omissão.",
      },
    ],
  },
  {
    slug: "abertura-de-empresa",
    title: "Abertura de empresa",
    summary: "Da escolha do regime ao CNPJ ativo, com checklist documental.",
    icon: "building",
    url: "/servicos/abertura-de-empresa",
    faq: [
      {
        question: "Quanto tempo leva para abrir empresa?",
        answer:
          "Depende da cidade e do tipo societário. Em geral, entre 7 e 20 dias úteis após a entrega completa da documentação.",
      },
    ],
  },
  {
    slug: "regularizacao-empresarial",
    title: "Regularização empresarial",
    summary: "Débitos tributários, pendências cadastrais e retorno à regularidade.",
    icon: "shield",
    url: "/servicos/regularizacao-empresarial",
    faq: [
      {
        question: "Tenho dívida com a Receita. Consigo regularizar?",
        answer:
          "Na maioria dos sim. Avaliamos a dívida, verificamos prescrição, parcelamento ou compensação, e montamos um plano de regularização viável.",
      },
    ],
  },
  {
    slug: "departamento-pessoal",
    title: "Departamento pessoal",
    summary: "Folha, eSocial e admissões sem ruído administrativo.",
    icon: "people",
    url: "/servicos/departamento-pessoal",
    faq: [
      {
        question: "Vocês cuidam do eSocial completo?",
        answer:
          "Sim. Admissão, afastamento, férias, rescisão e todas as obrigações do eSocial são centralizadas por nossa equipe.",
      },
    ],
  },
  {
    slug: "obrigacoes-fiscais",
    title: "Obrigações fiscais",
    summary: "Speds, DCTF, guias e declarações em dia, sem multa por atraso.",
    icon: "document",
    url: "/servicos/obrigacoes-fiscais",
    faq: [
      {
        question: "Quais obrigações vocês cuidam?",
        answer:
          "DCTF, EFD-Contribuições, EFD-ICMS/IPI, SPED Contábil, declarações do Simples Nacional e obrigações estaduais e municipais conforme o regime.",
      },
    ],
  },
  {
    slug: "troca-de-contador",
    title: "Troca de contador",
    summary: "Migração sem perda de histórico e sem atrito com o contador anterior.",
    icon: "swap",
    url: "/servicos/troca-de-contador",
    faq: [
      {
        question: "Trocar de contador é complicado?",
        answer:
          "Cuidamos da migração documental e dos prazos. Você precisa apenas autorizar a transferência — o processo administrativo fica conosco.",
      },
    ],
  },
  {
    slug: "consultoria-contabil-recorrente",
    title: "Consultoria contábil recorrente",
    summary: "Acompanhamento mensal com reuniões periódicas e relatórios de gestão.",
    icon: "repeat",
    url: "/servicos/consultoria-contabil-recorrente",
    faq: [
      {
        question: "Qual a diferença da consultoria recorrente para a contabilidade tradicional?",
        answer:
          "A consultoria recorrente inclui reuniões periódicas, relatórios de gestão e análise estratégica — não apenas entrega de obrigações no prazo.",
      },
    ],
  },
];