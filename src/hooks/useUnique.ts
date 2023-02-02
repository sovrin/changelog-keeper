/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.06.2020
 * Time: 13:50
 */
export default (seed = null, length = 12) => {
    const CHARS = 'ABCDEF012345679';

    /**
     *
     */
    const xorShift = () => {
        seed = seed || new Date().getTime();
        seed ^= seed << 13;
        seed ^= seed >> 17;
        seed ^= seed << 5;

        return seed;
    };

    /**
     *
     */
    return () => {
        const stack = [];

        do {
            const numbers = xorShift()
                .toString()
                .replace('-', '')
                .split('')
            ;

            stack.push(...numbers);

        } while (stack.length < length);

        return stack.slice(0, length)
            .map((n) => CHARS[n % CHARS.length])
            .join('')
        ;
    };
};