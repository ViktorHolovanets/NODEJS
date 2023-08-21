import amqp from "amqplib";


export type consumerCallback<T> = (msg: T) => Promise<void>;
const startListening = <T>(connectionUri: string, queueName: string, callback: consumerCallback<T>) => {
    (async () => {
        try {
            const connection = await amqp.connect(connectionUri);
            const channel = await connection.createChannel();

            process.once("SIGINT", async () => {
                await channel.close();
                await connection.close();
            });

            await channel.assertQueue(queueName, {durable: false});
            console.debug(`${queueName} queue asserted`);
            await channel.consume(
                queueName,
                async (message) => {
                    if (message) {
                        const messageJson = message.content.toString();
                        const msg: T = JSON.parse(messageJson);
                        await callback(msg);
                    }
                },
                {noAck: true}
            );
            console.log(` [*] Waiting for messages in queue ${queueName}. To exit press CTRL+C`);
        } catch (err) {
            console.warn(err);
        }
    })();
};

export default startListening;
