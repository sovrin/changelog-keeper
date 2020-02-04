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
    const {dispatch} = useChangelog();
    const [showModal, close] = useModal.default(Create);
    const [head] = releases;

    const addRelease = () => {
        showModal();
    };

    const removeRelease = () => {

    };

    useEffect(() => {
        const [head] = releases;
        if (!head) {
            return;
        }

        const {version} = head;

        showModal({version});

        return () => {
            close();
        };
    }, [releases]);

    return (
        <div className="releases">
            <Button onClick={addRelease}>add release</Button>

            {releases.map(Release)}
        </div>
    );
};

export default Releases;