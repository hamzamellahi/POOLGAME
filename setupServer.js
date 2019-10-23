var http = require('http');
const path = require('path');
const fs = require('fs');
/*function handleRequest(request, response) {
  // User file system module to read index.html file
  fs.readFile(__dirname + '/index.html',
    // Callback function for reading
    function (err, data) {
      // if there is an error
      if (err) {
        response.writeHead(500);
        return response.end('Error loading index.html');
      }
      // Otherwise, send the data, the contents of the file
      response.writeHead(200);
      response.write(data);
      response.end(data);
    }
  );
}
*/

function handleRequest(req, res) {
  // What did we request?
  let pathname = req.url;

  // If blank let's ask for index.html
  if (pathname == '/') {
    pathname = '/index.html';
  }

  // Ok what's our file extension
  let ext = path.extname(pathname);
  let data = "d";
  // Map extension to file type
  const typeExt = {
    '.html': 'text/html',
    '.js':   'text/javascript',
    '.css':  'text/css'
  };

  // What is it?  Default to plain text
  let contentType = typeExt[ext] || 'text/plain';

  // Now read and write back the file with the appropriate content type
  fs.readFile(__dirname + pathname,
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading ' + pathname);
      }
      // Dynamically setting content type
      res.writeHead(200,{ 'Content-Type': contentType });
    //  res.write(JSON.stringify(sprites));
     //res.write(data);
      res.end(data);
    }
  );
}

function scan(path, dest = []){
	var files = fs.readdirSync(path);
	for(let file of files){
		if(fs.statSync(path + "/" + file).isDirectory()){
			scan(path + "/" + file);
		}else {
			dest.push(file);
		}
	}
	return dest;
}
let sprites = scan("assets/sounds");
console.log(sprites);
var server = http.createServer(handleRequest);

server.listen(8080);
