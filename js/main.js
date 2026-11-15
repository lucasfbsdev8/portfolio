import { PROJETOS } from './projetos.js';
import { SKILLS, TOTAL_SLOTS } from './skills.js';
import { DECORACOES } from './decoracoes.js';
import { CONTATOS } from './contato.js';

const botao = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu');

function fecharMenu() {
  menu.classList.remove('aberto');
  botao.setAttribute('aria-expanded', 'false');
  botao.setAttribute('aria-label', 'Abrir menu');
}

botao.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  botao.setAttribute('aria-expanded', String(aberto));
  botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
});

menu.addEventListener('click', (evento) => {
  if (evento.target.closest('a')) {
    fecharMenu();
  }
});

const BONECO = `
<svg class="px" viewBox="0 -1 16 34" width="48" height="102" aria-hidden="true">
  <!-- sombra no chão -->
  <rect x="3" y="32" width="10" height="1" fill="#000" opacity=".35"/>

  <!-- perna esquerda: calça, tênis e sola -->
  <g class="sw">
    <rect x="4" y="20" width="4" height="9" fill="#2F4F9E"/>
    <rect x="4" y="29" width="4" height="3" fill="#F2F2F2"/>
    <rect x="4" y="31" width="4" height="1" fill="#9AA3B2"/>
  </g>
  <!-- perna direita (balança ao contrário) -->
  <g class="sr">
    <rect x="8" y="20" width="4" height="9" fill="#243B7A"/>
    <rect x="8" y="29" width="4" height="3" fill="#F2F2F2"/>
    <rect x="8" y="31" width="4" height="1" fill="#9AA3B2"/>
  </g>

  <!-- camisa: corpo, sombras, gola -->
  <rect x="4" y="8" width="8" height="12" fill="#3FA796"/>
  <rect x="4" y="17" width="8" height="2" fill="#2F8A7A"/>
  <rect x="4" y="19" width="8" height="1" fill="#1B2A55"/>
  <rect x="6" y="8" width="4" height="1" fill="#2F8A7A"/>
  <!-- símbolos < > no peito -->
  <rect x="6" y="12" width="1" height="1" fill="#E8F7F2"/>
  <rect x="5" y="13" width="1" height="1" fill="#E8F7F2"/>
  <rect x="6" y="14" width="1" height="1" fill="#E8F7F2"/>
  <rect x="9" y="12" width="1" height="1" fill="#E8F7F2"/>
  <rect x="10" y="13" width="1" height="1" fill="#E8F7F2"/>
  <rect x="9" y="14" width="1" height="1" fill="#E8F7F2"/>

  <!-- braço esquerdo: manga, pele e sombra -->
  <g class="sr">
    <rect x="1" y="8" width="3" height="4" fill="#3FA796"/>
    <rect x="1" y="12" width="3" height="6" fill="#E8B88A"/>
    <rect x="1" y="17" width="3" height="1" fill="#D6A073"/>
  </g>
  <!-- braço direito -->
  <g class="sw">
    <rect x="12" y="8" width="3" height="4" fill="#3FA796"/>
    <rect x="12" y="12" width="3" height="6" fill="#E8B88A"/>
    <rect x="12" y="17" width="3" height="1" fill="#D6A073"/>
  </g>

  <!-- cabeça e cabelo -->
  <rect x="4" y="0" width="8" height="8" fill="#E8B88A"/>
  <rect x="11" y="1" width="1" height="7" fill="#D6A073"/>
  <rect x="4" y="0" width="8" height="3" fill="#2B2118"/>
  <rect x="4" y="3" width="1" height="2" fill="#2B2118"/>
  <rect x="11" y="3" width="1" height="2" fill="#2B2118"/>

  <!-- headphones (cor accent) -->
  <rect x="3" y="-1" width="10" height="1" fill="#7CE3A1"/>
  <rect x="2" y="2" width="2" height="5" fill="#7CE3A1"/>
  <rect x="2" y="5" width="2" height="2" fill="#4FB783"/>
  <rect x="12" y="2" width="2" height="5" fill="#7CE3A1"/>
  <rect x="12" y="5" width="2" height="2" fill="#4FB783"/>

  <!-- rosto: sobrancelhas, olhos, nariz e sorriso -->
  <rect x="5" y="3" width="2" height="1" fill="#2B2118"/>
  <rect x="9" y="3" width="2" height="1" fill="#2B2118"/>
  <rect x="5" y="4" width="2" height="1" fill="#fff"/>
  <rect x="9" y="4" width="2" height="1" fill="#fff"/>
  <rect x="6" y="4" width="1" height="1" fill="#1E3A8A"/>
  <rect x="10" y="4" width="1" height="1" fill="#1E3A8A"/>
  <rect x="8" y="5" width="1" height="1" fill="#D6A073"/>
  <rect x="6" y="6" width="1" height="1" fill="#B5654A"/>
  <rect x="7" y="7" width="3" height="1" fill="#B5654A"/>
  <rect x="10" y="6" width="1" height="1" fill="#B5654A"/>
</svg>`;

