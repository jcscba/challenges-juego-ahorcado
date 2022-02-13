
	var palabras = ["HOLA", "CABEZA", "CUELLO", "TRONCO", "PARTIDO", "AHORCADO", "PENINSULA"]; //Array con grupo de palabras	
	var botonAgregarPalabra = document.querySelector("#nueva-palabra");
	var botonIniciarjuego = document.querySelector("#iniciar-juego");
	var agregarPalabra = document.querySelector("#input-nueva-palabra");	
	agregarPalabra.focus();
	var juegoFinalizado;
	botonAgregarPalabra.addEventListener("click",function(event){
		event.preventDefault();
		var texto = agregarPalabra.value;
		var valido = texto.match(/[a-zA-Z]/);
		if(!valido)
			alert("Ingrese una palabra valida");
		else
			palabras.push(texto.toUpperCase());
			agregarPalabra.value = [];
	});

	var palabra = []; // seleeciono una palabra del array que sera para adivinar
	var letrasingresadas = [];
	var letrasincorrectas = [];
	var letrascorrectas = [];
	
	botonIniciarjuego.addEventListener("click",function(event){
		iniciarJuego();
		palabra = palabras[sortearPalabra(palabras.length)];
		dibujarLineas(palabra.length);
		letrasingresadas = [];
		letrasincorrectas = [];
		letrascorrectas = [];
		juegoFinalizado = false;
		juegoIniciado();
	});

function juegoIniciado(){

		var code;
		botonIniciarjuego.addEventListener('keypress', function(event){   // funcion para capturar las letra digitadas en el teclado
		code = ((String.fromCharCode(event.charCode)));

		var repetida = false;
		if (code.match(/[a-zA-Z]/) != null ) {
			code = code.toUpperCase();
			for(var i=0; i<letrasingresadas.length; i++){
				if(code == letrasingresadas[i])
					repetida = true;
			}
						
			if (repetida == false && juegoFinalizado == false) {
				letrasingresadas.push(code);	
				var posicion = buscarletra(code, palabra);
				if(posicion.length>0)
						letraCorrecta(code, posicion);
					else
						letraIncorrecta(code);						
				}
			}			
		
	});
	}

	function letraCorrecta(code, posicion){
		for(var i=0; i < posicion.length ;i++){
			letrascorrectas.push(palabra[posicion[i]]);
			}		
		if(letrascorrectas.length == palabra.length){
			dibujarletras ( "green", '20px serif', 'Ganaste Felicitaciones!',500,200,200);
			juegoFinalizado = true;
			}	
	}	


	function letraIncorrecta(code){

		letrasincorrectas.push(code);
		dibujarletras( "black", '40px serif', code, (400+(35)*letrasincorrectas.length), 300, 40);
		dibujarAhorcado(letrasincorrectas.length);
		if(letrasincorrectas.length == 9){
			dibujarletras ("red", '20px serif', 'Fin del Juego!',500,200,200);
			dibujarletras ("red", '20px serif', 'La palabra es '+ palabra,500,250,200);
			juegoFinalizado = true;
			}
	}
	
	function dibujarAhorcado(error){
		switch(error){
					case 1:
						poste();
						break;
					case 2:	
						soporte();
						break;
					case 3:
						vertical();
						break;
					case 4:
						cabeza();
						break;
					case 5: 
						cuerpo();
						break;
					case 6:
						brazoizquierdo();
						break;
					case 7:
						brazoderecho();
						break;
					case 8:
						piederecho();
						break;
					case 9:
						pieizquierdo();
						break;
		}
	}


	function buscarletra(code, palabra){
		var posicion = [];
		for (var i = 0; i<palabra.length; i++) {
			if(code == palabra[i]) {
				posicion.push(i);
				var espaciado = 100 / (palabra.length+1);
				var anchoLinea = 350 / palabra.length;
				dibujarletras ( "black", '60px serif', code, (150+(anchoLinea+espaciado)*i), 595, anchoLinea);
			}
		}
		return posicion;
	}	
	


	function sortearPalabra(total) {	
			return Math.floor(Math.random()*total);
	}


	function dibujarLineas(cantidadLetras) {
		var x = 150;
		var espaciado = 100 / (cantidadLetras+1);
		var anchoLinea = 350 / cantidadLetras;
			for(var i = 0; i<cantidadLetras; i++){
				lineas(x,anchoLinea);
				x = x + anchoLinea + espaciado;
			}
	}