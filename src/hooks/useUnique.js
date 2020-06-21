/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.06.2020
 * Time: 13:50
 */
export default (seed = null) => {
    const LEN = 10000;
    const CHARSET = 'ABCDEF012345679';
    const LENGTH = 18;

    /**
     *
     * @param target
     * @returns {number}
     */
    const traverse = (target) => {
        if (target === null) {
            target = Date.now();
        }

        if (typeof target === 'object') {
            target = JSON.stringify(target);
        }

        if (typeof target === 'function') {
            target = target.toString();
        }

        if (typeof target === 'string') {
            target = target.split('')
            .map(c => c.charCodeAt(0))
            .map((n, i) => n * (i + 1))
            .reduce((acc, n) => acc + n)
            ;
        }

        return target;
    };

    /**
     *
     * @returns {Generator<number, void, ?>}
     */
    const seeder = function* () {
        seed = traverse(seed);

        while (1) {
            yield Math.abs(Math.sin(seed++) * LEN) * 10 % 10 / 10;
        }
    };

    /**
     *
     * @returns {number|void}
     */
    let next = () => {
        const seeded = seeder();

        next = () => (
            seeded.next().value
        );

        return next();
    };

    /**
     *
     * @param max
     * @returns {number}
     */
    const upper = (max) => (
        ~~(next() * (max + 1))
    );

    /**
     *
     * @param length
     * @param charset
     * @returns {string}
     */
    return () => (
        [...Array(LENGTH)]
            .map(next)
            .map((n) => upper(n * LEN))
            .map((n) => CHARSET[n % CHARSET.length])
            .join('')
    );
};