import React, {useEffect, useRef, useState} from 'react';
import {useClassName} from '@thomann/spectre-react-components/hooks';
import useOnKey, {Key, Type} from './useOnKey';
import Root, {Content} from '~/components/Editable.style';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.01.2020
 * Time: 23:49
 */
export default (Wrapper, onSubmit, permanent = false) => {
    const [isEditing, setEditable] = useState(permanent);
    const ref = useRef(null);
    let buffer;

    useOnKey(Key.ANY, Type.UP, ref, (e) => {
        buffer = e.target.innerText;
    });

    useOnKey(Key.ENTER, Type.DOWN, ref, (e) => {
        if (e.shiftKey) {
            return;
        }

        onSubmit && onSubmit(buffer);

        if (!permanent) {
            setEditable(false);
        }
    });

    useOnKey(Key.ESC, Type.DOWN, ref, (e) => {
        if (!permanent) {
            setEditable(false);
        }
    });

    const className = useClassName('editable', {
        active: isEditing,
        permanent
    });

    /**
     *
     */
    const toggleEditable = () => {
        if (permanent) {
            return;
        }

        setEditable(!isEditing);
    };

    /**
     *
     * @param children
     * @returns {*}
     * @constructor
     */
    const Editable = ({children}) => {
        if (!children) {
            return null;
        }

        if (!isEditing) {
            return (
                <Content>
                    <Wrapper>{children}</Wrapper>
                </Content>
            );
        }

        buffer = children;

        useEffect(() => {
            if (ref.current) {
                ref.current.focus();

                // just select everything to emphasis the editing
                const selection = window.getSelection;
                if (selection) {
                    selection().selectAllChildren(ref.current);
                }
            }
        }, []);

        return (
            <Root
                ref={ref}
                active={isEditing}
                className={className}
                contentEditable={isEditing}
                dangerouslySetInnerHTML={{__html: children}}
            />
        );
    };

    return [
        Editable as any,
        toggleEditable,
        isEditing,
    ];
}