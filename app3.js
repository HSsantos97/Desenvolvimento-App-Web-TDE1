var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
var args = url.parse(req.url, true).query;
	res.write('Codigo: ' + args.codigo + '<br>');
	res.write('Descricao: ' + args.descricao + '<br>');
	res.write('Quantidade: ' + args.quantidade + '<br>');
	res.write('Preco: ' + args.preco + '<br>');
	res.end();
}).listen(8080);

console.log("O Servidor esta Rodando");