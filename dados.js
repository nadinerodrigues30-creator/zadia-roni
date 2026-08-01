/*
  ============================================================
   DADOS DO CONVITE — edite só este arquivo para reaproveitar
   o site pra outro casal. Não precisa mexer no index.html.
  ============================================================
*/

const dados = {

  // Nomes: "curto" aparece na capa (antes de abrir o convite)
  // "completo" aparece depois de abrir, na tela principal
  noivos: {
    curto1: "Z",
    curto2: "R",
    completo1: "Zádia",
    completo2: "Roni"
  },

  data: {
    // usado nos textos do site
    textoCapa: "22 de novembro de 2026",
    textoComHora: "22 de novembro de 2026 · 16h",
    textoCurto: "22 · 11 · 2026",
    // usado na contagem regressiva — formato: AAAA-MM-DDTHH:MM:SS-03:00
    isoCasamento: "2026-11-22T16:00:00-03:00"
  },

  versiculo: {
    texto: "“Portanto o que Deus ajuntou não o separe o homem.”",
    referencia: "Marcos 10:9"
  },

  fraseConvite: "Com imensa alegria, convidamos você a celebrar a união das nossas vidas perante Deus e nossa família.",

  // troque o arquivo em assets/casal.jpg pela foto do casal
  fotoCasal: "assets/casal.jpg",

  local: {
    nome: "Garden Buffet",
    enderecoHTML: "Av. Benjamin Brasil, 570 — Maraponga<br>Fortaleza — CE",
    mapaQuery: "Garden Buffet Av. Benjamin Brasil 570 Maraponga Fortaleza",
    cidadeCurta: "Fortaleza, Ceará",
    // troque o arquivo em assets/local.jpg pela foto do espaço
    foto: "assets/local.jpg"
  },

  whatsapp: {
    numero: "5585986513393", // DDI + DDD + número, só dígitos
    mensagem: "Oi! Quero confirmar minha presença no casamento de Zádia e Roni ♥"
  },

  pixChavePadrao: "08869619397",

  pixAvulso: {
    texto: "Quer mandar um valor diferente das sugestões? Aqui está nosso Pix:",
    chave: "08869619397"
  },

  // coloque o arquivo de música (mp3) em assets/musica.mp3
  musica: "assets/musica.mp3",

  trajes: {
    intro: "Social fino · Vista-se com elegância para celebrar este momento especial",
    // cada item: cor (hex) + rótulo mostrado embaixo
    evitarEle: [
      { cor: "#8c8c8c", label: "Cinza" },
      { cor: "#c9c9c9", label: "Cinza claro" }
    ],
    evitarEla: [
      { cor: "#C2185B", label: "Fúcsia" },
      { cor: "#E8793C", label: "Laranja" },
      { cor: "#8fd0c4", label: "Verde-água" },
      { cor: "#f4f4f4", label: "Branco" }
    ]
  },

  // Lista de presentes.
  // Pra usar uma foto de verdade (inclusive as fotinhas "meme"):
  //  1) coloque o arquivo de imagem dentro de assets/presentes/
  //  2) preencha o campo "foto" com o caminho, ex: "assets/presentes/vaquinha.jpg"
  // Se "foto" ficar vazio (""), o site mostra o emoji no lugar (cor de fundo = "cor").
  presentes: [
    { nome:"Lua de Mel", foto:"assets/presentes/lua-de-mel.jpg", emoji:"✈️", cor:"#F3E3D3", desc:"Para a gente sumir no primeiro capítulo do casamento.", preco:"R$ 500,00", chave:"08869619397" },
    { nome:"Terapia do Casal", foto:"assets/presentes/terapia.jpg", emoji:"🛋️", cor:"#E7D9E4", desc:"Ajuda para pagar a terapia depois de organizar o casamento.", preco:"R$ 250,00", chave:"08869619397" },
    { nome:"Cueca de Núpcias", foto:"", emoji:"🩲", cor:"#DCE7E3", desc:"Cueca nova pro noivo estrear na noite de núpcias.", preco:"R$ 160,00", chave:"08869619397" },
    { nome:"Corte Craque", foto:"assets/presentes/corte-craque.jpg", emoji:"✂️", cor:"#F0E6D2", desc:"Um ano de corte de cabelo garantido pro noivo.", preco:"R$ 300,00", chave:"08869619397" },
    { nome:"Curso Culinário", foto:"", emoji:"🍳", cor:"#EFE0DD", desc:"Pra ele aprender a cozinhar pra ela (ou o contrário).", preco:"R$ 100,00", chave:"08869619397" },
    { nome:"Vaquinha da Reforma", foto:"assets/presentes/vaquinha.jpg", emoji:"🐄", cor:"#E3E9DC", desc:"Vaquinha coletiva pra reformar a casa nova.", preco:"R$ 480,00", chave:"08869619397" },
    { nome:"Cobertor da Razão", foto:"", emoji:"🛏️", cor:"#DDE2EC", desc:"Pra noiva que sempre está coberta de razão.", preco:"R$ 80,00", chave:"08869619397" },
    { nome:"Mira no Buquê", foto:"assets/presentes/mira-no-buque.jpg", emoji:"💐", cor:"#F1E8DB", desc:"Ajude a testar a pontaria da noiva na hora do buquê.", preco:"R$ 180,00", chave:"08869619397" },
    { nome:"Cota do Bebê", foto:"assets/presentes/cota-bebe.jpg", emoji:"👶", cor:"#EAE0E8", desc:"Contribua pra reserva do primeiro herdeiro do casal.", preco:"R$ 500,00", chave:"08869619397" }
  ]
};
