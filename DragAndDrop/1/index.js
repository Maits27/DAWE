window.onload = function() {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            // Lógica de subida aquí
            uploadFunction();
        }
    });
}


function uploadFunction() {
    // Lógica de subida
    var texto = document.getElementById('barra').value;
    alert(`Búsqueda: ${texto}`);
    // Aquí puedes agregar tu código para subir el archivo
}