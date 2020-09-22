function calcEstimativa(){
    
        var resto = 0;
        var emDias = '';
		var tempo = document.getElementById('estimativa').value;
        console.log('VAI OU NAO');
        console.log('Tempo Digitado: ' + tempo);
		
		resto = tempo%40;
		console.log('resto: ' + resto);
		
		if(resto > 0){
			if(tempo/40 > 0){
                if(parseInt(tempo/40)>0) emDias = parseInt(tempo/40) + ' semana(s) e ' + Math.ceil(resto/8) + ' dias';
                else emDias = Math.ceil(resto/8) + ' dias';
			}
		}	
		else if(tempo /40 > 0){
			emDias = tempo/40 + ' semana(s)';
				
		}
		
		console.log('Dias calculados: ' + emDias);
		
		document.getElementById('labelDias').innerHTML = emDias;
    
}