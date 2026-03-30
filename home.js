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
    const mensagem = link.getAttribute(`data-popup-${idioma}`) || link.getAttribute("data-popup-pt");
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
    hero_texto: "Nací el 18 de junio de 2008 en Pemba, provincia de Cabo Delgado, hijo de Fernando Omuge y Arminda de Fátima Arcanjo. Soy una persona dedicada, curiosa y comprometida con el desarrollo comunitario, la participación juvenil y la promoción de los derechos de adolescentes y jóvenes.",
    botao_contactar: "Contactar",
    rotulo_hero: "Impacto social y participación juvenil",
    titulo_hero: "Experiencias, proyectos y contribución comunitaria",
    texto_hero_destaque: "Este portafolio presenta mi trayectoria académica, comunitaria y social, reuniendo experiencias en charlas, debates, participación juvenil, movilización social, proyectos comunitarios, seminarios, talleres, actividades de mentoría y acciones de sensibilización en diferentes barrios e instituciones.",
    chip_1: "Charlas y debates",
    chip_2: "Participación juvenil",
    chip_3: "Movilización social",
    chip_4: "Proyectos comunitarios",
    chip_5: "Seminarios y talleres",
    chip_6: "Mentoría juvenil",
    chip_7: "Derechos humanos",
    chip_8: "Educación comunitaria",
    sobre_titulo: "Sobre mí",
    sobre_intro: "Aquí se reúnen información personal, formación, competencias, experiencias, participación social y áreas en las que puedo contribuir.",
    biografia_titulo: "Biografía",
    biografia_texto: "Soy Mussagi Fernando Omuge, natural de Pemba. Terminé 10.º grado en 2023 y 12.º grado en 2025 en la Escuela Secundária de Pemba. A lo largo de los años participé en diferentes iniciativas comunitarias y juveniles relacionadas con los derechos de la niñez, sensibilización social, ciudadanía, debates escolares, charlas, jornadas de limpieza, actividades deportivas, talleres y proyectos de mentoría. Tengo interés en tecnología, educación comunitaria, liderazgo juvenil y desarrollo social.",
    info_titulo: "Información principal",
    nome_label: "Nombre:",
    nascimento_label: "Fecha de nacimiento:",
    nascimento_valor: "18 de junio de 2008",
    naturalidade_label: "Lugar de nacimiento:",
    disponibilidade_label: "Disponibilidad:",
    disponibilidade_valor: "Formación, voluntariado y oportunidades de empleo",
    telefone_label: "Teléfono:",
    competencias_titulo: "Competencias e idiomas hablados",
    competencias_intro: "En esta parte se destacan las competencias adquiridas a lo largo de mi formación y participación en actividades sociales, educativas y comunitarias.",
    competencias_lista_titulo: "Competencias",
    comp_1: "Comunicación interpersonal",
    comp_2: "Participación y liderazgo juvenil",
    comp_3: "Movilización social y comunitaria",
    comp_4: "Organización de charlas y debates",
    comp_5: "Mentoría y acompañamiento juvenil",
    comp_6: "Trabajo en equipo",
    comp_7: "Conocimientos básicos de informática",
    comp_8: "Conocimientos básicos de programación web",
    comp_9: "Capacidad de adaptación y aprendizaje",
    comp_10: "Conducción de actividades de sensibilización",
    linguas_titulo: "Idiomas hablados",
    portugues_label: "Portugués:",
ingles_label: "Inglés:",
traducao_label: "Emakua:",

