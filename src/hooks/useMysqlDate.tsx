/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 23:18
 */
export default (date) => {
    return date.toISOString().slice(0, 10).replace('T', ' ');
}