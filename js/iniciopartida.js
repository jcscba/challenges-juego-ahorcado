var pantalla = document.querySelector("canvas");
var pincel =  pantalla.getContext("2d");
pincel.fillStyle = "lightgrey"
pincel.fillRect(0,0,600,800);

pincel.fillStyle = "black"
pincel.beginPath();
pincel.moveTo(50, 300);
pincel.lineTo(50, 80);
pincel.lineTo(150, 80);
pincel.lineTo(150, 110);
pincel.lineTo(145, 110);
pincel.lineTo(145, 85);
pincel.lineTo(55, 85);
pincel.lineTo(55, 300);
pincel.lineTo(50, 300);
pincel.fill();