const fs = require('fs');

var counter=1;
function write()
{
counter++;
var message="welcome"+counter;
fs.writeFile("hello.txt",message,()=>{console.log('content is written in file sucessfully')});
}
function read()
{
    //fs.readFile("hello.txt",(err,data)=>{console.log(data);});
    fs.readFile("hello.txt",(err,data)=>{var str=data.toString();console.log(str);});
}
setInterval(write,4000);
setInterval(read,8000);