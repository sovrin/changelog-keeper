import React from 'react';
import Button from '@thomann/spectre-react-components/Button';
import Group from '@thomann/spectre-react-components/Group';
import {Action} from '../Releases/Summary/Type';

/**
 *
 * @param current
 * @param onClick
 * @returns {*}
 * @constructor
 */
const ChangeTypes = ({current, onClick}) => {
    const types = Object.values(Action);

    const children = types.map((type) => (
        <Button
            key={type}
            onClick={() => onClick(type)}
            primary={current === type}
        >
            {type}
        </Button>
    ));

    return (
        <Group block>
            {children}
        </Group>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 29.06.2020
 * Time: 17:20
 */
export default ChangeTypes;
