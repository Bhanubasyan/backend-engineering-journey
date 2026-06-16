const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");


 const server = net.createServer((socket) => {
  socket.on("data" , data =>{
 console.log(data);

  const request = data.toString().split('\r\n');
  console.log(request);

   const path = request[0].split(" ");
   console.log(path);
  
   const route = path[1];
   console.log(route);

   const routesParts = route.split('/');
   console.log(routesParts);

   const Domain = routesParts[1];
   console.log(`Domain is ${Domain}`);
   const Content = routesParts[2];
   console.log(`Content is ${Content}`);



   //main logic return body as response 

   if(Content !== undefined){
    socket.end(
      `HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nContent-Length: ${Content.length}\r\n\r\n${Content}`
    );
    
   }else if (route === '/'){
    socket.write("HTTP/1.1 200 OK\r\n\r\n");
   }else{
    socket.write("HTTP/1.1 404 Not Found\r\n\r\n");
   }


 });
  });
 server.listen(4221, "localhost");
