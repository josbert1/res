var http = require("http");

var manejador = function(solicitud, respuesta){
	console.log("Hola Genesis");
	respuesta.end("Hola");

};

var servidor = http.createServer(manejador);


servidor.listen(8080);