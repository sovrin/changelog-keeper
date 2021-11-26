/**
 *
 * @param path
 */
export const read = async (path: string) => (
    fetch('http://localhost:8070/api/changelog')
        .then((response) => response.text())
);
