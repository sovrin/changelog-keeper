import React from 'react';
import Button from '@thomann/spectre-react-components/Button';
import Modal, {Container, Body, Footer, Header, Overlay} from '@thomann/spectre-react-components/Modal';
import Group from '@thomann/spectre-react-components/Group';
import Snippet from '#/components/Snippet';

/**
 *
 * @param className
 * @param onClose
 * @param onConfirm
 * @param title
 * @param children
 * @param size
 * @returns {*}
 * @constructor
 */
const Prompt = ({className, children, onClose, onConfirm, title, label, loading}) => {
    const style = {
        'backdropFilter': 'blur(3px)',
    };

    /**
     *
     */
    const onSubmit = () => (
        onConfirm() && onClose()
    );

    return (
        <Modal
            className={className}
            onSubmit={onSubmit}
        >
            <Overlay style={style}/>
            <Container>
                <Header
                    title={title}
                    onClose={onClose}
                />
                <Body loading={loading}>
                    {children}
                </Body>
                <Footer>
                    <Group>
                        <Button
                            onClick={onClose}
                            error
                        >
                            <Snippet cursor="label.common.cancel"/>
                        </Button>
                        {(onConfirm) && (
                            <Button
                                onClick={onSubmit}
                                primary
                            >
                                {label}
                            </Button>
                        )}
                    </Group>
                </Footer>
            </Container>
        </Modal>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 27.01.2020
 * Time: 22:48
 */
export default Prompt;
