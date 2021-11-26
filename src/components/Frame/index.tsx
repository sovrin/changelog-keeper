import React from 'react';
import Button from '@thomann/spectre-react-components/Button';
import Group from '@thomann/spectre-react-components/Group';
import Icon from '@thomann/spectre-react-components/Icon';
import {useSettings, useFrame} from 'hooks';
import style from './module.less';

/**
 *
 * @constructor
 */
const Frame = ({children}) => {
    const {name, version} = useSettings();
    const {close, maximize, minimize, develop} = useFrame();

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
        <div className={style.frame}>
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

            <div className={style.content}>
                {children}
            </div>

            <div className={style.status}>
                status
            </div>
        </div>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 30.06.2021
 * Time: 23:55
 */
export default Frame;
