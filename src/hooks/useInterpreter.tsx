import {explode} from './usePath';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.06.2020
 * Time: 19:27
 */
export default (path) => {
    const [part, release] = explode(path);

    const isLocked = (part === 'releases' && ~~release !== 0);
    const isHead = (~~release < 3);

    return {
        isLocked,
        isHead,
    };
};
