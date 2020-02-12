import React from 'react';
import {Type} from '../../hooks/useSemVer';
import Button from '@thomann/spectre-react-components/Button';
import Group from '@thomann/spectre-react-components/Group';

/**
 *
 * @param current
 * @param onClick
 * @returns {*}
 * @constructor
 */
const ReleaseTypes = ({current, onClick}) => {
    const types = Object.values(Type);

    const buttons = types.map((type) => {
        return (
            <Button
                key={type}
                onClick={() => onClick(type)}
                primary={current === type}
            >
                {type}
            </Button>
        );
    });

    return (
        <Group>
            {buttons}
        </Group>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.02.2020
 * Time: 21:39
 */
export default ReleaseTypes;