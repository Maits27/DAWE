var express = require('express');
var app = express(); // El objeto app es una instancia de express que nos permite varias opciones

////Enrutadores o manejadores/gestores de rutas: GET, POST.../////
// Podemos querer agrupar todos los manejadores de rutas de una 
// sección o parte de la web en otro fichero (módulo), por ejemplo, wiki.js.
var router = express.Router(); //Creamos un enrutador

router.get('/', function(req, res) {
    res.send('Wiki home page');
});

router.get('/libros', function(req, res) {
    res.send('Wiki libros page');
});