portugues_valor: "Escritura: Buena | Habla: Buena | Lectura: Buena",
ingles_valor: "Escritura: Buena | Habla: Regular | Lectura: Buena",
traducao_valor: "Escritura: Regular | Habla: Buena | Lectura: Regular",
    experiencias_titulo: "Experiencias, proyectos e impacto social",
    experiencias_intro: "Esta sección presenta con más detalle las experiencias desarrolladas en organizaciones, plataformas y actividades comunitarias.",
    exp1_titulo: "Parlamento Infantil",
    exp1_texto: "Participación activa en debates, encuentros, charlas, seminarios y actividades orientadas a la defensa de los derechos de la niñez. Esta experiencia contribuyó al fortalecimiento de mi capacidad de expresión, escucha, liderazgo y representación juvenil.",
    exp2_titulo: "Plataforma de Participación de Adolescentes y Jóvenes",
    exp2_texto: "Participación en campañas de sensibilización, debates juveniles, encuentros comunitarios, acciones de movilización social y promoción de la participación activa de adolescentes y jóvenes. Fue un espacio importante de aprendizaje, intercambio de ideas y construcción de soluciones colectivas.",
    exp3_titulo: "Club de Derechos Humanos – Asociación Ukhavihera",
    exp3_texto: "Participación en charlas de concienciación, jornadas de limpieza, actividades deportivas, debates, talleres, seminarios y acciones de ciudadanía. La experiencia me ayudó a fortalecer el espíritu de equipo, el compromiso social y la valoración de los derechos humanos.",
    exp4_titulo: "Mentoría – Asociación Kutenga",
    exp4_texto: "Realización de sesiones de mentoría en diferentes barrios sobre uniones prematuras, diálogo comunitario, sensibilización y apoyo a adolescentes y jóvenes. Esta actividad reforzó en mí la responsabilidad social, la escucha activa y la comunicación comunitaria.",
    exp5_titulo: "Acelerador Juvenil",
    exp5_texto: "Participación en formaciones relacionadas con radio, comunicación, habilidades para la vida, lógica de programación y programación web. Esta experiencia me ayudó a crecer personalmente, desarrollar nuevas capacidades y creer más en el uso de la tecnología como herramienta de cambio social.",
    fotos_titulo: "Fotos y actividades",
    fotos_intro: "Las descripciones permanecen visibles y solo las fotos se abren en una ventana emergente. Cada bloque mantiene un tamaño más equilibrado para no verse demasiado alto en la pantalla.",
    foto1_titulo: "Parlamento Infantil",
    foto1_texto: "Participación en seminarios, talleres, debates, encuentros formativos y actividades de sensibilización relacionadas con la defensa de los derechos de la niñez y la participación activa de los jóvenes.",
    foto2_titulo: "Plataforma de Participación de Adolescentes y Jóvenes",
    foto2_texto: "Participación en campañas, debates, movilización comunitaria y actividades juveniles destinadas a fortalecer la voz de adolescentes y jóvenes.",
    foto3_titulo: "Club de Derechos Humanos – Asociación Ukhavihera",
    foto3_texto: "Participación en jornadas de limpieza, charlas de concienciación, actividades deportivas, talleres y seminarios relacionados con ciudadanía y derechos humanos.",
    foto4_titulo: "Mentoría en diferentes barrios",
    foto4_texto: "Sesiones de mentoría sobre uniones prematuras, apoyo a adolescentes y jóvenes, diálogo comunitario y actividades de educación social en varios barrios.",
    foto5_titulo: "Acelerador Juvenil",
    foto5_texto: "Participación en actividades de comunicación, radio, programación, creatividad, trabajo en equipo y desarrollo de soluciones con impacto comunitario.",
    rodape_texto: "Portafolio personal centrado en participación juvenil, movilización social y desarrollo comunitario.",
    rodape_contacto: "Contacto:",
    pagina_contactar_titulo: "Contactar",
    contacto_titulo: "Ponerse en contacto",
    contacto_intro: "En esta página puedes añadir tus enlaces reales de WhatsApp, Facebook e Instagram. Mientras tanto, al hacer clic en cada botón, aparece un mensaje con la información correspondiente.",
    whatsapp_desc: "Aquí aparecerá tu enlace directo para conversar por WhatsApp.",
    abrir_whatsapp: "Abrir WhatsApp",
    facebook_desc: "Aquí aparecerá el enlace de tu perfil o página de Facebook.",
    abrir_facebook: "Abrir Facebook",
    instagram_desc: "Aquí aparecerá tu enlace oficial de Instagram.",
    abrir_instagram: "Abrir Instagram",
    email_desc: "Puedes ponerte en contacto directamente por correo electrónico.",
    enviar_email: "Enviar correo",
    telefone_titulo: "Teléfono",
    telefone_desc: "Contacto directo por llamada o mensaje.",
    ligar_agora: "Llamar ahora",
    popup_titulo: "Información del enlace"
  }
};

