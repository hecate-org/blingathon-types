export type MessageTypes = "text" | "document" | "image";

export interface Message {
    content: string;
    type: MessageTypes;
    timestamp: number;
}