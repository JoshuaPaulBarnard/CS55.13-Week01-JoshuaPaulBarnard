let myhttp = require("http");


let myServer = myhttp.createServer( 

  function( myRequest, myResponse ) {
    console.log( myRequest.url );

    let myText;
    if( myRequest.url == "/hey" ) {
      myText = "Well hello there...";
    } else {
      myText = "I don't know you!";
    }

    myText = myText + "\n" + " - Please help me...  I am traped in a Node.js server!";

    // writeHead() creates an http response header, including the status code (200 OK), the content type
    myResponse.writeHead( 200, { "Content-Type": "text/plain" } );

    // end() returns some data and closes the respnse (sends it)
    //myResponse.end( "Hello Everyone?\n" );
    myResponse.end( myText + "\n" );


  }

 );

// ask http to start listening on a tcp port for incoing http requests

myServer.listen( 0000, "0.0.0.0" );


console.log("Server has started");