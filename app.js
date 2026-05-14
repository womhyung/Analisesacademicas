// Importando páginas e componentes
import { Home } from "./src/pages/Home.js";
import { Login } from "./src/pages/Login.js";
import { Feed } from "./src/pages/Feed.js";
import { Perfil } from "./src/pages/Perfil.js";

// Função de navegação
function navegar(pagina) {
  const conteudo = document.getElementById("conteudo");
  if (pagina === "home") conteudo.innerHTML = Home();
  if (pagina === "login") conteudo.innerHTML = Login();
  if (pagina === "feed") conteudo.innerHTML = Feed();
  if (pagina === "perfil") conteudo.innerHTML = Perfil();
}

// Eventos dos botões
document.getElementById("btn-home").addEventListener("click", () => navegar("home"));
document.getElementById("btn-login").addEventListener("click", () => navegar("login"));
document.getElementById("btn-feed").addEventListener("click", () => navegar("feed"));
document.getElementById("btn-perfil").addEventListener("click", () => navegar("perfil"));

// Modal
function abrirModal(analise) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");
  body.innerHTML = `
    <h2>${analise}</h2>
    <canvas id="grafico" width="400" height="200"></canvas>
    <div id="nuvem" style="width:400px; height:200px;"></div>
    <button>Baixar PDF</button>
    <button>Baixar Word</button>
  `;
  modal.style.display = "block";

  // Gráfico Chart.js
  const ctx = document.getElementById("grafico").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Opção A", "Opção B", "Opção C"],
      datasets: [{
        label: "Respostas",
        data: [12, 19, 7],
        backgroundColor: ["#00c6ff", "#4caf50", "#9c27b0"]
      }]
    },
    options: {
      plugins: {
        legend: { labels: { color: "#eee" } },
        title: { display: true, text: "Resultados", color: "#fff" }
      },
      scales: {
        x: { ticks: { color: "#eee" }, grid: { color: "#333" } },
        y: { ticks: { color: "#eee" }, grid: { color: "#333" } }
      }
    }
  });

  // Wordcloud
  WordCloud(document.getElementById("nuvem"), {
    list: [["excelente", 30], ["bom", 20], ["regular", 15], ["ruim", 10]],
    color: () => "#fff",
    backgroundColor: "#121212"
  });
}

// Fechar modal
document.querySelector(".close").addEventListener("click", fecharModal);
function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// Página inicial
navegar("home");
