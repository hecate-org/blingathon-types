export type MessageTypes = "text" | "document" | "image";

export enum OpCode {
  hello = 0 << 1,
}

export interface GatewayMessage {
  op: OpCode;
}

export interface Message extends GatewayMessage {
  content: string;
  type: MessageTypes;
  timestamp: number;
}
