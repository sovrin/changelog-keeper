import React from 'react';
import Group from '@thomann/spectre-react-components/Group';
import Button from '@thomann/spectre-react-components/Button';
import Label from '@thomann/spectre-react-components/Label';
import Prompt from '../Prompt';
import useSemVer, {Type} from '../../../../hooks/useSemVer';
import useI18n from '../../../../hooks/useI18n';
import ReleaseTypes from '../../../molecules/ReleaseTypes';
import SemVer from '../../../molecules/SemVer';
import styled from 'styled-components';
import Hint from '../../../atoms/Hint';

const Element = styled('div')`
    display: flex;
    flex-direction: column;
`;

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Create = (props) => {
    const {version, onCreate} = props;
    const {bump, type, next, view} = useSemVer(version);

    const {hint} = useI18n({
        hint: `release.${type}`,
    });

    const {title, label} = useI18n({
        title: 'modal.create.title',
        label: 'common.create',
    });

    return (
        <Prompt
            {...props}
            title={title}
            label={label}
            onConfirm={() => {
            }}
        >

            <SemVer
                current={view.current}
                next={view.next}
            />

            <Element>
                <Hint>
                    {hint}
                </Hint>

                <ReleaseTypes
                    current={type}
                    onClick={bump}
                />
            </Element>
        </Prompt>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.01.2020
 * Time: 23:29
 */
export default Create;