import { Card } from "../components/Card.js";

export function Feed() {
  return `
    <h2>Feed de Análises</h2>
    ${Card("Análise 1", "Resumo da análise...")}
    ${Card("Análise 2", "Resumo da análise...")}
  `;
}
