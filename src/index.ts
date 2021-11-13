export type MessageTypes = "text" | "document" | "image";

export const OpCode = {
  hello: 0,
  auth_start: 1,
  auth_reply: 2,
  auth_success: 3,

  exception: 1000
} as const;

type OpCodeKeys = keyof typeof OpCode;
export type Op = typeof OpCode[OpCodeKeys];

export interface GatewayMessage {
    /** The gateway opcode. */
  op: Op;
}

export interface AuthStartMessage extends GatewayMessage {
    /** Public client key. */
    pub: string;
}

export interface AuthReplyMessage extends GatewayMessage {
    /** The encrypted AES key. */
    key: string;
}

export interface WSMessage extends GatewayMessage {
  /** Represents a proper websocket message which has been encrypted. */
  data: string;
}

export interface Message {
  content: string;
  type: MessageTypes;
  timestamp: number;
  channel: number;
}
