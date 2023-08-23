import rabbitMQHandler from "typescript-rabbitmq-handler/dist";
import IEvent from "../models/IEvent";


const rabbitSendQueues = async (rabbit: rabbitMQHandler, queues: string[], msg: IEvent) => {
    return queues.forEach(queue => {
        rabbit.sendMessageToQueue(queue, msg);
    })
};

export default rabbitSendQueues;
