const express = require ('express');
const app = express();

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/Src/index.html");
	
} );

console.log("O Servidor esta Rodando");
app.listen(8080);

