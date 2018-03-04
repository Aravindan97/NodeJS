var http = require('http'),
    fs = require('fs'),
    host = "127.0.0.1",
    port = "8080"; 

var server = http.createServer(function(req, res){
    fs.readFile("index.html", function(err, data){
        if(!err){
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        }
    })
});

server.listen(port, host, function(){
    console.log("Server is listening to ",port);
});
