import {useRef, useEffect} from 'react';

/**
 *
 * @param eventName
 * @param handler
 * @param element
 * @param options
 */
const useEventListener = (eventName: string, handler: Function, element = window, options = null) => {
    const savedHandler = useRef(null);
    savedHandler.current = handler;

    const currentOptions = useRef(null);
    currentOptions.current = options;

    useEffect(() => {
        const capturedOptions = currentOptions.current;
        // @ts-ignore
        const capturedElement = element.current;

        if (!capturedElement || !eventName) {
            return;
        }

        const eventListener = (event) => {
            if (savedHandler.current !== undefined) {
                savedHandler.current(event);
            }
        };

        capturedElement.addEventListener(eventName, eventListener, capturedOptions);

        return () => {
            capturedElement.removeEventListener(eventName, eventListener, capturedOptions);
        };
    }, [eventName, element, savedHandler, currentOptions]);
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 07.06.2019
 * Time: 11:46
 */
export default useEventListener;
