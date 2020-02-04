import React, {useState, createRef} from 'react';
import styled from 'styled-components';
import {useClassName} from '@thomann/spectre-react-components/hooks';

/**
 *
 */
const Element = styled('div')`
    &.active {
        background: red;
    }
`;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.01.2020
 * Time: 23:49
 */
export default (html, Wrapper) => {
    const [isEditable, setEditable] = useState(false);
    const ref = createRef();

    const toggleEditable = () => {
        setEditable(!isEditable);
    };

    const className = useClassName({
        active: isEditable,
    });

    const Editable = () => {
        if (!isEditable) {
            return <Wrapper>{html}</Wrapper>;
        }

        return (
            <Element
                ref={ref}
                className={className}
                contentEditable={isEditable}
                dangerouslySetInnerHTML={{__html: html}}
            />
        );
    };

    return [
        Editable,
        toggleEditable,
    ];
}