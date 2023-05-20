import Arena from "@colyseus/arena";
import { monitor } from "@colyseus/monitor";
import { GameRoom } from "./gameroom";

export default Arena({
    getId: () => "Your Colyseus App",

    initializeGameServer: (gameServer) => {
        gameServer.define('gameRoom', GameRoom);

        gameServer.onShutdown(function(){
            console.log(`game server is going down.`);
          });
    },

    initializeExpress: (app) => {
        app.use('/colyseus', monitor());
    },
});
