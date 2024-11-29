// Función de validación de formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value;
    const motivo = document.getElementById('motivo').value;
    const email = document.getElementById('email').value;

    if (!nombre || !motivo || !email) {
        alert("Por favor, completa todos los campos.");
        event.preventDefault(); // Evita el envío del formulario
    } else {
        alert("Formulario enviado correctamente.");
    }
});
// Obtener el botón por su ID
const welcomeButton = document.getElementById('welcomeButton');

// Agregar un evento de clic al botón
welcomeButton.addEventListener('click', function() {
    alert("¡Bienvenid@ a mi Sitio Web!");
});