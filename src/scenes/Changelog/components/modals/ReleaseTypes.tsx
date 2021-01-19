import React from 'react';
import Button from '@thomann/spectre-react-components/Button';
import Group from '@thomann/spectre-react-components/Group';
import {Type} from '../../hooks/useSemVer';

/**
 *
 * @param current
 * @param onClick
 * @returns {*}
 * @constructor
 */
const ReleaseTypes = ({current, onClick}) => {
    const types = Object.values(Type);

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
 * Date: 04.02.2020
 * Time: 21:39
 */
export default ReleaseTypes;