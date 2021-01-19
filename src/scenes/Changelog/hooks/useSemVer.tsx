import {inc, SemVer} from 'semver';
import {useState, useEffect} from 'react';

export const Type = {
    MAJOR: 'major',
    MINOR: 'minor',
    PATCH: 'patch',
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.02.2020
 * Time: 18:57
 */
export default (version) => {
    const [type, setType] = useState(Type.PATCH);
    const [next, setNext] = useState(version);
    const [current] = useState(version);

    /**
     *
     * @param type
     */
    const bump = (type) => {
        setType(type);
    };

    /**
     *
     */
    const increment = () => {
        const {raw} = current;
        const next = inc(raw, type);

        return new SemVer(next);
    };

    useEffect(() => {
        if (!version || !type) {
            return;
        }

        const next = increment();
        setNext(next);
    }, [type]);

    return {
        next,
        current,
        increment,
        bump,
        type,
        view: {
            next: next && next.raw,
            current: current && current.raw,
        },
    };
}