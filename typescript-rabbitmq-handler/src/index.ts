import amqp from "amqplib";

/**
 * Тип для функції, яка обробляє повідомлення з RabbitMQ.
 */
export type consumerCallback<T> = (msg: T) => Promise<void>;

/**
 * Клас для обробки з'єднань та взаємодії з RabbitMQ.
 */
class rabbitMQHandler {
    private connection: amqp.Connection;
    private channel: amqp.Channel;

    /**
     * Приватний конструктор для ініціалізації з'єднання та каналу.
     * Використовується в статичному методі `create`.
     */
    private constructor(connection: amqp.Connection, channel: amqp.Channel) {
        this.connection = connection;
        this.channel = channel;
    }

    /**
     * Створює новий екземпляр `rabbitMQHandler` за допомогою
     * заданого рядка підключення.
     * @param connectionUri Рядок підключення до RabbitMQ.
     * @returns Новий екземпляр `rabbitMQHandler`.
     */
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

    /**
     * Підключається до RabbitMQ за допомогою заданого рядка підключення.
     * @param connectionUri Рядок підключення до RabbitMQ.
     */
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

    /**
     * Розпочинає прослуховування черги на вході та передає повідомлення для обробки.
     * @param queueName Назва черги, яку слід прослуховувати.
     * @param callback Функція-обробник повідомлень.
     */
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

    /**
     * Надсилає повідомлення до черги.
     * @param queueName Назва черги, до якої слід надіслати повідомлення.
     * @param message Повідомлення для надсилання.
     */
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
