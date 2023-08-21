import {sendNewMail} from "./services/mailer/mailer";
import startListening from "./services/rabbitmq/rabbitmqConsumer";
import IMessage from "./models/IMessage";


const RABBITMQ_DEFAULT_USER = process.env.RABBITMQ_DEFAULT_USER || 'user';
const RABBITMQ_DEFAULT_PASS = process.env.RABBITMQ_DEFAULT_PASS || 'password';
const RABBITMQ_SERVER = process.env.RABBITMQ_SERVER || 'rabbitmq';
const RABBITMQ_PORT = process.env.RABBITMQ_PORT || 5672;
const RABBITMQ_CONNECTION_URI = `amqp://${RABBITMQ_DEFAULT_USER}:${RABBITMQ_DEFAULT_PASS}@${RABBITMQ_SERVER}:${RABBITMQ_PORT}`;

const queue = "queue_mailer";

 startListening<IMessage>(RABBITMQ_CONNECTION_URI, queue, async (msg) => {
    await sendNewMail(msg);
});