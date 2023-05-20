import { Schema, type, MapSchema, ArraySchema } from "@colyseus/schema";

export class PlayerState extends Schema {
    @type('string')
    sessionID: string;
}

export class RoomState extends Schema {
    @type({map: PlayerState})
    players: MapSchema<PlayerState> = new MapSchema<PlayerState>();
}