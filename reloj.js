function iniciarReloj() {
  function mostrarHora() {
    const ahora = new Date();
    const horaActual = ahora.toLocaleTimeString();
    alert(`Son las:  ${horaActual}`);
  }
  mostrarHora();
  setInterval(mostrarHora, 60000);
}
iniciarReloj();