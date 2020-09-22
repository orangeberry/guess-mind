import { handleNewUser, handleDisconnected } from "./notifications";
import { handleNewMessage } from "./chat";
import { handleBeganPath, handleFilled, handleStrokedPath } from "./paint";
import { handleplayerUpdate } from "./player";

let socket = null;

export const getSocket = () => socket;

export const initSockets = aSocket => {
    const { events } = window;
    socket = aSocket;
    aSocket.on(events.newUser, handleNewUser);
    aSocket.on(events.disconnected, handleDisconnected);
    aSocket.on(events.newMsg, handleNewMessage);
    aSocket.on(events.beganPath, handleBeganPath);
    aSocket.on(events.strokedPath, handleStrokedPath);
    socket.on(events.filled, handleFilled);
    socket.on(events.playerUpdate, handleplayerUpdate);
};