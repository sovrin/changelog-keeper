/**
 *  generate random id
 *
 * @param n
 * @param charset
 * @return {*}
 */
export const eid = (n = 18, charset = 'ABCDEF012345679') => (
    [...Array(n)]
    .map(Math.random)
    .map((n) => ~~(n * 100))
    .map((n) => charset[n % charset.length])
    .join('')
);