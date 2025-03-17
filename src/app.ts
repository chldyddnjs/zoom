import http from "http";
import WebSocket,{WebSocketServer} from "ws";
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 5000;

var options = { beautify: true };

//set react
app.set('views',__dirname + '/views');
app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine(options));

app.use('/public',express.static(__dirname + "/public"));
app.get('/',(_,res:Response) => res.render("home",{name:"ywchoi",title:"HOME"}));
app.get('/*',(_,res:Response) => res.redirect('/'));

// app.get('/video',(req:Request, res:Response) => {
//   res.send('video call');
// });

//log memo
// app.get('/video/memo',(req:Request,res:Response) => {
//   res.send('memo in video')
// });

// Route path: users/:userId/videos/:videos/videoId
// Request URL: http://loalhost:5000/users/34/videos/8989
// req.params: {"userId": "34", "bookId":8989}

// app.get('/users/:userId(\d+)/videos/videoId(\d)',(req:Request,res:Response) => {
//   res.send(req.params)
// });

const server = http.createServer(app);
const wss = new WebSocketServer({ server });
const sockets = [];

wss.on('connection', (socket) => {

    sockets.push(socket);
    console.log("Connected to Browser");
    socket.on("close", () => console.log("Disconnected from the Browser"));
    socket.on("message",(message)=> {socket.send(message)});

});

server.listen(port,() => console.log(`Listening on http://localhost:${port}`));