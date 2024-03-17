
window.onload = function () {
    // Obtener referencias a los elementos del DOM
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const colorNombre = document.getElementById('colorNombre');
    const colorApellido = document.getElementById('colorApellido');
    const h1 = document.querySelector('h1');

    // Función para actualizar el color del nombre y apellido
    function actualizarColor() {
        nombre.style.color = colorNombre.value;
        apellido.style.color = colorApellido.value;
    }

    // Event listener para los campos de color
    colorNombre.addEventListener('input', actualizarColor);
    colorApellidoInput.addEventListener('input', actualizarColor);

    // Event listener para los campos de texto
    function mostrarHola() {
        holaElement.style.display = (nombreInput.value || apellidoInput.value) ? 'block' : 'none';
        nombreSpan.textContent = nombreInput.value;
        apellidoSpan.textContent = apellidoInput.value;
        nombreSpan.style.display = nombreInput.value ? 'inline' : 'none';
        apellidoSpan.style.display = apellidoInput.value ? 'inline' : 'none';
    }

    nombreInput.addEventListener('input', mostrarHola);
    apellidoInput.addEventListener('input', mostrarHola);
}