// Obtém o ano atual
const anoAtual = new Date().getFullYear();

// Exibe o ano dos direitos autorais
document.getElementById("anoatual").textContent = anoAtual;

// Exibe a data da última modificação do documento
document.getElementById("ultimamodificacao").textContent =
    `ultima modificação: ${document.lastModified}`;


    const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
{
  nomeDoTemplo: "São Paulo Brasil",
  localizacao: "São Paulo, Brasil",
  consagracao: "1978, 30 de outubro",
  area: 59246,
  urlDaImagem:
  "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-55945.jpg"
},

{
  nomeDoTemplo: "Campinas Brasil",
  localizacao: "Campinas, Brasil",
  consagracao: "2002, 17 de maio",
  area: 49100,
  urlDaImagem:
  "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-6012-main.jpg"
},

{
  nomeDoTemplo: "Assunção Paraguai",
  localizacao: "Assunção, Paraguai",
  consagracao: "2002, 19 de maio",
  area: 11906,
  urlDaImagem:
  "https://churchofjesuschristtemples.org/assets/img/temples/asuncion-paraguay-temple/asuncion-paraguay-temple-6969-main.jpg"
},

]

const listaTemplos = document.getElementById("lista-templos");
const tituloFiltro = document.getElementById("titulo-filtro");

function criarCard(templo) {
    const card = document.createElement("div");
    card.classList.add("card-templo");

    card.innerHTML = `
        <h2>${templo.nomeDoTemplo}</h2>
        <p><span class="rotulo">Localização:</span> ${templo.localizacao}</p>
        <p><span class="rotulo">Dedicado:</span> ${templo.consagracao}</p>
        <p><span class="rotulo">Tamanho:</span> ${templo.area} pés²</p>
        <img src="${templo.urlDaImagem}" alt="${templo.nomeDoTemplo}" loading="lazy">
    `;

    return card;
}

function renderizarTemplos(listaFiltrada) {
    listaTemplos.innerHTML = "";
    listaFiltrada.forEach(function (templo) {
        listaTemplos.appendChild(criarCard(templo));
    });
}

function anoDaConsagracao(templo) {
    return parseInt(templo.consagracao.split(",")[0]);
}

function aplicarFiltro(tipo) {
    let filtrados;

    if (tipo === "antigos") {
        filtrados = templos.filter(t => anoDaConsagracao(t) < 1900);
        tituloFiltro.textContent = "Templos Antigos";
    } else if (tipo === "novos") {
        filtrados = templos.filter(t => anoDaConsagracao(t) > 2000);
        tituloFiltro.textContent = "Templos Novos";
    } else if (tipo === "grandes") {
        filtrados = templos.filter(t => t.area > 90000);
        tituloFiltro.textContent = "Templos Grandes";
    } else if (tipo === "pequenos") {
        filtrados = templos.filter(t => t.area < 10000);
        tituloFiltro.textContent = "Templos Pequenos";
    } else {
        filtrados = templos;
        tituloFiltro.textContent = "Início";
    }

    renderizarTemplos(filtrados);
}

document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function (evento) {
        evento.preventDefault();
        aplicarFiltro(link.dataset.filtro);
    });
});

// Renderiza todos os templos ao carregar a página
aplicarFiltro("todos");