import IMessage from '../../models/IMessage';
import {messageHandlers} from "./messageHandlers";
import {MessageCallback} from "../../models/types";

export const handleIncomingMessage: MessageCallback = async (msg:IMessage) => {
    const messageType = msg.Type;
    const handler:MessageCallback = messageHandlers[messageType];
    if (handler) {
        await handler(msg);
    } else {
        console.warn(`No handler found for message type: ${messageType}`);
    }
};