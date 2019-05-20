$(function () {
	$('#search_form').submit(function(e){
		e.preventDefault();

	})

//ALMACENO TODO LOS QUE ESCRIBO
	$('#search').keyup(function(){
		var envio= $('#search').val();


		$('#resultados').html('<h2> <img src="img/loading.gif" width="20">Cargando </h2>');



	})

})