import React, {useEffect} from 'react';
import Button from '@thomann/spectre-react-components/Button';
import {useModal} from '@thomann/spectre-react-components/hooks';
// import {Release as Entry} from 'keep-a-changelog';
import Release from 'components/atoms/Release';
// import {Action} from '../reducers/changelog';
import useChangelog from 'hooks/useChangelog';
import Create from 'components/organisms/modals/release/Create';

/**
 *
 * @param releases
 * @returns {*}
 * @constructor
 */
const Releases = ({releases}) => {
    const {dispatch, head} = useChangelog();
    const [showModal] = useModal.default(Create);

    const addRelease = () => {
        const {version} = head;

        showModal({version});
    };

    const removeRelease = () => {

    };

    return (
        <div className="releases">
            <Button onClick={addRelease}>add release</Button>

            {releases.map(Release)}
        </div>
    );
};

export default Releases;