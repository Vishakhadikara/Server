import express from 'express';
import{createServer} from 'http';
import { Server } from 'colyseus';
import { GameRoom } from "./gameroom";
import{monitor} from '@colyseus/monitor';

const port = Number(process.env.PORT || 2567);
const app = express();

const gameServer = new Server({
    server: createServer(app)
});

gameServer.define('gameRoom', GameRoom);

gameServer.onShutdown(function(){
     console.log(`game server is going down.`);
});

gameServer.listen(port)
console.log(`Listening:${ port }`);
