import React from 'react';
import {useRouter} from '../../hooks';

/**
 *
 * @constructor
 */
const Settings = () => {
    const update = useRouter();

    return (
        <div>
            settings

            <button onClick={() => update(['/main_window/changelog'])}>
                to changelog
            </button>
        </div>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 03.07.2021
 * Time: 14:01
 */
export default Settings;
