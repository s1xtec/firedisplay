function changeClass(x)
{
	x.className=(x.className=="move_app_abre")?"move_app_fecha":(x.className=="move_app_fecha")?"move_app_abre":"move_app_abre";
}

function changeColor(hexa)
{
	if(hexa != "#FFF"){
		$('#pg_externa').css('display', 'none');
		$('#barra_topo').css('background-color', hexa);
		$('#barra_topo').css('border-bottom', '4px solid ' + hexa);
	}
	else
	{
		$('#pg_externa').css('display', 'inline');
		$('#barra_topo').css('background-color', '#E05A13');
		$('#barra_topo').css('border-bottom', '4px solid #F39500');
	}

	$('#fundo_app').css('background-color', hexa);
	changeClass(fundo_app);
}

function carregaPagina(pg_abre, pg_fecha)
{
		$(pg_abre).css('visibility', 'visible');
		$(pg_fecha).css('visibility', 'hidden');
		changeColor('#FFF');	
}