// Procura todo elemento com data-char e coloca o desenho dentro dele
document.querySelectorAll('[data-char]').forEach((el) => {
  el.innerHTML = BONECO;
});

// ===== Objetos que passam pelo cenário =====
const DURACAO = 25.875;   // segundos para atravessar o mundo (precisa ser igual ao do CSS .it)

// Cada tipo é uma função que devolve o desenho (em SVG) do objeto
const OBJETOS = {
  placa: (nome) => `
    <rect x="40" y="96" width="4" height="34" fill="#6B4C36"/>
    <rect x="0" y="76" width="84" height="22" fill="#161920" stroke="#7CE3A1" stroke-width="2"/>
    <text x="10" y="92" font-size="12" fill="#7CE3A1" style="font-family:var(--font-mono)">${nome}</text>`,

  arvore: () => `
    <rect x="16" y="90" width="8" height="40" fill="#6B4C36"/>
    <rect x="0" y="58" width="40" height="32" fill="#3E7C41"/>
    <rect x="8" y="42" width="24" height="16" fill="#3E7C41"/>
    <rect x="4" y="62" width="8" height="8" fill="#4C9A4F"/>
    <rect x="24" y="70" width="8" height="8" fill="#4C9A4F"/>
    <rect x="12" y="46" width="8" height="8" fill="#4C9A4F"/>`,

  gema: () => `
    <g class="bobs">
      <rect x="8" y="96" width="8" height="4" fill="#5ED6E0"/>
      <rect x="4" y="100" width="16" height="8" fill="#5ED6E0"/>
      <rect x="8" y="108" width="8" height="4" fill="#5ED6E0"/>
      <rect x="8" y="100" width="4" height="4" fill="#C9F6FA"/>
      <rect x="12" y="104" width="8" height="4" fill="#2FA9B5"/>
    </g>`,

  tocha: () => `
    <rect x="2" y="108" width="4" height="22" fill="#6B4C36"/>
    <g class="fl">
      <rect x="0" y="96" width="8" height="12" fill="#FF9F1C"/>
      <rect x="2" y="100" width="4" height="8" fill="#FFE066"/>
    </g>`,
};

// Ordem em que os tipos aparecem (se repete até completar TOTAL)
const ORDEM = ['placa', 'arvore', 'gema', 'placa', 'tocha', 'arvore', 'placa', 'gema', 'tocha'];
const TOTAL = ORDEM.length * 2;   // 9 × 2 = 18 objetos (2 voltas completas da ORDEM)

const PASSO = DURACAO / TOTAL;   // tempo entre um objeto e o seguinte
let placas = 0;
let html = '';

for (let i = 0; i < TOTAL; i++) {
  const tipo = ORDEM[i % ORDEM.length];   // % devolve o resto da divisão: faz a ordem voltar ao início
  let desenho;

  if (tipo === 'placa') {
    desenho = OBJETOS.placa(PROJETOS[placas % PROJETOS.length].placa);
    placas++;
  } else {
    desenho = OBJETOS[tipo]();
  }

  // O delay NEGATIVO adianta o objeto no caminho: assim eles já aparecem espalhados ao carregar
  html += `<g class="it" style="animation-delay:-${((TOTAL - 1 - i) * PASSO).toFixed(2)}s">${desenho}</g>`;
}

document.querySelector('#objetos').innerHTML = html;

// ===== Cards de projetos =====
const lista = document.querySelector('#projetos-lista');

// Monta só os botões que o projeto tem: código, site e/ou demo
function botoesCard(p) {
  const botoes = [
    p.repo   && { href: p.repo,   icone: 'brand-github',  texto: 'código', label: `Código de ${p.nome} no GitHub` },
    p.deploy && { href: p.deploy, icone: 'external-link', texto: 'site',   label: `Abrir o site de ${p.nome}` },
    p.demo   && { href: p.demo,   icone: 'player-play',   texto: 'demo',   label: `Ver a demonstração de ${p.nome}` },
  ].filter(Boolean);   // tira os que não existem

  return botoes.map((b) => `
    <a class="btn" href="${b.href}" target="_blank" rel="noopener noreferrer" aria-label="${b.label}">
      <i class="ti ti-${b.icone}" aria-hidden="true"></i> ${b.texto}
    </a>`).join('');
}

lista.innerHTML = PROJETOS.map((p, i) => `
  <article class="slot">
    <div class="card bv" style="animation-delay:${(0.05 + i * 0.15).toFixed(2)}s">
      ${(p.enfeites || []).map((nome) => DECORACOES[nome]).join('')}
      <div class="moldura">
        <img src="${p.imagem}" alt="Captura de tela do ${p.nome}" loading="lazy">
      </div>
      <h3 class="card-nome">${p.nome}</h3>
      <p class="card-tags">${p.tags}</p>
      <div class="card-links">
        ${botoesCard(p)}
      </div>
    </div>
  </article>`).join('');

  // Anima cada card quando ele entra na tela
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visivel');
      observador.unobserve(entrada.target);   // anima uma vez só
    }
  });
}, { threshold: 0.2 });                       // quando 20% do card estiver visível

