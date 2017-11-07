
$.fn.pinterest = function(listaImagenes, width="100px")
{
	if (listaImagenes.length !== 0)
	{
		for (var i = 0; i < listaImagenes.length; i++)
		{
			
			let contImagenes = '<img class="contImagenes"> ';
			let url = 'https://' + listaImagenes[i];

			let $cont_Imagenes = $(contImagenes);
			$cont_Imagenes.attr('src', url);
			$cont_Imagenes.css('width', width);
			$cont_Imagenes.css('margin', 10);
			$cont_Imagenes.css('vertical-align', 'top');

			$(this).append($cont_Imagenes);

						
		};
	}
	else
	{
		$(this).html('no hay Imagenes');
	}
}