import dotenv from 'dotenv';

dotenv.config();

/**
 * Configure RabbitMQ server
 */
const RABBITMQ_DEFAULT_USER = process.env.RABBITMQ_DEFAULT_USER || 'user';
const RABBITMQ_DEFAULT_PASS = process.env.RABBITMQ_DEFAULT_PASS || 'password';
const RABBITMQ_SERVER = process.env.RABBITMQ_SERVER || 'rabbitmq';
const RABBITMQ_PORT = process.env.RABBITMQ_PORT || 5672;
const RABBITMQ_CONNECTION_URI = `amqp://${RABBITMQ_DEFAULT_USER}:${RABBITMQ_DEFAULT_PASS}@${RABBITMQ_SERVER}:${RABBITMQ_PORT}`;

const RABBITMQ_QUEUE_SOCKET = process.env.RABBITMQ_QUEUE_SEND_EMAIL || 'queue_send_socket';


/**
 * Configure Redis server
 */
const REDIS_SOCKET_HOST = process.env.REDIS_SOCKET_HOST || 'redis.socket';
const REDIS_SOCKET_PORT = process.env.REDIS_SOCKET_PORT || 6379;
const REDIS_SOCKET_CONNECTION_STRING = `redis://${REDIS_SOCKET_HOST}:${REDIS_SOCKET_PORT}`;


import startListening from "./rabbitmq/rabbitmqConsumer";
import IEvent from "./models/IEvent";
import {Emitter} from "@socket.io/redis-emitter";
import {createClient} from "redis";

(async () => {
    try {
        const redisClient = createClient({url: REDIS_SOCKET_CONNECTION_STRING});
        await redisClient.connect();

        const io = new Emitter(redisClient);

        try {
            await startListening<IEvent>(RABBITMQ_CONNECTION_URI, RABBITMQ_QUEUE_SOCKET, async (msg) => {
                if (msg.From) {
                    console.log(`emit for ${msg.From}`)
                    io.to('userId_' + msg.From).emit(msg.Type, msg);
                } else {
                    console.log(`emit for everybody`)
                    io.emit(msg.Type, msg);
                }
            });
        } catch (err) {
            console.error(err);
        }
    } catch (e) {
        console.error("Error connecting to Redis:", e);
    }

})();