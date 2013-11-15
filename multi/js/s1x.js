function changeClass(x)
{
	x.className=(x.className=="move_app_abre")?"move_app_fecha":(x.className=="move_app_fecha")?"move_app_abre":"move_app_abre";
}

function changeColor(hexa)
{
	if(hexa != "#FFF"){
		document.getElementById('resposta').style.visibility = 'hidden';
		document.getElementById('abre_app').style.visibility = 'hidden';
		document.getElementById('sobre_app').style.visibility = 'hidden';
		document.getElementById('barra_topo').style.backgroundColor = hexa;
		document.getElementById('barra_topo').style.borderBottom = '4px solid ' + hexa;
	}
	else
	{
		document.getElementById('resposta').style.visibility = 'visible';
		document.getElementById('barra_topo').style.backgroundColor = '#E05A13';
		document.getElementById('barra_topo').style.borderBottom = '4px solid #F39500';
	}
	
	document.getElementById('fundo_app').style.backgroundColor = hexa;
	changeClass(fundo_app);
}

function changeDiv(div_abre, div_fecha)
{
	 	document.getElementById(div_fecha).style.visibility = 'hidden';
	 	document.getElementById(div_abre).style.visibility = 'visible';
	 	changeColor('#FFF');	
}