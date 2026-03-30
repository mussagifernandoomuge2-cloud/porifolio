const corpo = document.body;

const botaoTema = document.getElementById("botaoTema");
const botaoMenu = document.getElementById("botaoMenu");
const fecharMenu = document.getElementById("fecharMenu");
const menuLateral = document.getElementById("menuLateral");
const sobreposicao = document.getElementById("sobreposicao");

const popupImagem = document.getElementById("popupImagem");
const imagemPopup = document.getElementById("imagemPopup");
const fecharPopupImagem = document.getElementById("fecharPopupImagem");

const popupMensagem = document.getElementById("popupMensagem");
const textoPopupMensagem = document.getElementById("textoPopupMensagem");
const fecharPopupMensagem = document.getElementById("fecharPopupMensagem");

const seletorIdioma = document.getElementById("seletorIdioma");

function abrirMenu() {
  if (menuLateral && sobreposicao) {
    menuLateral.classList.add("abrir");
    sobreposicao.classList.add("mostrar");
  }
}

function fecharOMenu() {
  if (menuLateral && sobreposicao) {
    menuLateral.classList.remove("abrir");
    sobreposicao.classList.remove("mostrar");
  }
}

if (botaoMenu) botaoMenu.addEventListener("click", abrirMenu);
if (fecharMenu) fecharMenu.addEventListener("click", fecharOMenu);
if (sobreposicao) sobreposicao.addEventListener("click", fecharOMenu);

document.querySelectorAll(".link-menu").forEach((link) => {
  link.addEventListener("click", fecharOMenu);
});

if (botaoTema) {
  botaoTema.addEventListener("click", () => {
    corpo.classList.toggle("modo-escuro");

    if (corpo.classList.contains("modo-escuro")) {
      botaoTema.textContent = "☀️";
      localStorage.setItem("temaPortfolio", "escuro");
    } else {
      botaoTema.textContent = "🌙";
      localStorage.setItem("temaPortfolio", "claro");
    }
  });
}

const temaGuardado = localStorage.getItem("temaPortfolio");
if (temaGuardado === "escuro") {
  corpo.classList.add("modo-escuro");
  if (botaoTema) botaoTema.textContent = "☀️";
}

function abrirPopupImagem(src, alt) {
  if (popupImagem && imagemPopup) {
    imagemPopup.src = src;
    imagemPopup.alt = alt || "Imagem ampliada";
    popupImagem.classList.add("mostrar");
  }
}

function fecharAPopupImagem() {
  if (popupImagem && imagemPopup) {
    popupImagem.classList.remove("mostrar");
    imagemPopup.src = "";
  }
}

document.querySelectorAll(".imagem-ampliavel").forEach((imagem) => {
  imagem.addEventListener("click", () => {
    abrirPopupImagem(imagem.src, imagem.alt);
  });

  imagem.addEventListener("contextmenu", (evento) => {
    evento.preventDefault();
  });

  imagem.setAttribute("draggable", "false");
});

if (fecharPopupImagem) {
  fecharPopupImagem.addEventListener("click", fecharAPopupImagem);
}

if (popupImagem) {
  popupImagem.addEventListener("click", (evento) => {
    if (evento.target === popupImagem) {
      fecharAPopupImagem();
    }
  });
}

function obterIdiomaAtual() {
  return localStorage.getItem("idiomaPortfolio") || "pt";
}

function abrirPopupMensagem(texto) {
  if (popupMensagem && textoPopupMensagem) {
    textoPopupMensagem.textContent = texto;
    popupMensagem.classList.add("mostrar");
  }
}

function fecharAPopupMensagem() {
  if (popupMensagem) {
    popupMensagem.classList.remove("mostrar");
  }
}

document.querySelectorAll(".link-social").forEach((link) => {
  link.addEventListener("click", (evento) => {
    evento.preventDefault();
    const idioma = obterIdiomaAtual();
    const mensagem =
      link.getAttribute(`data-popup-${idioma}`) ||
      link.getAttribute("data-popup-pt") ||
      "Informação indisponível.";
    abrirPopupMensagem(mensagem);
  });
});

