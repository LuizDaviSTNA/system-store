document.addEventListener("DOMContentLoaded", () => {
    // Esconde o painel assim que a página carrega
    const painel_produtos = document.getElementById("painel-produtos");
    painel_produtos.style.display = "none";

    // Mostra o painel quando clica no botão
    document.getElementById("produtos").addEventListener("click", () => {
      painel_produtos.style.display = "block";
    });
  });