import {Runtime} from './src/types/runtime';

declare global {
    interface Window {
        runtime: Runtime;
    }
}
