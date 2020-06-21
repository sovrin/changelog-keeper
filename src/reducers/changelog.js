import {parser, Change, Release} from 'keep-a-changelog';
import {explode} from 'hooks/usePath';

const VERSION_REGEX = /##\s(\d\.\d\.\d)\s/g;

export const Action = {
    ADD_RELEASE: 'add_release',
    ADD_ENTRY: 'add_entry',
    DELETE_RELEASE: 'delete_release',
    SET_CHANGELOG: 'set_changelog',
    EDIT_TITLE: 'edit_title',
    EDIT_DESCRIPTION: 'edit_about',
};

/**
 *
 * @param path
 * @param context
 */
const getter = (path, context) => (
    path.slice(0).reduce((acc, step, i, a) => {
        if (acc instanceof Map) {
            return acc.get(step);
        }

        if (acc[step] === undefined) {
            // eject
            a.splice(1);
        }

        return acc[step];
    }, context))
;

/**
 *
 * @param state
 * @param path
 * @param updater
 * @returns {*}
 */
const update = (state, path, updater) => {
    const steps = explode(path);
    const target = getter(steps, state);

    if (!target) {
        return state;
    }

    return updater(target);
};

/**
 *
 * @param state
 * @returns {undefined}
 */
const convert = (state) => {
    const string = state.toString();
    const safe = string.replace(VERSION_REGEX, '## [$1]');
    return parser(safe);
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.09.2019
 * Time: 00:54
 */
export default (state, {action, value, path}) => {
    switch (action) {
        case Action.ADD_RELEASE:
            const {version, date, description} = value;
            state.addRelease(new Release(version, date, description));

            return convert(state);

        case Action.ADD_ENTRY:
            state = update(state, path, (entries) => {
                const {title, description} = value;
                entries.push(new Change(title, description));

                return state;
            });

            return convert(state);
        case Action.SET_CHANGELOG:
            console.info(convert(value));

            return convert(value);

        case Action.EDIT_TITLE:
            state.title = value;

            return convert(state);

        case Action.EDIT_DESCRIPTION:
            state.description = value;

            return convert(state);
        default:
            return state;
    }
}