import React from 'react';
import useMysqlDate from 'hooks/useMysqlDate';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Timestamp = ({className, date}) => {
    if (!date) {
        date = new Date();
    }

    date = useMysqlDate(date);

    return (
        <span className={className}>
            {date}
        </span>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:40
 */
export default Timestamp;