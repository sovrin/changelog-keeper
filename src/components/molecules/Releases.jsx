import React from 'react';
import Button from '@thomann/spectre-react-components/Button';
import {useModal} from '@thomann/spectre-react-components/hooks';
import Release from 'components/atoms/Release';
import Create from 'components/organisms/modals/release/Create';
import Snippet from 'components/atoms/Snippet';
import useChangelog, {Action} from 'hooks/useChangelog';

/**
 *
 * @param releases
 * @returns {*}
 * @constructor
 */
const Releases = ({releases}) => {
    const {dispatch, head} = useChangelog();
    const [showModal] = useModal.default(Create);

    /**
     *
     */
    const addRelease = () => {
        const {version} = head;

        /**
         *
         * @param version
         * @returns {boolean}
         */
        const onCreate = (version) => {
            const value = {
                version,
                date: new Date(),
                description: 'desc',
            };

            dispatch({action: Action.ADD_RELEASE, value});

            return true;
        };

        showModal({version, onCreate});
    };

    /**
     *
     * @param changes
     * @param date
     * @param version
     * @param i
     * @returns {*}
     */
    const build = ({changes, date, version}, i) => (
        <Release
            key={i}
            index={i}
            changes={changes}
            date={date}
            version={version}
        />
    );

    const children = releases.map(build);

    return (
        <div className="releases">
            <Button onClick={addRelease}>
                <Snippet cursor="description.release.add"/>
            </Button>
            {children}
        </div>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 22.06.2020
 * Time: 23:21
 */
export default Releases;