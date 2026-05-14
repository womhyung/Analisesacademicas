export function Card(titulo, resumo) {
  return `
    <div class="card">
      <h3>${titulo}</h3>
      <p>${resumo}</p>
      <button onclick="abrirModal('${titulo}')">Ver Detalhes</button>
    </div>
  `;
}
