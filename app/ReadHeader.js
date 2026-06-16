const { Socket } = require("dgram");
const net = require("net");

const server = net.createServer((Socket) => {
  Socket.on("data", (data) =>{

    //convert url into readble string 
    const request  = data.toString();

    //split requstline and headerline from request

    const [requestLine, ...headerLines] = request.split("\r\n");
    console.log(headerLines);

    const [method, path] = requestLine.split(" ");
    console.log(method);
    console.log(path);

    const headers = {};
    for (const line of headerLines) {
      if (!line) break;
      const [key, ...value] = line.split(": ");
      headers[key.toLowerCase()] = value.join(": ");
    }
    console.log(headers);

    if(path === "/user-agent"){

      const userAgent = headers["user-agent"];
 Socket.write(
  `HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nContent-length: ${userAgent.length}\r\n\r\n${userAgent}`
 );

Socket.end();
    }
  });
  
  
});
server.listen(4221, "localhost");