import React from 'react';
import styled from 'styled-components';
import Prompt from '../Prompt';
import Hint from 'components/atoms/Hint';
import ReleaseTypes from 'components/molecules/ReleaseTypes';
import SemVer from 'components/molecules/SemVer';
import useSemVer from 'hooks/useSemVer';
import useI18n from 'hooks/useI18n';

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

    const {title, label, hint} = useI18n({
        title: 'modal.create.title',
        label: 'common.create',
        hint: `release.${type}`,
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