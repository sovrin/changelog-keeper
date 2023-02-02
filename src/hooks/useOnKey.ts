import useEventListener from './useEventListener';

export const Key = {
    DELETE: 8,
    ENTER: 13,
    ESC: 27,
    DOWN: 40,
    UP: 38,
    ANY: '*'
};

export const Type = {
    DOWN: 'keydown',
    UP: 'keyup',
};

/**
 *
 * @param keyCode
 * @param ref
 * @param type
 * @param callback
 */
const useOnKey = (keyCode, type = Type.DOWN, ref = null, callback = (e, keyCode) => {}) => {
    useEventListener(type, (event) => {
        if (event.keyCode !== keyCode && keyCode !== Key.ANY) {
            return;
        }

        callback(event, event.keyCode);
    }, ref);
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 24.06.2020
 * Time: 20:16
 */
export default useOnKey;