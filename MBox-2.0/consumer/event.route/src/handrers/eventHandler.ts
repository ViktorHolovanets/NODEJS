import rabbitSendQueues from "./sendInQueue";

const RABBITMQ_QUEUE_MAIL = process.env.RABBITMQ_QUEUE_SEND_EMAIL || 'queue_mailer';
const RABBITMQ_QUEUE_EMITTER = process.env.RABBITMQ_QUEUE_SEND_EMAIL || 'queue_emitter';
const RABBITMQ_QUEUE_AUTH = process.env.RABBITMQ_QUEUE_SEND_EMAIL || 'queue_auth';
import IEvent from "../models/IEvent";
import rabbitMQHandler from "typescript-rabbitmq-handler/dist";

export const handleEvent = async (event: IEvent, rabbit: rabbitMQHandler): Promise<void> => {
    switch (event.Template) {
        case "user_delete":
        case "user_change_role":
        case "user_block":
            await rabbitSendQueues(rabbit, [RABBITMQ_QUEUE_MAIL, RABBITMQ_QUEUE_EMITTER, RABBITMQ_QUEUE_AUTH], event);
            break;
        case"user_unblock":
            await rabbitSendQueues(rabbit, [RABBITMQ_QUEUE_MAIL], event);
            break;

        case"band_block":
        case"band_delete":
        case"band_unblock":
            await rabbitSendQueues(rabbit, [RABBITMQ_QUEUE_MAIL, RABBITMQ_QUEUE_EMITTER, RABBITMQ_QUEUE_AUTH], event);
            break;

        case"song_delete":
        case"song_block":
        case"song_unblock":
            await rabbitSendQueues(rabbit, [RABBITMQ_QUEUE_MAIL, RABBITMQ_QUEUE_EMITTER, RABBITMQ_QUEUE_AUTH], event);
            break;

        case"news_delete":
            await rabbitSendQueues(rabbit, [RABBITMQ_QUEUE_MAIL, RABBITMQ_QUEUE_EMITTER], event);
            break;
    }
};