document.querySelectorAll('.card').forEach((card) => observador.observe(card));

// ===== Inventário de skills =====
const hotbar = document.querySelector('#hotbar');
const detalhe = {
  icone: document.querySelector('#d-icone'),
  nome: document.querySelector('#d-nome'),
  nivel: document.querySelector('#d-nivel'),
  barra: document.querySelector('#d-barra'),
  texto: document.querySelector('#d-texto'),
};

// Barra de segmentos: "nivel" quadradinhos cheios de "total"
function segmentos(nivel, total = 10) {
  let html = '';
  for (let i = 0; i < total; i++) {
    html += `<span${i < nivel ? ' class="cheio"' : ''}></span>`;
  }
  return html;
}

// Preenche o card e marca o espaço selecionado
function mostrarSkill(i) {
  const s = SKILLS[i];
  detalhe.icone.className = `ti ti-${s.icone}`;
  detalhe.nome.textContent = s.nome;
  detalhe.nivel.textContent = `nível ${s.nivel} de 10`;
  detalhe.barra.innerHTML = segmentos(s.nivel);
  detalhe.texto.textContent = s.descricao;

  hotbar.querySelectorAll('.sl[data-i]').forEach((espaco) => {
    const ativo = Number(espaco.dataset.i) === i;
    espaco.classList.toggle('sel', ativo);
    espaco.setAttribute('aria-pressed', String(ativo));
  });
}

let slots = '';
for (let i = 0; i < TOTAL_SLOTS; i++) {
  const s = SKILLS[i];
  slots += s
  ? `<button type="button" class="sl rc" data-i="${i}" aria-label="${s.nome}, nível ${s.nivel}">
       <i class="ti ti-${s.icone}" aria-hidden="true"></i>
       <span class="n" aria-hidden="true">${s.nivel}</span>
       <span class="tt" aria-hidden="true">${s.nome}<br><span class="tt-nivel">nível ${s.nivel}</span></span>
     </button>`
  : '<div class="sl rc" aria-hidden="true"></div>';
}
hotbar.innerHTML = slots;

// Um único ouvinte na hotbar inteira (delegação de eventos)
hotbar.addEventListener('click', (evento) => {
  const espaco = evento.target.closest('.sl[data-i]');
  if (espaco) mostrarSkill(Number(espaco.dataset.i));
});

mostrarSkill(0);   // começa com a primeira skill selecionada

// ===== Corações de energia =====
// O coração é um "mapa de pixels" em texto: cada X vira um quadradinho de 1x1.
const FORMA_CORACAO = [
  '..XX.XX..',
  '.XXXXXXX.',
  'XXXXXXXXX',
  'XXXXXXXXX',
  '.XXXXXXX.',
  '..XXXXX..',
  '...XXX...',
  '....X....',
];

function coracao(cheio) {
  const cor = cheio ? '#E5484D' : '#2A2E37';
  let quadrados = '';

  FORMA_CORACAO.forEach((linha, y) => {
    for (let x = 0; x < 9; x++) {
      if (linha[x] === 'X') {
        quadrados += `<rect x="${x}" y="${y}" width="1" height="1" fill="${cor}"/>`;
      }
    }
  });

  const brilho = cheio ? '<rect x="2" y="1" width="1" height="1" fill="#FF9A9A"/>' : '';
  return `<svg class="px" viewBox="0 0 9 8" width="18" height="16" aria-hidden="true">${quadrados}${brilho}</svg>`;
}

const ENERGIA = 8;    // quantos corações estão cheios (de 10)
let coracoes = '';
for (let i = 0; i < 10; i++) {
  coracoes += coracao(i < ENERGIA);
}

const caixaCoracoes = document.querySelector('#coracoes');
caixaCoracoes.innerHTML = coracoes;
caixaCoracoes.setAttribute('aria-label', `Energia: ${ENERGIA} de 10`);

// ===== Links de contato =====
const listaContatos = document.querySelector('#contato-links');

listaContatos.innerHTML = CONTATOS.map((c) => {
  const externo = c.href.startsWith('http');   // e-mail (mailto:) não abre em outra aba
  const abrirFora = externo ? ' target="_blank" rel="noopener noreferrer"' : '';
  // Link só com ícone precisa de nome para o leitor de tela; com texto, o texto já basta
  const nome = c.texto ? '' : ` aria-label="${c.rotulo}" title="${c.rotulo}"`;

  return `<li>
    <a class="lk${c.texto ? ' lk-texto' : ''}" href="${c.href}"${abrirFora}${nome}>
      <i class="ti ti-${c.icone}" aria-hidden="true"></i>${c.texto ? ` ${c.texto}` : ''}
    </a>
  </li>`;
}).join('');
