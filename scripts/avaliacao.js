// Exibe o ano dos direitos autorais
const anoAtual = new Date().getFullYear();
document.getElementById("anoatual").textContent = anoAtual;

// Exibe a data da última modificação do documento
document.getElementById("ultimamodificacao").textContent =
    `última modificação: ${document.lastModified}`;

// Contador de avaliações usando localStorage
let contador = localStorage.getItem("contadorAvaliacoes");

contador = contador ? Number(contador) + 1 : 1;

localStorage.setItem("contadorAvaliacoes", contador);

document.getElementById("contador").textContent = contador;