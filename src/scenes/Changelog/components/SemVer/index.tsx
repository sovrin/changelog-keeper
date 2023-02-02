import React from 'react';
import Version from '../Version';
import style from './module.less';

/**
 *
 * @param current
 * @param next
 * @param type
 * @returns {*}
 * @constructor
 */
const SemVer = ({current, next, type}) => (
    <h1 className={style.semver}>
        <Version>{current}</Version> &rarr; <Version>{next}</Version>
    </h1>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.02.2020
 * Time: 21:40
 */
export default SemVer;
