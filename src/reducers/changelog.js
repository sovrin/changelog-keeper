import {parser} from 'keep-a-changelog';
import useUnique from '../hooks/useUnique';

export const Action = {
    ADD_RELEASE: 'add_release',
    DELETE_RELEASE: 'delete_release',
    SET_CHANGELOG: 'set_changelog',
    EDIT_TITLE: 'edit_title',
    EDIT_DESCRIPTION: 'edit_about',
};

/**
 *
 * @param state
 * @returns {undefined}
 */
const convert = (state) => parser(state.toString());

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.09.2019
 * Time: 00:54
 */
export default (state, {type, value}) => {
    switch (type) {
        case Action.ADD_RELEASE:
            state.addRelease(value);

            return convert(state);

        case Action.SET_CHANGELOG:
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