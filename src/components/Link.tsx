import React from 'react';
import PropTypes from 'prop-types';
import {useRouter} from 'hooks';

/**
 *
 * @param children
 * @param to
 * @param data
 * @param rest
 * @constructor
 */
const Link = ({children, to, data, ...rest}) => {
    const route = useRouter();

    /**
     *
     * @param e
     */
    const onClick = (e) => {
        e.preventDefault();

        return route([to, data]);
    };

    return (
        <a
            href="#"
            onClick={onClick}
            {...rest}
        >
            {children}
        </a>
    );
};

Link.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string.isRequired,
    data: PropTypes.object,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 01.07.2021
 * Time: 21:44
 */
export default Link;
