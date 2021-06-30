var fs = require('fs');
var zlib = require('zlib');
function readfile(path){
    var file =fs.readFile(path, (err ,data)=>{
        console.log(data.toSTring());
        console.log("File Read");    
    });
}

function readfilestream(path){
   var readfilestream= fs.createReadStream(path);
    var writerStream = fs.createWriteStream('copy.txt'); 
    //readerStream.setEncoding('UTU8');
   readfilestream.on('data',function(chunk){
       //console.log(chunk);
       writerStream.write(chunk,'UTF8');
   });
   readfilestream.on('end',function(){
     console.log("File Read");
      console.log();
    });
    readfilestream.on('data',function(err){
        console.log(err.stack);
    });
}
//readFile("text.txt");
var readerStream= fs.createReadStream('copy.txt');
var writerStream = fs.createWriteStream('copy.txt.gz'); 
readerStream.pipe(writerStream);


readerStream.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('copy.txt.gz'))
//readfilestream("text.txt");

var x=0;