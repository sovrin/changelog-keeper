import React from 'react';
import Button from '@thomann/spectre-react-components/Button';
import Modal, {Container, Body, Footer, Header, Overlay} from '@thomann/spectre-react-components/Modal';
import Group from '@thomann/spectre-react-components/Group';
import useI18n from 'hooks/useI18n';

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
    const {cancel} = useI18n({
        cancel: 'common.cancel',
    });

    const style = {
        'backdropFilter': 'blur(3px)',
    };

    /**
     *
     */
    const onSubmit = () => onConfirm();

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
                        {(onConfirm) && (
                            <Button
                                onClick={onConfirm}
                                primary
                            >
                                {label}
                            </Button>
                        )}
                        <Button
                            onClick={onClose}
                            error
                        >
                            {cancel}
                        </Button>
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