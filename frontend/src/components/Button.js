export function Button(texto, rota) {
  return `<button onclick="navegar('${rota}')">${texto}</button>`;
}
