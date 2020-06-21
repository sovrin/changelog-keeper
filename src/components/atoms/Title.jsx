import React from 'react';
import Icon from '@thomann/spectre-react-components/Icon';
import {Action} from 'reducers/changelog';
import useChangelog from 'hooks/useChangelog';
import Root, {Text, Edit} from 'styles/atoms/Title.style';
import {Button} from '@thomann/spectre-react-components';
import {Delete} from '../../styles/atoms/Release.style';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Title = ({children}) => {
    const {dispatch} = useChangelog();

    /**
     *
     */
    const handleChange = () => {
        dispatch({action: Action.EDIT_TITLE, value: 'NEW TITLE'});
    };

    return (
        <Root>
            <Text>{children}</Text>
            <Edit
                onClick={handleChange}
                size={Button.Size.SMALL}
                action
            >
                <Icon type={Icon.Type.EDIT}/>
            </Edit>
        </Root>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:40
 */
export default Title;