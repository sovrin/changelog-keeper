import {Action} from '#/reducers/settings';

export type State = {
    version: string,
    name: string,
    language: string,
}

export type Settings = {
    state: State
    dispatch({action, value}: Dispatcher): void,
}

export type Dispatcher = ({
    action: typeof Action[keyof typeof Action],
    value?: any,
});
