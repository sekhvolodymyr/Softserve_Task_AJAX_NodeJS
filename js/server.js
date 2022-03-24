const http = require('http');
const fs = require('fs');
http.createServer((req,res) => {
    const readStream = fs.createReadStream('https://sekhvolodymyr.github.io/Softserve_Task_AJAX_NodeJS/js/users.json');
    res.writeHead(200,{'Content-type':'application/json'})
    readStream.pipe(res,'utf-8');
}).listen(8080);
