import React from 'react';

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

    /**
     *
     * @param date
     */
    const convert = (date) => (
        date.toISOString().slice(0, 10).replace('T', ' ')
    );

    date = convert(date);

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
