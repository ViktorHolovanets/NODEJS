import amqp from "amqplib";

export type consumerCallback<T> = (msg: T) => Promise<void>;

class rabbitMQHandler {
    private connection: amqp.Connection;
    private channel: amqp.Channel;

    private constructor(connection: amqp.Connection, channel: amqp.Channel) {
        this.connection = connection;
        this.channel = channel;
    }

    static async create(connectionUri: string): Promise<rabbitMQHandler> {
        const connection = await amqp.connect(connectionUri);
        const channel = await connection.createChannel();

        process.once("SIGINT", async () => {
            await channel.close();
            await connection.close();
        });

        console.log("Connected to RabbitMQ");

        return new rabbitMQHandler(connection, channel);
    }


    private async connect(connectionUri: string) {
        try {
            this.connection = await amqp.connect(connectionUri);
            this.channel = await this.connection.createChannel();

            process.once("SIGINT", async () => {
                await this.channel.close();
                await this.connection.close();
            });

            console.log("Connected to RabbitMQ");
        } catch (err) {
            console.warn(err);
        }
    }

    async startListening<T>(queueName: string, callback: consumerCallback<T>) {
        if (!this.channel) {
            console.warn("RabbitMQ channel is not initialized.");
            return;
        }

        try {
            await this.channel.assertQueue(queueName, { durable: false });

            await this.channel.consume(
                queueName,
                async (message) => {
                    if (message) {
                        const messageJson = message.content.toString();
                        console.log(messageJson);
                        const msg: T = JSON.parse(messageJson);
                        await callback(msg);
                    }
                },
                { noAck: true }
            );

            console.log(` [*] Listening for messages in queue ${queueName}`);
        } catch (err) {
            console.warn(err);
        }
    }

    async sendMessageToQueue(queueName: string, message: any) {
        if (!this.channel) {
            console.warn("RabbitMQ channel is not initialized.");
            return;
        }
        try {
            await this.channel.assertQueue(queueName, { durable: false });

            const messageJson = JSON.stringify(message);
            this.channel.sendToQueue(queueName, Buffer.from(messageJson));

            console.log(` [x] Sent to queue ${queueName}: ${messageJson}`);
        } catch (err) {
            console.warn(err);
        }
    }
}

export default rabbitMQHandler;
