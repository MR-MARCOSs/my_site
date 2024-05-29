function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
}

function copiarEmail() {
      navigator.clipboard.writeText('marcosdudu001@gmail.com')
    .then(() => {
      // Opcional: Mostrar mensagem de sucesso
      alert("Email marcosdudu001@gmail.com copiado para a área de transferência!");
    })
    .catch(err => {
      console.error("Falha ao copiar email(marcosdudu001@gmail.com): ", err)
    });
  }
