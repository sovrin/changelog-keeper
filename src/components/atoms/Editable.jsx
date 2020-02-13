import React from 'react';
import {Button, Icon} from '@thomann/spectre-react-components';
import useEditable from '../../hooks/useEditable';
import Markdown from './Markdown';
import styled from 'styled-components';

const Element = styled('div')`
    display: flex;
`;

const Editable = ({children}) => {
    const [Editor, toggle] = useEditable(children, Markdown);

    return (
        <Element>
            <Editor/>
            <Button
                onClick={toggle}
                size={Button.Size.SMALL}
                action
            >
                <Icon type={Icon.Type.EDIT}/>
            </Button>
        </Element>
    );
};

export default Editable;