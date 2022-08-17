import express from "express";
const app = express();

const PORT = 8080; // default port to listen

app.get( "/", ( req, res ) => {
    res.send( "Hello World!");
} );

app.listen(PORT, () => {
    console.log( `Server listening at http://localhost:${ PORT }` );
} );