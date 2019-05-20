


function numerosAleatorios() {

var lista = [0,1,2,3,4,5,6,7,8,9];

lista = lista.sort(function() {return Math.random() - 0.5});
valores = (lista.slice(1,6));

return valores;

}





var imagenes = new Array();
imagenes[0] = 'images/1.jpg';
imagenes[1] = 'images/2.jpg';
imagenes[2] = 'images/3.jpg';
imagenes[3] = 'images/4.jpg';
imagenes[4] = 'images/5.jpg';
imagenes[5] = 'images/6.jpg';
imagenes[6] = 'images/7.jpg';
imagenes[7] = 'images/8.jpg';
imagenes[8] = 'images/9.jpg';
imagenes[9] = 'images/10.jpg';


var cont;

var lista; 

function carrousel(contenedor) {
	
 	contenedor.addEventListener('click', e => {
 			let atras = contenedor.querySelector('.btn1'),
 			    adelante = contenedor.querySelector('.button'),
 			    ejecutar = contenedor.querySelector('.boton_personalizado'),
 			    //DONDE VAMOS A INSERTAR LA IMAGEN
 				img = contenedor.querySelector('img'),

 				tgt = e.target;

 				if (tgt == ejecutar) {
 					lista = numerosAleatorios();
 					alert(lista);
 					cont = 0;


 				}

 				//PARA IR HACIA ADELANTE
 				if (tgt == adelante) {
 					if (cont < 5 ) {
 						//alert(cont);
 						img.src = imagenes[lista[cont]];
 						cont++;

 					}else {
 						document.getElementById('siguiente').disabled = true;
 					}
 				}

 				//PARA IR ATRAS
 				if (tgt == atras) {
 					if (cont>0) {
 						img.src = imagenes[lista[cont-1]];
 						cont--;

 					}else {
 						
 						document.getElementById('atras').disabled = true;
 					}

 				} 













 	});
 }

/**
document.addEventListener("DOMContentLoaded", () => {
	let contenedor= document.querySelector('.container');

	carrousel(contenedor);
} );

***/

window.addEventListener('load', function() {
	let contenedor= document.querySelector('.container');
	carrousel(contenedor);

  });


