const http=require('http');

var server=http.createServer((request,response)=>{
    console.log("request is recieved from client");
    response.write("<h1>welcome</h1");
    response.write("<hr/>");
    response.write("<ol> <li>DBDA</li>PGDAC</li> </ol>");
    response.end();
    //.response.write('welcome from server');
    
    //response.end();
});

server.listen(9000);
console.log("HTTP server is listening on port 9000");
