function inicializarGestores()
{
	var imagen = document.getElementById("imagen");
	var reloj = setInterval(cambiarImagen, 5000);
	var pausado = false;

	imagen.onclick = function()
	{
		alert("Has pulsado la imagen");
		if(pausado){
			reloj = setInterval(cambiarImagen, 5000);
			pausado = false;
		}else{
			clearInterval(reloj);
			pausado = true;
		}
	}

	var usuario = document.getElementById("usuario");
	usuario.value = 'tu@email';

	usuario.onblur = function(){
		if (usuario.value == ''){
			usuario.value = "tu@email";
		}
	}

	usuario.onfocus = function(){
		if (usuario.value == 'tu@email'){
			usuario.value = '';
		}
	}

	var item = document.getElementById("combobox");
	item.addEventListener("change",gestorCombo);

	function gestorCombo(){
		console.log(item.value);
		console.log(item.options[item.selectedIndex].text);
		console.log(item.selectedIndex);
	} 

	var formulario = document.getElementById('formulario');
	formulario.onsubmit = function(){
		console.log("click en submit");
		return false;
	}

	var numImg = 1;
	imagen.style.backgroundImage = "url(imagenes/sesamo.jpg)";
	

	function cambiarImagen(){
		console.log(numImg);
		var imagen = document.getElementById("imagen");
		switch (numImg) {
			case 1:
				imagen.style.backgroundImage = "url(imagenes/fresas.jpg)";
			  break;
			case 2:
				imagen.style.backgroundImage = "url(imagenes/limon.jpg)";
			  break;
			case 3:
				imagen.style.backgroundImage = "url(imagenes/mandarinas.jpg)";
			  break;
			case 4:
				imagen.style.backgroundImage = "url(imagenes/manzanas.jpg)";
			break;
			case 5:
				imagen.style.backgroundImage = "url(imagenes/melon.jpg)";
			  break;
			case 6:
				imagen.style.backgroundImage = "url(imagenes/sesamo.jpg)";
				numImg = 0;
			  break;
			default:
			  console.log("Mal numero de imagen");
		  }
		  numImg++;
		console.log("cambio de imagen");
	}
}

window.onload = inicializarGestores;

