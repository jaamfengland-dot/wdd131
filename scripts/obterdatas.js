// Obtém o ano atual
const anoAtual = new Date().getFullYear();

// Exibe o ano dos direitos autorais
document.getElementById("copyright").textContent =
    `© ${anoAtual}`;

// Exibe a data da última modificação do documento
document.getElementById("lastModified").textContent =
    `Última modificação: ${document.lastModified}`;