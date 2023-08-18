import IMessage from '../../models/IMessage';
import {Socket} from 'socket.io';
import {MessageCallback} from "../../models/types";
import {sendNewMail} from "../mailer/mailer";

let ioInstance: Socket;
export const setIOInstance = (io: Socket) => {
    ioInstance = io;
};
export const messageHandlers: Record<string, MessageCallback> = {
    email: async (msg:IMessage) => {
        await sendNewMail(msg);
        console.log('Handling email message:', msg.Type);
    },
    manipulations : async (msg:IMessage) => {
        console.log('Handling chat message:', msg.Type);
        ioInstance.emit("manipulations", "")
    },
    //TODO
};