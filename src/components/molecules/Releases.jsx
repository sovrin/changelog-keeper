import React, {useEffect} from 'react';
import Button from '@thomann/spectre-react-components/Button';
import {useModal} from '@thomann/spectre-react-components/hooks';
// import {Release as Entry} from 'keep-a-changelog';
import Release from '../atoms/Release';
// import {Action} from '../reducers/changelog';
import useChangelog from '../../hooks/useChangelog';
import Create from '../organisms/modals/release/Create';

/**
 *
 * @param releases
 * @returns {*}
 * @constructor
 */
const Releases = ({releases}) => {
    const {dispatch, head} = useChangelog();
    console.info(head);

    const [showModal] = useModal.default(Create);

    const addRelease = () => {
        const {version} = head;

        showModal({version});
    };

    const removeRelease = () => {

    };

    const children = releases.map(release => {
        const {version: {raw}} = release;

        return (
            <Release
                key={raw}
                head={release === head}
                {...release}
            />
        );
    });

    return (
        <div className="releases">
            <Button onClick={addRelease}>add release</Button>

            {children}
        </div>
    );
};

export default Releases;