import React, {useState, useEffect} from 'react';
import snarkdown from 'snarkdown';

const LINK = /href="(.*?)"/g;

/**
 *
 * @param input
 * @returns {*}
 * @constructor
 */
const Markdown = ({children}) => {
    const [html, setHtml] = useState(
        snarkdown(children)
    );

    /**
     *
     * @param input
     * @returns {void | string | *}
     */
    const update = (input) => {
        const links = input.matchAll(LINK);

        for (const [raw, value] of links) {
            const link = `href="#" onclick="window.open('${value}', '_blank');"`;

            input = input.replace(raw, link);
        }

        return input;
    };

    useEffect(() => {
        const parsed = snarkdown(children);

        if (!parsed) {
            return;
        }

        const html = update(parsed);
        setHtml(html);
    }, [children]);

    return (
        <div dangerouslySetInnerHTML={{__html: html}}/>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 29.01.2020
 * Time: 20:01
 */
export default Markdown;