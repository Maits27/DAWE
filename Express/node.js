var http = require('http');

http.createServer(function (req, res) { //Se llama al recibir peticiones
    // Cabecera HTTP con el código de estado 200 (OK) y el tipo de contenido
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hola Mundo\n");
    res.end();
}).listen(8080); //El servidor escucha en el puerto 8080´

// URL para acceso al servidor: http://localhost:8080/
console.log('Servidor ejecutándose en http://localhost:8080/'); 


//////////////////////////////////////////////////////////////////////////////
////////////////////////////////////EXPRESS///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// Para atender peticiones GET, POST, etc. 
// necesitaríamos hacer todo el código nosotros. → Solución: framework Express

var express = require('express');
var app = express(); // El objeto app es una instancia de express que nos permite varias opciones

////Enrutadores o manejadores/gestores de rutas: GET, POST.../////
// Podemos querer agrupar todos los manejadores de rutas de una 
// sección o parte de la web en otro fichero (módulo), por ejemplo, wiki.js.
let wiki = require('./wiki.js');
app.use('/wiki', wiki); //Usamos el enrutador wiki

// En app.use le estamos indicando que "monte" el objeto Router y sus 
//manejadores de rutas sobre wiki/. 

//  Incluso si en wiki.js hemos definido la petición GET /, al montarlo ,
//  la petición pasará a ser wiki/. 

//  Si en wiki.js hemos definido la petición GET /about, 
//  al montarlo, la petición pasará a ser wiki/about/.


///////////////////Sin hacer uso del enrutador///////////////////////

app.get('/', function (req, res) { //peticion GET a '/'
    res.send('Hello World!'); //En vez del metodo write, usamos send
});

app.get('/libros', function (req, res) { //peticion GET a '/libros'
    res.send('Estos son los libros'); //En vez del metodo write, usamos send
});

// app.listen(3000, function () { //Devuelve el objeto servidor
//     // Mensaje que aparece en LA CONSOLA al arrancar el servidor
//     console.log('Example app listening on port 3000!');
// });
let utils = require('./utils'); // Sin .js

//Dejamos el resto igual:
app.listen(3000, utils.holamundo);

///////////////////Mediante expresiones regulares///////////////////////
app.get('/ab?cd', (req, res) => {
    // hacer algo
})
//Pasar un valor:
app.get('/borrar/:userId/libros/:bookId', (req, res) => {
    // en req.params podremos acceder a req.params.userId y req.params.bookId
})


//////////////////////////////////////MIDELWARE//////////////////////////////////////

app.use(funcion_middleware);

// Esta función middleware funcionará para todo tipo de peticiones HTTP 
// (GET, POST…) y todas las rutas (/, /about, /wiki/about…).
//      Para limitarlo a peticiones de una ruta concreta:
app.use("/ruta", funcion_middleware);
//      Para limitarlo a peticiones tipo GET y una ruta concreta:
app.get("/ruta", funcion_middleware);


//      Midelwares ya creadas por Express:
app.use(express.json());
// Nos permite que los datos introducidos por POST y PUT 
// sean recibidos en formato JSON (NO ADMITE FORMULARIOS).
app.use(express.urlencoded({ extended: false }));
// Con  el atributo "extended" a true permitiría incluir datos anidados.
// Ejemplo de uso:
app.post("/registro", (req, res) => {
    let datosUsuario = req.body;
});
// Servir (hacer visibles) los ficheros dentro de nuestra carpeta public/. 
// Visualizarlo en el navegador. Esto vale para cualquier fichero .css, .js, etc.
app.use(express.static("public"));
app.use("/media", express.static("public"));
// Para manejar errores:
app.use(function (err, req, res, next) { // incluyen un nuevo argumento err
    console.error(err.stack); // imprime la pila de errores
    res.status(500).send("Something broke!");
});
