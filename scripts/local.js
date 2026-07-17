// Valores de temperatura e vento (métrica: °C e km/h)
const temperaturaC = 8;
const ventoKmh = 15;

document.getElementById("temperatura").textContent = `${temperaturaC}°C`;
document.getElementById("vento").textContent = `${ventoKmh} km/h`;

function calcularSensacaoTermica(temperatura, vento) {
    return 13.12 + 0.6215 * temperatura - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temperatura * Math.pow(vento, 0.16);
}

if (temperaturaC <= 10 && ventoKmh > 4.8) {
    document.getElementById("sensacaoTermica").textContent = `${calcularSensacaoTermica(temperaturaC, ventoKmh).toFixed(1)}°C`;
} else {
    document.getElementById("sensacaoTermica").textContent = "N/A";
}
// Obtém o ano atual
const anoAtual = new Date().getFullYear();
// Exibe o ano dos direitos autorais
document.getElementById("anoatual").textContent = anoAtual;
// Exibe a data da última modificação do documento
document.getElementById("ultimamodificacao").textContent =
    `ultima modificação: ${document.lastModified}`;