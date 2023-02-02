import {contextBridge, ipcRenderer} from 'electron';

/**
 *
 * @param channel
 * @param data
 */
const send = (channel, data) => {
    ipcRenderer.send(channel, data);
};

/**
 *
 * @param channel
 * @param listener
 */
const subscribe = (channel, listener) => {
    const subscription = (event, ...args) => listener(...args);
    ipcRenderer.on(channel, subscription);

    return () => {
        ipcRenderer.removeListener(channel, subscription);
    };
};

contextBridge.exposeInMainWorld(
    'runtime', {
        send,
        subscribe,
    },
);
