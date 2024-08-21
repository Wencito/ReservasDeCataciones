function reservar() {
    // Obtener los valores del formulario
    const visitantes = document.getElementById('visitantes').value;
    const idioma = document.getElementById('idioma').value;
    const fecha = document.getElementById('fecha').value;

    // Redirigir a la página de confirmación con los detalles como parámetros
    window.location.href = `confirmacion.html?visitantes=${visitantes}&idioma=${idioma}&fecha=${fecha}`;
}

window.onload = function() {
    // Este código solo se ejecutará en confirmacion.html
    if (document.getElementById("detalles-visitantes")) {
        const urlParams = new URLSearchParams(window.location.search);
        document.getElementById("detalles-visitantes").textContent = urlParams.get('visitantes');
        document.getElementById("detalles-idioma").textContent = urlParams.get('idioma');
        document.getElementById("detalles-fecha").textContent = urlParams.get('fecha');
    }
}
