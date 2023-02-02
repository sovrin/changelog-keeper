import {IpcMainEvent} from 'electron';
import {readFileSync} from 'fs';

/**
 *
 * @param event
 * @param path
 */
const read = (event: IpcMainEvent, path: string) => {
    const data = readFileSync(path);
    const string = data.toString();

    event.reply('read_received', string);
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 30.06.2021
 * Time: 23:44
 */
export {
    read,
};
