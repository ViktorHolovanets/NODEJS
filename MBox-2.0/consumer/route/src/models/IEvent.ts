import IMessage from "./IMessage";
import ISocket from "./ISocket";

export default interface IEvent {
    Mail: IMessage | null;
    Socket: ISocket | null;
}