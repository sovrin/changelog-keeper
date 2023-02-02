import React from 'react';
import {Button, Icon} from '@thomann/spectre-react-components';
import Group from "@thomann/spectre-react-components/Group";
import {useFrame, useSettings} from "#/hooks";
import style from './module.less';

/**
 *
 * @returns {*}
 * @constructor
 */
const Toolbar = () => {
    const {name, version} = useSettings();
    const {title, close, maximize, minimize, develop} = useFrame();

    /**
     *
     */
    const onClose = () => {
        close()
    };

    /**
     *
     */
    const onMinimize = () => {
        minimize();
    }

    /**
     *
     */
    const onMaximize = () => {
        maximize();
    }

    /**
     *
     * @param e
     */
    const onDevTools = (e) => {
        if (!e.shiftKey) {
            return;
        }

        develop();
    }

    return (
        <div className={style.toolbar}>
            <div className={style.controls}>
                <Button
                    className={style.options}
                    size={Button.Size.SMALL}
                    onClick={onDevTools}
                    primary
                >
                    <Icon type={Icon.Type.MENU}/>

                    <div className="name">
                        {name}
                    </div>
                </Button>
            </div>

            <div className={style.title}>
                {title}
            </div>

            <div className={style.spacer}/>

            <Group className={style.controls}>
                <Button
                    onClick={onMinimize}
                    size={Button.Size.SMALL}
                    link
                >
                    <Icon type={Icon.Type.MINUS}/>
                </Button>
                <Button
                    className={style.maximize}
                    onClick={onMaximize}
                    size={Button.Size.SMALL}
                    link
                >
                    <Icon type={Icon.Type.RESIZE_HORIZ}/>
                </Button>
                <Button
                    onClick={onClose}
                    size={Button.Size.SMALL}
                    error
                >
                    <Icon type={Icon.Type.CROSS}/>
                </Button>
            </Group>
        </div>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 02.02.23
 * Time: 22:36
 */
export default Toolbar;
