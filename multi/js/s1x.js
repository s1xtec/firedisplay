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
		$('#fundo_app').css('background-image', '');
		$('#fundo_app').css('background-color', hexa);
	}
	else
	{
		$('#pg_externa').css('display', 'inline');
		$('#barra_topo').css('background-color', '#E05A13');
		$('#barra_topo').css('border-bottom', '4px solid #F39500');
		$('#fundo_app').css('background-image', '');
		$('#fundo_app').css('background-color', hexa);
	}
	
	if(hexa == "#FFFFFF" || hexa == "#00FF00" || hexa == "#FFF200"){
		$('#nome_app').addClass('font-black');
		$('#move_app').addClass('font-black');		
		$('#nome_app').removeClass('font-white');
		$('#move_app').removeClass('font-white');	
		$('#barra_topo').removeClass('rgb_group');
		$('#fundo_app').css('background-image', '');
		$('#fundo_app').css('background-color', hexa);	
	}
	else
	{
		$('#nome_app').addClass('font-white');
		$('#move_app').addClass('font-white');		
		$('#nome_app').removeClass('font-black');
		$('#move_app').removeClass('font-black');	
		$('#barra_topo').removeClass('rgb_group');
		$('#fundo_app').css('background-image', '');
		$('#fundo_app').css('background-color', hexa);	
	}
	
	if(hexa == "rgb_group"){
		$('#barra_topo').css('background', 'rgba(0,0,0,0)');
		$('#fundo_app').css('background-image', 'linear-gradient(90deg, #FF0000 20%, #00FF00 20%, #00FF00 40%, #0000FF 40%, #0000FF 60%, #000000 60%, #000000 80%, #FFFFFF 80%, #FFFFFF 100%)');
		$('#barra_topo').css('border-bottom', 'rgba(0,0,0,0)');
		$('#barra_topo').removeClass('font-white');
		$('#barra_topo').removeClass('font-black');
	}
	
	if(hexa == "cmyk_group"){
		$('#barra_topo').css('background', 'rgba(0,0,0,0)');
		$('#fundo_app').css('background-image', 'linear-gradient(90deg, #00AEEF 25%, #EC008C 25%, #EC008C 50%, #FFF200 50%, #FFF200 75%, #1A171B 75%, #1A171B 100%)');
		$('#barra_topo').css('border-bottom', 'rgba(0,0,0,0)');
		$('#barra_topo').removeClass('font-white');
		$('#barra_topo').removeClass('font-black');
	}
	
	changeClass(fundo_app);
}

function carregaPagina(pg_abre, pg_fecha)
{
		$(pg_abre).css('visibility', 'visible');
		$(pg_fecha).css('visibility', 'hidden');
		changeColor('#FFF');	
}