// Obtener el modal
var modal = document.getElementById("aviso-cookies-modal");

// Mostrar el modal al cargar la página
window.onload = function() {
    modal.style.display = "block";
};

// Función para aceptar cookies y ocultar el modal
function aceptarCookies() {
    // Guardar la aceptación de cookies en el almacenamiento local
    localStorage.setItem('cookies-aceptadas', 'true');
    // Ocultar el modal
    modal.style.display = 'none';
}

// Función para no aceptar cookies y redirigir a otra página
function noAceptarCookies() {
    // Redirigir a otra página
    window.location.href = "https://otrapagina.com";
}
