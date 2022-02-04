var pantalla = document.querySelector("canvas");
var pincel =  pantalla.getContext("2d");

function iniciarJuego(){
pincel.fillStyle = "lightgrey"
pincel.fillRect(0,0,800,1200);
pincel.fillStyle = "black"
pincel.beginPath();
pincel.moveTo(4, 610);
pincel.lineTo(102, 610);
pincel.lineTo(53, 579);
pincel.lineTo(4, 610);
pincel.fill();
pincel.fillStyle = "lightgrey"
pincel.beginPath();
pincel.moveTo(18, 606);
pincel.lineTo(88, 606);
pincel.lineTo(53, 585);
pincel.lineTo(18, 606);
pincel.fill();
}

function dibujarletras(color, fuente,texto, x,y,ancho){
		pincel.fillStyle = color;
		pincel.font = fuente;
		pincel.fillText(texto,x,y,ancho);
}

function lineas(x, anchoLinea){
		pincel.fillStyle = "black"
		pincel.beginPath();
		pincel.moveTo(x, 600);
		pincel.lineTo(x, 605);
		pincel.lineTo(x+anchoLinea, 605);
		pincel.lineTo(x+anchoLinea, 600);
		pincel.lineTo(x, 600);
		pincel.fill();
}

function poste() {
		pincel.fillStyle = "black"
		pincel.beginPath();
		pincel.moveTo(50, 590);
		pincel.lineTo(50, 80);
		pincel.lineTo(55, 80);
		pincel.lineTo(55, 580);
		pincel.lineTo(50, 580);
		pincel.fill();
	}

function soporte() {
		pincel.fillStyle = "black"
		pincel.beginPath();
		pincel.lineTo(50, 80);
		pincel.lineTo(350, 80);
		pincel.lineTo(350, 85);
		pincel.lineTo(50, 85);
		pincel.lineTo(50, 80);
		pincel.fill();
	}

function vertical () {
		pincel.fillStyle = "black"
		pincel.beginPath();
		pincel.lineTo(350, 80);
		pincel.lineTo(350, 110);
		pincel.lineTo(345, 110);
		pincel.lineTo(345, 80);
		pincel.lineTo(350, 80);
		pincel.fill();
	}

function cabeza() {
		//pincel.fillStyle = "red";
		//pincel.arc(348,146,30,0,2*Math.PI);
		pincel.fill()
		pincel.fillStyle = "black";
		pincel.arc(348,146,35,0,2*Math.PI);
		pincel.fill();

	}

function cuerpo() {
		pincel.beginPath();
		pincel.fillStyle = "black"
		pincel.moveTo(352, 182);
		pincel.lineTo(352, 292);
		pincel.lineTo(343, 292);
		pincel.lineTo(343, 182);
		pincel.fill();
	}		
	
function brazoizquierdo(){
		pincel.beginPath();
		pincel.fillStyle = "black"
		pincel.moveTo(342, 192);
		pincel.lineTo(285, 246);
		pincel.lineTo(285, 256);
		pincel.lineTo(342, 202);
		pincel.fill();
	}

function brazoderecho(){
		pincel.beginPath();
		pincel.fillStyle = "black"
		pincel.moveTo(353, 192);
		pincel.lineTo(410, 246);
		pincel.lineTo(410, 256);
		pincel.lineTo(353, 202);
		pincel.fill();
	}

function pieizquierdo(){
		pincel.beginPath();
		pincel.fillStyle = "black"
		pincel.moveTo(347, 292);
		pincel.lineTo(404, 356);
		pincel.lineTo(404, 366);
		pincel.lineTo(347, 302);
		pincel.fill();
	}
function piederecho(){
		pincel.beginPath();
		pincel.fillStyle = "black"
		pincel.moveTo(346, 292);
		pincel.lineTo(289, 356);
		pincel.lineTo(289, 366);
		pincel.lineTo(346, 302);
		pincel.fill();
	}