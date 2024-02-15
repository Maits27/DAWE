


window.onload = function() {
    document.addEventListener('keydown', function(event) {
        let message = '';
        switch (event.key) {
            case 'ArrowUp':
                message = 'Arriba';
                break;
            case 'ArrowDown':   
                message = 'Abajo';       
                break;
            case 'ArrowLeft':
                message = 'Izquierda';
                break;
            case 'ArrowRight':
                message = 'Derecha';
                break;
            default:
                break;
        }
        if (message!=='') {
            alert(message);
            event.preventDefault();
        }
    });
}