if (fecharPopupMensagem) {
  fecharPopupMensagem.addEventListener("click", fecharAPopupMensagem);
}

if (popupMensagem) {
  popupMensagem.addEventListener("click", (evento) => {
    if (evento.target === popupMensagem) {
      fecharAPopupMensagem();
    }
  });
}

const traducoes = {
  pt: {
    marca: "Portfólio Pessoal",
    menu_titulo: "Menu",
    menu_inicio: "Início",
    menu_sobre: "Sobre mim",
    menu_competencias: "Competências",
    menu_percurso: "Percurso",
    menu_experiencias: "Experiências",
    menu_fotos: "Fotos e actividades",
    menu_contactar: "Contactar",
    hero_texto: "Nasci no dia 18 de Junho de 2008 em Pemba, Província de Cabo Delgado, filho de Fernando Omuge e Arminda de Fátima Arcanjo. Sou uma pessoa dedicada, curiosa e comprometida com o desenvolvimento comunitário, a participação juvenil e a promoção dos direitos dos adolescentes e jovens.",
    botao_contactar: "Contactar",
    rotulo_hero: "Impacto social e participação juvenil",
    titulo_hero: "Experiências, projectos e contribuição comunitária",
    texto_hero_destaque: "Este portfólio apresenta o meu percurso académico, comunitário e social, reunindo experiências em palestras, debates, participação juvenil, mobilização social, projectos comunitários, seminários, workshops, actividades de mentoria e acções de consciencialização em diferentes bairros e instituições.",
    chip_1: "Palestras e debates",
    chip_2: "Participação juvenil",
    chip_3: "Mobilização social",
    chip_4: "Projectos comunitários",
    chip_5: "Seminários e workshops",
    chip_6: "Mentoria juvenil",
    chip_7: "Direitos humanos",
    chip_8: "Educação comunitária",
    sobre_titulo: "Sobre mim",
    sobre_intro: "Aqui estão reunidas informações pessoais, formação, competências, experiências, participação social e áreas em que posso contribuir.",
    biografia_titulo: "Biografia",
    biografia_texto: "Sou Mussagi Fernando Omuge, natural de Pemba. Concluí a 10ª classe em 2023 e a 12ª classe em 2025 na Escola Secundária de Pemba. Ao longo dos anos, participei em diferentes iniciativas comunitárias e juvenis ligadas aos direitos da criança, sensibilização social, cidadania, debates escolares, palestras, jornadas de limpeza, actividades desportivas, workshops e projectos de mentoria. Tenho interesse por tecnologia, educação comunitária, liderança juvenil e desenvolvimento social.",
    info_titulo: "Informações principais",
    nome_label: "Nome:",
    nascimento_label: "Data de nascimento:",
    nascimento_valor: "18 de Junho de 2008",
    naturalidade_label: "Naturalidade:",
    disponibilidade_label: "Disponibilidade:",
    disponibilidade_valor: "Formação, voluntariado e oportunidades de emprego",
    telefone_label: "Telefone:",
    competencias_titulo: "Competências e línguas faladas",
    competencias_intro: "Nesta parte estão destacadas as competências adquiridas ao longo da minha formação e participação em actividades sociais, educativas e comunitárias.",
    competencias_lista_titulo: "Competências",
    comp_1: "Comunicação interpessoal",
    comp_2: "Participação e liderança juvenil",
    comp_3: "Mobilização social e comunitária",
    comp_4: "Organização de palestras e debates",
    comp_5: "Mentoria e acompanhamento juvenil",
    comp_6: "Trabalho em equipa",
    comp_7: "Noções de informática básica",
    comp_8: "Noções de programação web",
    comp_9: "Capacidade de adaptação e aprendizagem",
    comp_10: "Condução de actividades de consciencialização",
    linguas_titulo: "Línguas faladas",
    portugues_label: "Português:",
    ingles_label: "Inglês:",
    traducao_label: "Emakua:",
    portugues_valor: "Escrita: Bom | Fala: Bom | Leitura: Bom",
    ingles_valor: "Escrita: Bom | Fala: Razoável | Leitura: Bom",
    traducao_valor: "Escrita: Razoável | Fala: Bom | Leitura: Razoável",
    experiencias_titulo: "Experiências, projectos e impacto social",
    experiencias_intro: "Esta secção apresenta de forma mais detalhada as experiências desenvolvidas em organizações, plataformas e actividades comunitárias.",
    exp1_titulo: "Parlamento Infantil",
    exp1_texto: "Participação activa em debates, encontros, palestras, seminários e actividades voltadas para a defesa dos direitos da criança. Esta experiência contribuiu para o fortalecimento da minha capacidade de expressão, escuta, liderança e representação juvenil.",
    exp2_titulo: "Plataforma de Participação de Adolescentes e Jovens",
    exp2_texto: "Envolvimento em campanhas de sensibilização, debates juvenis, encontros comunitários, acções de mobilização social e promoção da participação activa dos adolescentes e jovens. Foi um espaço importante para aprendizagem, partilha de ideias e construção de soluções colectivas.",
    exp3_titulo: "Clube de Direitos Humanos – Associação Ukhavihera",
    exp3_texto: "Participação em palestras de conscientização, jornadas de limpeza, actividades desportivas, debates, workshops, seminários e acções de cidadania. A experiência ajudou-me a reforçar o espírito de equipa, o compromisso social e a valorização dos direitos humanos.",
    exp4_titulo: "Mentoria – Associação Kutenga",
    exp4_texto: "Realização de sessões de mentoria em diferentes bairros sobre uniões prematuras, diálogo comunitário, sensibilização e apoio aos adolescentes e jovens. Esta actividade reforçou em mim a responsabilidade social, a escuta activa e a comunicação comunitária.",
    exp5_titulo: "Acelerador Juvenil",
    exp5_texto: "Participação em formações ligadas à rádio, comunicação, habilidades para a vida, lógica de programação e programação web. Esta experiência ajudou-me a crescer pessoalmente, a desenvolver novas capacidades e a acreditar mais no uso da tecnologia como instrumento de mudança social.",
    fotos_titulo: "Fotos e actividades",
    fotos_intro: "As descrições ficam visíveis e apenas as fotos abrem em popup. Cada bloco mantém um tamanho mais equilibrado para não ficar muito alto no ecrã.",
    foto1_titulo: "Parlamento Infantil",
    foto1_texto: "Participação em seminários, workshops, debates, encontros formativos e actividades de sensibilização ligadas à defesa dos direitos da criança e da participação activa dos jovens.",
    foto2_titulo: "Plataforma de Participação de Adolescentes e Jovens",
    foto2_texto: "Participação em campanhas, debates, mobilização comunitária e actividades juvenis destinadas ao fortalecimento da voz dos adolescentes e jovens.",
    foto3_titulo: "Clube de Direitos Humanos – Associação Ukhavihera",
    foto3_texto: "Participação em jornadas de limpeza, palestras de conscientização, actividades desportivas, workshops e seminários ligados à cidadania e direitos humanos.",
    foto4_titulo: "Mentoria em diferentes bairros",
    foto4_texto: "Sessões de mentoria sobre uniões prematuras, apoio a adolescentes e jovens, diálogo comunitário e actividades de educação social em vários bairros.",
    foto5_titulo: "Acelerador Juvenil",
    foto5_texto: "Participação em actividades de comunicação, rádio, programação, criatividade, trabalho em equipa e desenvolvimento de soluções com impacto comunitário.",
    rodape_texto: "Portfólio pessoal com foco em participação juvenil, mobilização social e desenvolvimento comunitário.",
    rodape_contacto: "Contacto:",
    pagina_contactar_titulo: "Contactar",
    contacto_titulo: "Entrar em contacto",
    contacto_intro: "Nesta página podes adicionar os teus links reais de WhatsApp, Facebook e Instagram. Enquanto isso, ao clicar em cada botão, aparece uma mensagem com a informação correspondente.",
    whatsapp_desc: "Aqui ficará o teu link directo para conversa no WhatsApp.",
    abrir_whatsapp: "Abrir WhatsApp",
    facebook_desc: "Aqui ficará o teu link do perfil ou página de Facebook.",
    abrir_facebook: "Abrir Facebook",
    instagram_desc: "Aqui ficará o teu link oficial do Instagram.",
    abrir_instagram: "Abrir Instagram",
    email_desc: "Podes entrar em contacto directamente pelo email.",
    enviar_email: "Enviar email",
    telefone_titulo: "Telefone",
    telefone_desc: "Contacto directo por chamada ou mensagem.",
    ligar_agora: "Ligar agora",
    popup_titulo: "Informação do link"
  },

  en: {
    marca: "Personal Portfolio",
    menu_titulo: "Menu",
    menu_inicio: "Home",
    menu_sobre: "About me",
    menu_competencias: "Skills",
    menu_percurso: "Journey",
    menu_experiencias: "Experiences",
    menu_fotos: "Photos and activities",
    menu_contactar: "Contact",
    hero_texto: "I was born on June 18, 2008 in Pemba, Cabo Delgado Province, son of Fernando Omuge and Arminda de Fátima Arcanjo. I am a dedicated, curious person committed to community development, youth participation, and the promotion of adolescents' and young people's rights.",
    botao_contactar: "Contact",
    rotulo_hero: "Social impact and youth participation",
    titulo_hero: "Experiences, projects and community contribution",
    texto_hero_destaque: "This portfolio presents my academic, community and social journey, bringing together experiences in talks, debates, youth participation, social mobilization, community projects, seminars, workshops, mentoring activities and awareness actions in different neighborhoods and institutions.",
    chip_1: "Talks and debates",
    chip_2: "Youth participation",
    chip_3: "Social mobilization",
    chip_4: "Community projects",
    chip_5: "Seminars and workshops",
    chip_6: "Youth mentoring",
    chip_7: "Human rights",
    chip_8: "Community education",
    sobre_titulo: "About me",
    sobre_intro: "Here you will find personal information, education, skills, experiences, social participation and areas where I can contribute.",
    biografia_titulo: "Biography",
    biografia_texto: "I am Mussagi Fernando Omuge, from Pemba. I completed 10th grade in 2023 and 12th grade in 2025 at Escola Secundária de Pemba. Over the years, I have taken part in different community and youth initiatives related to children's rights, social awareness, citizenship, school debates, talks, cleaning campaigns, sports activities, workshops and mentoring projects. I am interested in technology, community education, youth leadership and social development.",
    info_titulo: "Main information",
    nome_label: "Name:",
    nascimento_label: "Date of birth:",
    nascimento_valor: "June 18, 2008",
    naturalidade_label: "Place of birth:",
    disponibilidade_label: "Availability:",
    disponibilidade_valor: "Training, volunteering and job opportunities",
    telefone_label: "Phone:",
    competencias_titulo: "Skills and spoken languages",
    competencias_intro: "This section highlights the skills acquired throughout my education and participation in social, educational and community activities.",
    competencias_lista_titulo: "Skills",
    comp_1: "Interpersonal communication",
    comp_2: "Youth participation and leadership",
    comp_3: "Social and community mobilization",
    comp_4: "Organization of talks and debates",
    comp_5: "Mentoring and youth support",
    comp_6: "Teamwork",
    comp_7: "Basic computer skills",
    comp_8: "Basic web programming",
    comp_9: "Ability to adapt and learn",
    comp_10: "Conducting awareness activities",
    linguas_titulo: "Spoken languages",
    portugues_label: "Portuguese:",
    ingles_label: "English:",
    traducao_label: "Emakua:",
    portugues_valor: "Writing: Good | Speaking: Good | Reading: Good",
    ingles_valor: "Writing: Good | Speaking: Fair | Reading: Good",
    traducao_valor: "Writing: Fair | Speaking: Good | Reading: Fair",
    experiencias_titulo: "Experiences, projects and social impact",
    experiencias_intro: "This section presents in more detail the experiences developed in organizations, platforms and community activities.",
    exp1_titulo: "Children's Parliament",
    exp1_texto: "Active participation in debates, meetings, talks, seminars and activities focused on defending children's rights. This experience contributed to strengthening my expression, listening, leadership and youth representation skills.",
    exp2_titulo: "Adolescents and Youth Participation Platform",
    exp2_texto: "Involvement in awareness campaigns, youth debates, community meetings, social mobilization actions and the promotion of active participation of adolescents and young people. It was an important space for learning, sharing ideas and building collective solutions.",
    exp3_titulo: "Human Rights Club – Ukhavihera Association",
    exp3_texto: "Participation in awareness talks, cleaning campaigns, sports activities, debates, workshops, seminars and citizenship actions. This experience helped strengthen my team spirit, social commitment and appreciation of human rights.",
    exp4_titulo: "Mentoring – Kutenga Association",
    exp4_texto: "Conducting mentoring sessions in different neighborhoods on premature unions, community dialogue, awareness and support for adolescents and young people. This activity strengthened my social responsibility, active listening and community communication.",
    exp5_titulo: "Youth Accelerator",
    exp5_texto: "Participation in training related to radio, communication, life skills, programming logic and web programming. This experience helped me grow personally, develop new skills and believe more in the use of technology as a tool for social change.",
    fotos_titulo: "Photos and activities",
    fotos_intro: "Descriptions remain visible and only the photos open in a popup. Each block keeps a more balanced size so it does not appear too tall on screen.",
    foto1_titulo: "Children's Parliament",
    foto1_texto: "Participation in seminars, workshops, debates, training meetings and awareness activities related to defending children's rights and active youth participation.",
    foto2_titulo: "Adolescents and Youth Participation Platform",
    foto2_texto: "Participation in campaigns, debates, community mobilization and youth activities aimed at strengthening the voice of adolescents and young people.",
    foto3_titulo: "Human Rights Club – Ukhavihera Association",
    foto3_texto: "Participation in cleaning campaigns, awareness talks, sports activities, workshops and seminars related to citizenship and human rights.",
    foto4_titulo: "Mentoring in different neighborhoods",
    foto4_texto: "Mentoring sessions on premature unions, support for adolescents and young people, community dialogue and social education activities in several neighborhoods.",
    foto5_titulo: "Youth Accelerator",
    foto5_texto: "Participation in activities related to communication, radio, programming, creativity, teamwork and the development of solutions with community impact.",
    rodape_texto: "Personal portfolio focused on youth participation, social mobilization and community development.",
    rodape_contacto: "Contact:",
    pagina_contactar_titulo: "Contact",
    contacto_titulo: "Get in touch",
    contacto_intro: "On this page you can add your real WhatsApp, Facebook and Instagram links. For now, when someone clicks each button, a message with the corresponding information appears.",
    whatsapp_desc: "Your direct WhatsApp chat link will appear here.",
    abrir_whatsapp: "Open WhatsApp",
    facebook_desc: "Your Facebook profile or page link will appear here.",
    abrir_facebook: "Open Facebook",
    instagram_desc: "Your official Instagram link will appear here.",
    abrir_instagram: "Open Instagram",
    email_desc: "You can contact me directly by email.",
    enviar_email: "Send email",
    telefone_titulo: "Phone",
    telefone_desc: "Direct contact by call or message.",
    ligar_agora: "Call now",
    popup_titulo: "Link information"
  },

  es: {
    marca: "Portafolio Personal",
    menu_titulo: "Menú",
    menu_inicio: "Inicio",
    menu_sobre: "Sobre mí",
    menu_competencias: "Competencias",
    menu_percurso: "Trayectoria",
    menu_experiencias: "Experiencias",
    menu_fotos: "Fotos y actividades",
    menu_contactar: "Contactar",
    hero_texto: "Nací el 18 de junio de 2008 en Pemba, provincia de Cabo Delgado, hijo de Fernando Omuge y Arminda de Fátima Arcanjo. Soy una persona dedicada, curiosa y comprometida con el desarrollo comunitario, la participación juvenil y la promoción de los derechos de los adolescentes y jóvenes.",
    botao_contactar: "Contactar",
    rotulo_hero: "Impacto social y participación juvenil",
    tit