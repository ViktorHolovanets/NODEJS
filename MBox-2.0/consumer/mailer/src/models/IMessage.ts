export default interface IMessage {
    Body: any;
    From: string | null;
    Template: string;
    To: string | null;
}