function aplicarIdioma(idioma) {
  const idiomaValido = traducoes[idioma] ? idioma : "pt";
  document.documentElement.lang = idiomaValido;

  document.querySelectorAll("[data-i18n]").forEach((elemento) => {
    const chave = elemento.getAttribute("data-i18n");
    if (traducoes[idiomaValido][chave]) {
      elemento.textContent = traducoes[idiomaValido][chave];
    }
  });

  if (seletorIdioma) {
    seletorIdioma.value = idiomaValido;
  }

  localStorage.setItem("idiomaPortfolio", idiomaValido);
}

if (seletorIdioma) {
  seletorIdioma.addEventListener("change", (evento) => {
    aplicarIdioma(evento.target.value);
  });
}

const idiomaGuardado = localStorage.getItem("idiomaPortfolio") || "pt";
aplicarIdioma(idiomaGuardado);


/* ===== SINCRONIZAÇÃO DA PÁGINA CONTACTAR COM O HOME.JS ===== */
document.addEventListener("DOMContentLoaded", () => {
  const mfoSeletorIdioma =
    document.getElementById("seletorIdioma") ||
    document.getElementById("selectorIdioma");

  const mfoBotaoTema = document.getElementById("botaoTema");

  const mfoTraducoes = {
    pt: {
      contactar_titulo_pagina: "Contactar",
      contactar_titulo: "Entrar em contacto",
      contactar_intro:
        "Escolhe a plataforma que preferires para interagir directamente comigo.",
      contacto_whatsapp: "WhatsApp",
      contacto_whatsapp_texto:
        "Fala comigo directamente pelo WhatsApp.",
      botao_abrir_whatsapp: "Abrir WhatsApp",
      contacto_facebook: "Facebook",
      contacto_facebook_texto:
        "Acede ao meu perfil do Facebook e interage comigo.",
      botao_abrir_facebook: "Abrir Facebook",
      contacto_instagram: "Instagram",
      contacto_instagram_texto:
        "Visita o meu Instagram e acompanha os meus conteúdos.",
      botao_abrir_instagram: "Abrir Instagram",
      contacto_email: "Email",
      contacto_email_texto:
        "Envia-me uma mensagem directamente por email.",
      botao_enviar_email: "Enviar email",
      contacto_telefone: "Telefone",
      contacto_telefone_texto:
        "Liga ou envia uma mensagem directamente.",
      botao_ligar_agora: "Ligar agora",
      rodape_nome: "Mussagi Fernando Omuge",
      rodape_descricao:
        "Portfólio pessoal com foco em participação juvenil, mobilização social e desenvolvimento comunitário.",
      rodape_contacto:
        "Contacto: +258 861470922 | Email: mussagifernandoomuge2@gmail.com"
    },

    en: {
      contactar_titulo_pagina: "Contact",
      contactar_titulo: "Get in touch",
      contactar_intro:
        "Choose the platform you prefer to interact with me directly.",
      contacto_whatsapp: "WhatsApp",
      contacto_whatsapp_texto:
        "Talk to me directly on WhatsApp.",
      botao_abrir_whatsapp: "Open WhatsApp",
      contacto_facebook: "Facebook",
      contacto_facebook_texto:
        "Visit my Facebook profile and interact with me.",
      botao_abrir_facebook: "Open Facebook",
      contacto_instagram: "Instagram",
      contacto_instagram_texto:
        "Visit my Instagram and follow my content.",
      botao_abrir_instagram: "Open Instagram",
      contacto_email: "Email",
      contacto_email_texto:
        "Send me a message directly by email.",
      botao_enviar_email: "Send email",
      contacto_telefone: "Phone",
      contacto_telefone_texto:
        "Call or send a message directly.",
      botao_ligar_agora: "Call now",
      rodape_nome: "Mussagi Fernando Omuge",
      rodape_descricao:
        "Personal portfolio focused on youth participation, social mobilization and community development.",
      rodape_contacto:
        "Contact: +258 861470922 | Email: mussagifernandoomuge2@gmail.com"
    },

    es: {
      contactar_titulo_pagina: "Contactar",
      contactar_titulo: "Ponerse en contacto",
      contactar_intro:
        "Elige la plataforma que prefieras para interactuar conmigo directamente.",
      contacto_whatsapp: "WhatsApp",
      contacto_whatsapp_texto:
        "Habla conmigo directamente por WhatsApp.",
      botao_abrir_whatsapp: "Abrir WhatsApp",
      contacto_facebook: "Facebook",
      contacto_facebook_texto:
        "Accede a mi perfil de Facebook e interactúa conmigo.",
      botao_abrir_facebook: "Abrir Facebook",
      contacto_instagram: "Instagram",
      contacto_instagram_texto:
        "Visita mi Instagram y sigue mi contenido.",
      botao_abrir_instagram: "Abrir Instagram",
      contacto_email: "Email",
      contacto_email_texto:
        "Envíame un mensaje directamente por correo electrónico.",
      botao_enviar_email: "Enviar email",
      contacto_telefone: "Teléfono",
      contacto_telefone_texto:
        "Llama o envía un mensaje directamente.",
      botao_ligar_agora: "Llamar ahora",
      rodape_nome: "Mussagi Fernando Omuge",
      rodape_descricao:
        "Portafolio personal centrado en participación juvenil, movilización social y desarrollo comunitario.",
      rodape_contacto:
        "Contacto: +258 861470922 | Email: mussagifernandoomuge2@gmail.com"
    }
  };

  function mfoAplicarIdioma(mfoIdiomaEscolhido) {
    const mfoIdiomaFinal = mfoTraducoes[mfoIdiomaEscolhido]
      ? mfoIdiomaEscolhido
      : "pt";

    document
      .querySelectorAll("[data-i18n], [data-traducao]")
      .forEach((mfoElemento) => {
        const mfoChave =
          mfoElemento.getAttribute("data-i18n") ||
          mfoElemento.getAttribute("data-traducao");

        if (mfoChave && mfoTraducoes[mfoIdiomaFinal][mfoChave]) {
          mfoElemento.textContent = mfoTraducoes[mfoIdiomaFinal][mfoChave];
        }
      });

    if (mfoSeletorIdioma) {
      mfoSeletorIdioma.value = mfoIdiomaFinal;
    }

    document.documentElement.lang = mfoIdiomaFinal;
    localStorage.setItem("idiomaPortfolio", mfoIdiomaFinal);
  }

  function mfoAplicarTema() {
    const mfoTemaGuardado = localStorage.getItem("temaPortfolio") || "claro";

    if (mfoTemaGuardado === "escuro") {
      document.body.classList.add("modo-escuro");
      if (mfoBotaoTema) {
        mfoBotaoTema.textContent = "☀️";
      }
    } else {
      document.body.classList.remove("modo-escuro");
      if (mfoBotaoTema) {
        mfoBotaoTema.textContent = "🌙";
      }
    }
  }

  function mfoAlternarTema() {
    const mfoNovoTema = document.body.classList.contains("modo-escuro")
      ? "claro"
      : "escuro";

    localStorage.setItem("temaPortfolio", mfoNovoTema);
    mfoAplicarTema();
  }

  function mfoPrepararLinksDiretos() {
    const mfoTodosLinks = document.querySelectorAll(".botao-rede");

    mfoTodosLinks.forEach((mfoLink) => {
      let mfoHref = (mfoLink.getAttribute("href") || "").trim();

      if (!mfoHref) return;

      if (
        mfoHref.includes("@") &&
        !mfoHref.startsWith("mailto:") &&
        !mfoHref.startsWith("http://") &&
        !mfoHref.startsWith("https://") &&
        !mfoHref.startsWith("tel:")
      ) {
        mfoHref = `mailto:${mfoHref}`;
        mfoLink.setAttribute("href", mfoHref);
      }

      if (
        mfoHref.startsWith("http://") ||
        mfoHref.startsWith("https://")
      ) {
        mfoLink.setAttribute("target", "_blank");
        mfoLink.setAttribute("rel", "noopener noreferrer");
      }
    });
  }

  if (mfoSeletorIdioma) {
    mfoSeletorIdioma.addEventListener("change", (evento) => {
      mfoAplicarIdioma(evento.target.value);
    });
  }

  if (mfoBotaoTema) {
    mfoBotaoTema.addEventListener("click", mfoAlternarTema);
  }

  mfoAplicarIdioma(localStorage.getItem("idiomaPortfolio") || "pt");
  mfoAplicarTema();
  mfoPrepararLinksDiretos();
});