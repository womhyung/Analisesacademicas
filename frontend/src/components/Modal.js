export function Modal(conteudo) {
  return `
    <div class="modal-content">
      <span class="close" onclick="fecharModal()">&times;</span>
      <div>${conteudo}</div>
    </div>
  `;
}
