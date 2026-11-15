// Skills do inventário. Troque pelos seus nomes, ícones e níveis (de 1 a 10).
// Ícones: procure em tabler.io/icons e use só o nome, sem o "ti-".
export const SKILLS = [
  { nome: 'Front-end', icone: 'code', nivel: 8, descricao: 'HTML, CSS e JavaScript puro: layouts responsivos e interfaces acessíveis.' },
  { nome: 'Design', icone: 'palette', nivel: 7, descricao: 'Figma e Canva: protótipos de telas e testes de ideias antes do código.' },
  { nome: 'Back-end', icone: 'settings-code', nivel: 4, descricao: 'Python e C: lógica de programação, APIs e os primeiros sistemas.' },
  { nome: 'Mobile', icone: 'device-mobile', nivel: 2, descricao: 'Dando os primeiros passos em apps, com foco em usabilidade na tela pequena.' },
  { nome: 'IA', icone: 'brain', nivel: 6, descricao: 'Claude e GPT: apoio para revisar código, tirar dúvidas e aprender mais rápido.' },
  { nome: 'Git', icone: 'git-branch', nivel: 7, descricao: 'Git e GitHub: versionamento, commits organizados e estrutura de projetos.' },
  { nome: 'Banco de dados', icone: 'database', nivel: 5, descricao: 'MySQL e SQL: tabelas, relacionamentos e consultas.' },
];

export const TOTAL_SLOTS = 12;   // 12 divide por 3, 4 e 6: as linhas ficam sempre completas
