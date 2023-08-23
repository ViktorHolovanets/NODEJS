

/**
 * Configure RabbitMQ server
 */
const RABBITMQ_DEFAULT_USER = process.env.RABBITMQ_DEFAULT_USER || 'user';
const RABBITMQ_DEFAULT_PASS = process.env.RABBITMQ_DEFAULT_PASS || 'password';
const RABBITMQ_SERVER = process.env.RABBITMQ_SERVER || 'rabbitmq';
const RABBITMQ_PORT = process.env.RABBITMQ_PORT || 5672;
const RABBITMQ_CONNECTION_URI = `amqp://${RABBITMQ_DEFAULT_USER}:${RABBITMQ_DEFAULT_PASS}@${RABBITMQ_SERVER}:${RABBITMQ_PORT}`;


const RABBITMQ_QUEUE_LISTEN = process.env.RABBITMQ_QUEUE_SEND_EMAIL || 'queue_event';






import rabbitMQHandler from 'typescript-rabbitmq-handler';
import IEvent from "./models/IEvent";
import { handleEvent } from "../src/handrers/eventHandler";

( async () => {
    const rabbit = await rabbitMQHandler.create(RABBITMQ_CONNECTION_URI);

    await rabbit.startListening<IEvent>(RABBITMQ_QUEUE_LISTEN, async (msg: IEvent) => {
        console.log(msg)
        await handleEvent(msg, rabbit)
    });
})();








