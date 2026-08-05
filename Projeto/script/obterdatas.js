// RODAPÉ (Ano e Última Modificação)

// Obtém o ano atual
const anoAtual = new Date().getFullYear();

// Exibe o ano dos direitos autorais se o elemento existir
const elemAno = document.getElementById("anoatual");
if (elemAno) {
    elemAno.textContent = anoAtual;
}

// Exibe a data da última modificação do documento se o elemento existir
const elemModif = document.getElementById("ultimamodificacao");
if (elemModif) {
    elemModif.textContent = `última modificação: ${document.lastModified}`;
}

// FORMULÁRIO (Salva contagem no localStorage)

const formHistoria = document.getElementById("form-historia");

if (formHistoria) {
    formHistoria.addEventListener("submit", () => {
        // Incrementa o contador de envios no localStorage
        let avaliacoesEnviadas = Number(window.localStorage.getItem("avaliacoes-count")) || 0;
        avaliacoesEnviadas++;
        window.localStorage.setItem("avaliacoes-count", avaliacoesEnviadas);
    });
}