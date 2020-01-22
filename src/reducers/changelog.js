import {parser} from 'keep-a-changelog';

export const Action = {
    SET_CHANGELOG: 'set_changelog',
    EDIT_TITLE: 'edit_title',
    EDIT_DESCRIPTION: 'edit_description',
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
        case Action.SET_CHANGELOG:
            if (!value) {
                return null;
            }

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