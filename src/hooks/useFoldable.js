import React, {useState} from 'react';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 22.06.2020
 * Time: 23:22
 */
export default (folded = false) => {
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
     * @returns {null|*}
     */
    const Folder = ({children}) => {
        if (!isFolded) {
            return null;
        }

        return children;
    };

    return {
        onFold,
        Folder,
    };
}