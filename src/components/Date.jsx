import React from 'react';
import useMysqlDate from '../hooks/useMysqlDate';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Date = ({date}) => {
    date = useMysqlDate(date);

    return (
        <span className="date">
            {date}
        </span>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:40
 */
export default Date;