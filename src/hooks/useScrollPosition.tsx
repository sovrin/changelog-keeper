import {useRef, useLayoutEffect} from 'react';

/**
 *
 * @param element
 * @returns {{x: number, y: number}}
 */
const getScrollPosition = (element) => {
    const target = element ? element.current : document.body;
    const {left, top} = target.getBoundingClientRect();

    return (element === window)
        ? {x: window.scrollX, y: window.scrollY}
        : {x: left, y: top}
    ;
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.02.2020
 * Time: 22:28
 */
export default (effect, deps, element, wait) => {
    const position = useRef(getScrollPosition(element));
    let timeout = null;

    const callBack = () => {
        const currPos = getScrollPosition(element);

        effect([currPos, position.current]);

        position.current = currPos;
        timeout = null;
    };

    useLayoutEffect(() => {
        const handleScroll = () => {
            if (wait) {
                if (timeout === null) {
                    timeout = setTimeout(callBack, wait);
                }
            } else {
                callBack();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, deps);
}