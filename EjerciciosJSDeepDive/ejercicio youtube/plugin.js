$.fn.youtube = function(listaTitulo,listaVideo, width="100px", height="80px")
{
	if (listaVideo.length !== 0)
	{
		var listaLi='<li style="list-style:none"></li>';
		var listaP='<h5 style="text-transform:uppercase"></h5>';
		for (var i = 0; i < listaVideo.length; i++)
		{
			
			let contVideo = '<iframe class="contVideo" frameborder="0" allowfullscreen></iframe>';
			let url = 'https://www.youtube.com/embed/' + listaVideo[i];

			let $cont_video = $(contVideo);
			$cont_video.attr('src', url);
			$cont_video.css('width', width);
			$cont_video.css('height', height);


			let $listaLi = $(listaLi);
			let $listaP = $(listaP);
			$($listaP).append(listaTitulo[i]);
			$($listaLi).append($listaP)
			$($listaLi).append($cont_video);
			$(this).append($listaLi);
		};
	}
	else
	{
		$(this).html('no hay videos');
	}
}