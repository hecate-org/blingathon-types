export type MessageTypes = "text" | "document" | "image";

export enum OpCode {
  hello = 0,
  auth_start = 1,
  auth_reply = 2
}

export interface GatewayMessage {
    /** The gateway opcode. */
  op: OpCode;
}

export interface AuthStartMessage extends GatewayMessage {
    /** Public client key. */
    pub: string;
}

export interface AuthReplyMessage extends GatewayMessage {
    /** The encrypted AES key. */
    key: string;
}

export interface Message extends GatewayMessage {
  content: string;
  type: MessageTypes;
  timestamp: number;
}
