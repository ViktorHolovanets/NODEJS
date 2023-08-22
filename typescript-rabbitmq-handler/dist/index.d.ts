/**
 * Тип для функції, яка обробляє повідомлення з RabbitMQ.
 */
export type consumerCallback<T> = (msg: T) => Promise<void>;
/**
 * Клас для обробки з'єднань та взаємодії з RabbitMQ.
 */
declare class rabbitMQHandler {
    private connection;
    private channel;
    /**
     * Приватний конструктор для ініціалізації з'єднання та каналу.
     * Використовується в статичному методі `create`.
     */
    private constructor();
    /**
     * Створює новий екземпляр `rabbitMQHandler` за допомогою
     * заданого рядка підключення.
     * @param connectionUri Рядок підключення до RabbitMQ.
     * @returns Новий екземпляр `rabbitMQHandler`.
     */
    static create(connectionUri: string): Promise<rabbitMQHandler>;
    /**
     * Підключається до RabbitMQ за допомогою заданого рядка підключення.
     * @param connectionUri Рядок підключення до RabbitMQ.
     */
    private connect;
    /**
     * Розпочинає прослуховування черги на вході та передає повідомлення для обробки.
     * @param queueName Назва черги, яку слід прослуховувати.
     * @param callback Функція-обробник повідомлень.
     */
    startListening<T>(queueName: string, callback: consumerCallback<T>): Promise<void>;
    /**
     * Надсилає повідомлення до черги.
     * @param queueName Назва черги, до якої слід надіслати повідомлення.
     * @param message Повідомлення для надсилання.
     */
    sendMessageToQueue(queueName: string, message: any): Promise<void>;
}
export default rabbitMQHandler;
