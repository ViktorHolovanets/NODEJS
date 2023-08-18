import IMessage from './IMessage';

export type MessageCallback = (msg: IMessage) => Promise<void>;