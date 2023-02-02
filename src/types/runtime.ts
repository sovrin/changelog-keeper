export type Unsubscribe = () => void;
export type Listener = (...args: any[]) => void;

export interface Runtime {
    send: (channel: string, data?: any) => void,
    subscribe: (channel: string, listener: Listener) => Unsubscribe
}
