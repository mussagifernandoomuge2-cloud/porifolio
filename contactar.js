const corpo = document.body;
const botaoTema = document.getElementById("botaoTema");
const popupMensagem = document.getElementById("popupMensagem");
const textoPopupMensagem = document.getElementById("textoPopupMensagem");
const fecharPopupMensagem = document.getElementById("fecharPopupMensagem");
const seletorIdioma = document.getElementById("selectorIdioma");

/* ---------------- TEMA ---------------- */
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
  if (botaoTema) {
    botaoTema.textContent = "☀️";
  }
}

/* ---------------- POPUP ---------------- */
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
      "";

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

/* ---------------- TRADUÇÕES ---------------- */
const traducoes = {
  pt: {
    contactar_titulo_pagina: "Contactar",
    contactar_titulo: "Entrar em contacto",
    contactar_intro:
      "Nesta página podes adicionar os teus links reais de WhatsApp, Facebook e Instagram. Enquanto isso, ao clicar em cada botão, aparece uma mensagem com a informação correspondente.",
    contacto_whatsapp: "WhatsApp",
    contacto_whatsapp_texto:
      "Aqui ficará o teu link directo para conversa no WhatsApp.",
    botao_abrir_whatsapp: "Abrir WhatsApp",
    contacto_facebook: "Facebook",
    contacto_facebook_texto:
      "Aqui ficará o teu link do perfil ou página de Facebook.",
    botao_abrir_facebook: "Abrir Facebook",
    contacto_instagram: "Instagram",
    contacto_instagram_texto:
      "Aqui ficará o teu link oficial do Instagram.",
    botao_abrir_instagram: "Abrir Instagram",
    contacto_email: "Email",
    contacto_email_texto:
      "Podes entrar em contacto directamente pelo email.",
    botao_enviar_email: "Enviar email",
    contacto_telefone: "Telefone",
    contacto_telefone_texto:
      "Contacto directo por chamada ou mensagem.",
    botao_ligar_agora: "Ligar agora",
    popup_info_titulo: "Informação do link",
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
      "On this page you can add your real WhatsApp, Facebook and Instagram links. For now, when someone clicks each button, a message with the corresponding information appears.",
    contacto_whatsapp: "WhatsApp",
    contacto_whatsapp_texto:
      "Your direct WhatsApp chat link will appear here.",
    botao_abrir_whatsapp: "Open WhatsApp",
    contacto_facebook: "Facebook",
    contacto_facebook_texto:
      "Your Facebook profile or page link will appear here.",
    botao_abrir_facebook: "Open Facebook",
    contacto_instagram: "Instagram",
    contacto_instagram_texto:
      "Your official Instagram link will appear here.",
    botao_abrir_instagram: "Open Instagram",
    contacto_email: "Email",
    contacto_email_texto:
      "You can contact me directly by email.",
    botao_enviar_email: "Send email",
    contacto_telefone: "Phone",
    contacto_telefone_texto:
      "Direct contact by call or message.",
    botao_ligar_agora: "Call now",
    popup_info_titulo: "Link information",
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
      "En esta página puedes añadir tus enlaces reales de WhatsApp, Facebook e Instagram. Mientras tanto, al hacer clic en cada botón, aparece un mensaje con la información correspondiente.",
    contacto_whatsapp: "WhatsApp",
    contacto_whatsapp_texto:
      "Aquí aparecerá tu enlace directo para conversar por WhatsApp.",
    botao_abrir_whatsapp: "Abrir WhatsApp",
    contacto_facebook: "Facebook",
    contacto_facebook_texto:
      "Aquí aparecerá el enlace de tu perfil o página de Facebook.",
    botao_abrir_facebook: "Abrir Facebook",
    contacto_instagram: "Instagram",
    contacto_instagram_texto:
      "Aquí aparecerá tu enlace oficial de Instagram.",
    botao_abrir_instagram: "Abrir Instagram",
    contacto_email: "Email",
    contacto_email_texto:
      "Puedes ponerte en contacto directamente por correo electrónico.",
    botao_enviar_email: "Enviar correo",
    contacto_telefone: "Teléfono",
    contacto_telefone_texto:
      "Contacto directo por llamada o mensaje.",
    botao_ligar_agora: "Llamar ahora",
    popup_info_titulo: "Información del enlace",
    rodape_nome: "Mussagi Fernando Omuge",
    rodape_descricao:
      "Portafolio personal centrado en participación juvenil, movilización social y desarrollo comunitario.",
    rodape_contacto:
      "Contacto: +258 861470922 | Email: mussagifernandoomuge2@gmail.com"
  }
};

function aplicarIdioma(idioma) {
  const idiomaValido = traducoes[idioma] ? idioma : "pt";
  document.documentElement.lang = idiomaValido;

  document.querySelectorAll("[data-traducao]").forEach((elemento) => {
    const chave = elemento.getAttribute("data-traducao");

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