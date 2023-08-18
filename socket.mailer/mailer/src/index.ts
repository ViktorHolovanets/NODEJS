import * as http from 'http';
import * as socketIO from 'socket.io';
import dotenv from 'dotenv';
import listenRabbitMQQUEUE from "./services/rabbitmq";
import {handleIncomingMessage} from "./services/socket/handleIncomingMessage";


dotenv.config();
const server = http.createServer();
const io = new socketIO.Server(server);
const queueDefault = process.env.RABBITMQ_QUEUE || "queue_mailer";

io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('joinRoom', (roomData) => {
        const {roomName, userName} = roomData;
        socket.join(roomName);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');

        const rooms = socket.rooms;

        rooms.forEach((room) => {
            const clientsInRoom = io.sockets.adapter.rooms.get(room);
            if (!clientsInRoom || clientsInRoom.size === 0) {
                console.log(`Room ${room} is empty, deleting.`);
                io.sockets.adapter.rooms.delete(room);
            }
        });
    });
});

server.listen(3000, async () => {
    console.log('Socket.IO server is listening on port 3000');
    await listenRabbitMQQUEUE(queueDefault, handleIncomingMessage);
});
