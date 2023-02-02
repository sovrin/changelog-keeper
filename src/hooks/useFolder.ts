import {useState, createElement} from 'react';
import {Folder} from '#/components';

/**
 *
 * @param folded
 */
const useFolder = (folded = false) => {
    const [isFolded, setFold] = useState(folded);

    /**
     *
     */
    const onFold = () => {
        setFold(!isFolded);
    };

    /**
     *
     * @param children
     * @constructor
     */
    const Element = ({children}) => {
        return createElement(Folder, {
            open: !isFolded,
            children
        })
    };

    return {
        onFold,
        Folder: Element,
    };
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 22.06.2020
 * Time: 23:22
 */
export default useFolder;
