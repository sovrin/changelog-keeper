import {Runtime} from '#/types/runtime';

declare global {
    interface Window {
        runtime: Runtime;
    }
}
