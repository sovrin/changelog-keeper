/**
 *
 * @param path
 * @param context
 */
export const getter = (path, context) => (
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