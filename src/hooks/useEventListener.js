import {createRef, useEffect} from 'react';

/**
 *
 * @param eventName
 * @param handler
 * @param element
 * @param options
 */
const useEventListener = (eventName, handler, element = window, options) => {
    const savedHandler = createRef();
    savedHandler.current = handler;

    const currentOptions = createRef();
    currentOptions.current = options;

    useEffect(() => {
        const capturedOptions = currentOptions.current;
        const capturedElement = element.current;

        if (!capturedElement || !eventName) {
            return;
        }

        const eventListener = (event) => {
            if (savedHandler.current) {
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