// He canviat el nom de la funció de quan cliques al botó perquè és quan has de començar a apostar
//document.getElementById("apostar").addEventListener("click", function(){remenaAposta()})

// Has de cridar a aquesta funció sense que hagi de ciclar al botó de remanar i apostar perquè això ho fa al inici
demanarDades();

function remenaAposta(mult, cubi) {

			
							//He fet que necesitem entrar el saldo que tenim per aixi poder jugar mes partides, es a dir si no ho hagues fet aixi, si a la primera partida
							//perdem la aposta, ja sortiria del joc o ens demanaria ficar mes calés. Aixi podem fer varies partides encara que perdem l'aposta.

			do{

			var saldo  = prompt("Entra la quantitat de saldo que tens");

			if(isNaN(saldo) || saldo == null || saldo.length == 0 || saldo == " "){

				var saldo  = prompt("Entra una quantitat de saldo vàlida");
			}

			}while(isNaN(saldo) || saldo == null || saldo.length == 0 || saldo == " ");


			do{		//També he afegit als prompt que surti el  saldo que tens avans d'apostar i la quantitat que vas a apostar avans d'introduir el numero de bola

			var aposta  = prompt(" Saldo disponible: "+saldo+"€ \n Entra la quantitat a apostar");

			if(isNaN(aposta) || aposta == null || aposta.length == 0 || aposta == " "){

				var aposta = prompt("Saldo disponible: "+saldo+"€ \n Entra una quantitat a apostar vàlida");
			}

			}while(isNaN(aposta) || aposta == null || aposta.length == 0 || aposta == " ");
		
			do{

			var bola = prompt("On creus que esta la bola?\n La teva aposta es de: "+aposta+"€");

			if(bola > cubi || bola < 1 || isNaN(bola) || bola == null || bola.length == 0|| bola == ""){

				var bola = prompt("Entra una bola vàlida \n Aposta de "+aposta+"€");
			}

			}while(bola > cubi || bola < 1 || isNaN(bola) || bola == null || bola.length == 0|| bola == "");

	

	joc(saldo, aposta, bola, mult, cubi);
	

			//Funcio on es crea el numero random i comprova si hem guanyat.
}

function joc(saldo, aposta, bola, mult, cubi){

	saldo = saldo - aposta;

	var rand = 0;
	var premi = 0;
	var acert = false;

	if(mult == 2){
		rand = Math.floor((Math.random() * (4-1))+1);
		
		premi = aposta * mult;
	}
	if(mult == 5){
		rand = Math.floor((Math.random() * (6-1))+1);
		
		premi = aposta * mult;
	}
	if(mult == 10){
		rand = Math.floor((Math.random() * (8-1))+1);

		
		premi = aposta * mult;
	}

	if(bola == rand){
		acert = true;

	}

	mostrarResultats(acert, saldo, premi, rand, aposta, bola, mult, cubi);
									
}

function mostrarResultats(acert, saldo, premi, rand, aposta, bola, mult, cubi){	

	if(acert == true){

		saldo = premi + saldo;

		var opcio = confirm("La boleta estava al cubilet "+rand+" i tu has apostat "+aposta+"€ al "+bola+".\n Felicitats, has guanyat "+premi+"€!\n El teu saldo actual es de "+saldo+"€.\n\n Si vols seguir jugant, prem acceptar.");


	}
	else{

		var opcio = confirm("La boleta estava al cubilet "+rand+" i tu has apostat "+aposta+"€ al "+bola+".\n Ho sento, has perdut "+aposta+"€!\n El teu saldo actual es de "+saldo+"€.\n\n Si vols seguir jugant, prem acceptar.");


		//Si al confirm prem que Aceptar, anem a la funcio de seguir jugant on demanara quants diner vols a postar i a quina bola,
		//pero no et demanara la quantitat de saldo que tens, ja que l'hem d'acumular.
	}

	if(opcio == true){

		seguirJugant(saldo, mult, cubi);

	}
	else{

		alert("Que vagi bé :)");
	}


}

function seguirJugant(saldo, mult, cubi){
										//He afegit aquesta mecanica que consisteix en que quan has perdut tots els diners, et pregunta si vols entrar més diners per a poder seguir jugant.
	if(saldo == 0){						// i si no entres més diners, et torna al principi del programa

		
		do{
		var saldo  = prompt("T'has quedat pelat!\n\n Si vols continuar jugant, entra més diners");

		if(isNaN(saldo) || saldo == " "){

			var saldo  = prompt("Entra una quantitat de saldo vàlida");
		}
			
		}while(isNaN(saldo) || saldo == " ");

		if(saldo.length == 0 || saldo == 0){

			alert("Més sort la próxima vegada!");
			demanarDades();
		}
	}
	

			do{

			var aposta  = prompt(" Saldo disponible: "+saldo+"€ \n Entra la quantitat a apostar");

			if(isNaN(aposta) || aposta == null || aposta.length == 0 || aposta == " "){

				var aposta = prompt("Saldo disponible: "+saldo+"€ \n Entra una quantitat a apostar vàlida");
			}

			}while(isNaN(aposta) || aposta == null || aposta.length == 0 || aposta == " ");
		
			do{

			var bola = prompt("On creus que esta la bola?\n La teva aposta es de: "+aposta+"€");

			if(bola > cubi || bola < 1 || isNaN(bola) || bola == null || bola.length == 0|| bola == ""){

				var bola = prompt("Entra una bola vàlida \n Aposta de "+aposta+"€");
			}

			}while(bola > cubi || bola < 1 || isNaN(bola) || bola == null || bola.length == 0|| bola == "");


	

		joc(saldo, aposta, bola, mult);
}

function demanarDades(){

	
	
	

		do{
			var nom = prompt("Quin es el teu nom?");

			if(nom==" "|| nom.length == 0){

				var nom = prompt("Has d'introduir un nom");
			}


		}while(nom==" "|| nom.length == 0);


	demanarDificultat();

}

function demanarDificultat(){

	

		

		do{
			var dificultat = prompt("Tria una dificultat (1/2/3)");

			if(dificultat == null){
				demanarDades();
			}

			if(dificultat < 1 || dificultat > 3 || isNaN(dificultat)){


				

				var dificultat = prompt("Has d'entrar un numero entre l'1 i el 3");

			}

		}while(dificultat < 1 || dificultat > 3 || isNaN(dificultat));
		
		assignarCubilets(dificultat);
}

// He creat aquesta altra funció perquè com més desgrenat amb accions específiques, millor
// En aquesta funció podria ser interessant assignar el factor multiplicatiu de les apostes perquè també depenen de la dificultat
function assignarCubilets(dificultat) {

		var numCubilets=0;

		switch(dificultat){

			case "1": 
				numCubilets = 3;
				var mult = 2;
				var cubi = 3;
			break;

			case "2":
				numCubilets = 5;
				var mult = 5;
				var cubi = 5;
			break;

			case "3": 
				numCubilets = 7;
				var mult = 10;
				var cubi = 7;
			break;

		}
		// He ficat aqui el event listener, per a poder pasar la variable mult perque no conec una altra manera de fer-ho, ja que aquestes funcions no estan connectades entre si
		document.getElementById("apostar").addEventListener("click", function(){remenaAposta(mult, cubi)})

		mostrarCubilets(numCubilets);
		
}


function mostrarCubilets(numCubilets){
	var cubilets="";
	for(var i=1; i <= numCubilets; i++){
		cubilets +='<div class="beaker" id="'+i+'">'+i+'</div>'; 
	}
	document.getElementById("board").innerHTML=cubilets;
}

