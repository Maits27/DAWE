function crearHtml(data) {
    return '<h1>Usuario: ' + data.login +'('+data.name+')</h1>'+
    '<img src="'+data.avatar_url+'" height="200px" weight="200px"><hr>'+
    '<p>'+data.url+'</p>'+
    '<h2>Estadisticas</h2>'+
    '<ul>'+
    '<li>Repositorios: '+data.public_repos+'</li>'+
    '<li>Seguidores: '+data.followers+'</li>'+
    '<li>Seguidos: '+data.following+'</li>'+
    '<li>Ubicacion: '+data.location+'</li>'+
    '</ul>';
}

window.onload = function() {
    console.log("jeje");
    fetch("https://api.github.com/users/Maits27")
    .then(response => response.json())
    .then((data) => {
        let html = crearHtml(data);
        document.body.innerHTML = html;
    }).catch((x) => { 
        console.log("Error: Mete un usuario de verdad, por favor.");
    });
	
}
