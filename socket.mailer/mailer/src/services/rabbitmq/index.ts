
import amqp from "amqplib";
import IMessage from "../../models/IMessage";
import {MessageCallback} from "../../models/types";

const RABBITMQ_DEFAULT_USER = process.env.RABBITMQ_DEFAULT_USER || 'user';
const RABBITMQ_DEFAULT_PASS = process.env.RABBITMQ_DEFAULT_PASS || 'password';
const RABBITMQ_SERVER = process.env.RABBITMQ_SERVER || 'rabbitmq';
const RABBITMQ_PORT = process.env.RABBITMQ_PORT || 5672;
const RABBITMQ_CONNECTION_URI = `amqp://${RABBITMQ_DEFAULT_USER}:${RABBITMQ_DEFAULT_PASS}@${RABBITMQ_SERVER}:${RABBITMQ_PORT}`;


const listenRabbitMQQUEUE = async (queue:string, callback: MessageCallback) => {
    try {
        const connection = await amqp.connect(RABBITMQ_CONNECTION_URI);
        const channel = await connection.createChannel();

        process.once("SIGINT", async () => {
            await channel.close();
            await connection.close();
        });

        await channel.assertQueue(queue, {durable: false});
        await channel.consume(
            queue,
            async (message) => {
                if (message) {
                    const messageJson = message.content.toString();
                    const msg: IMessage = JSON.parse(messageJson);
                    await callback(msg);
                }
            },
            {noAck: true}
        );
        console.log(" [*] Waiting for messages. To exit press CTRL+C");
    } catch (err) {
        console.warn(err);
    }
};
export default listenRabbitMQQUEUE;