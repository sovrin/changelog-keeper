import {parser, Change, Release} from 'keep-a-changelog';
import {explode} from '#/hooks/usePath';
import {getter} from 'utils';

const VERSION_REGEX = /##\s(\d\.\d\.\d)\s/g;

export const Action = {
    ADD_RELEASE: 'add_release',
    ADD_CHANGE: 'add_change',
    ADD_ENTRY: 'add_entry',
    DELETE_RELEASE: 'delete_release',
    SET_CHANGELOG: 'set_changelog',
    EDIT_TITLE: 'edit_title',
    EDIT_DESCRIPTION: 'edit_about',
};

export const INITIAL = {
    title: '',
    description: '',
    releases: [],
};

export const HEAD = new Release('0.0.0', new Date());

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
 *
 * @param state
 * @param action
 * @param value
 * @param path
 */
const factory = (state, {action, value, path = null}) => {

    /**
     *
     * @param version
     * @param date
     * @param description
     */
    const addRelease = ({version, date, description}) => {
        state.addRelease(new Release(version, date, description));

        return state;
    };

    /**
     *
     */
    const deleteRelease = () => {
        return update(state, path, (target) => {
            return update(state, 'releases', (releases) => {

                for (const index in releases) {
                    const release = releases[index];

                    if (target !== release) {
                        continue;
                    }

                    delete releases[index];
                }

                return state;
            });
        });
    };

    /**
     *
     * @param title
     * @param description
     */
    const addChange = ({title, description}) => {
        return update(state, path, (entries) => {
            entries.push(new Change(title, description));

            return state;
        });
    };

    /**
     *
     * @param title
     * @param description
     */
    const addEntry = ({title, description}) => {
        return update(state, path, (entries) => {
            entries.push(new Change(title, description));

            return state;
        });
    };

    /**
     *
     * @param value
     */
    const setChangeLog = (value) => {
        return value;
    };

    /**
     *
     * @param value
     */
    const editTitle = (value) => {
        state.title = value;

        return state;
    };

    /**
     *
     * @param value
     */
    const editDescription = (value) => {
        state.description = value;

        return state;
    };

    const {[action]: handle} = {
        [Action.ADD_RELEASE]: addRelease,
        [Action.ADD_CHANGE]: addChange,
        [Action.ADD_ENTRY]: addEntry,
        [Action.DELETE_RELEASE]: deleteRelease,
        [Action.SET_CHANGELOG]: setChangeLog,
        [Action.EDIT_TITLE]: editTitle,
        [Action.EDIT_DESCRIPTION]: editDescription,
    };

    if (!handle) {
        return state;
    }

    state = handle(value);

    return convert(state);
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.09.2019
 * Time: 00:54
 */
export default factory;
