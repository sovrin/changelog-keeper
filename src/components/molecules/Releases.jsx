import React from 'react';
import Button from '@thomann/spectre-react-components/Button';
import {useModal} from '@thomann/spectre-react-components/hooks';
import Release from 'components/atoms/Release';
import Create from 'components/organisms/modals/release/Create';
import Snippet from 'components/atoms/Snippet';
import useChangelog from 'hooks/useChangelog';
import {Action} from 'reducers/changelog';

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

        const onCreate = (version) => {
            const value = {
                version,
                date: new Date(),
                description: 'desc',
            };

            dispatch({action: Action.ADD_RELEASE, value});

            return true;
        }


        showModal({version, onCreate});
    };

    const removeRelease = () => {

    };

    const children = releases.map(Release);

    return (
        <div className="releases">
            <Button onClick={addRelease}>
                <Snippet cursor="release.add"/>
            </Button>
            {children}
        </div>
    );
};

export default Releases;