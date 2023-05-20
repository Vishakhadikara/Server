import { Client, Room } from 'colyseus';
import { RoomState, PlayerState } from './state';

export class GameRoom extends Room<RoomState> {
    maxClients = 1;

    onCreate(options: any) {
        console.log("Room Created.");
        this.setState(new RoomState);
        this.registerMessageHandlers();
    }

    onJoin(client: Client) {
        console.log("Client Joined.");

        let player:  PlayerState = new PlayerState();
        player.sessionID = client.sessionId;
        this.state.players[client.sessionId] = player;
        
        this.lock();

        client.send("serverToUnity");

    }

    onLeave(client: Client) {
        console.log("Client Left.");
        delete this.state.players[client.sessionId];
    }

    onDispose() {
        console.log("Room Disposed.");
    }

     registerMessageHandlers() {

          this.onMessage("unityToServer", (client: Client, message: any) => {
            console.log("I received a message from the Client");
            
        });

          this.onMessage("onButtonClick", (client: Client, message: any) => {
            console.log("I received a button click from the Client");
            
        });


     }
    

}