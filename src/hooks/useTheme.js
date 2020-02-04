import {useEffect} from 'react';

export const Breakpoint = {
    MD: '960px',
    SM: '600px',
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.02.2020
 * Time: 18:14
 */
export default () => {

    const theme = {
        'white': '#eceff4',
        'grey': '#d8dee9',
        'black-l': '#434C5E',
        'black': '#3b4252',
        'black-d': '#2e3440',
        'gray': '#c6c6c6',
        'green': '#a3be8c',
        'blue': '#5e81ac',
        'pink': '#b48ead',
        'red': '#bf616a',
        'orange': '#d08770',
        'yellow': '#ebcb8b',
        'accent': 'var(--blue)',

        'unit-o': '.05rem',
        'unit-h': '.1rem',
        'unit-1': '.2rem',
        'unit-2': '.4rem',
        'unit-3': '.6rem',
        'unit-4': '.8rem',
        'unit-5': '1rem',
        'unit-6': '1.2rem',
        'unit-7': '1.4rem',
        'unit-8': '1.6rem',
        'unit-9': '1.8rem',
        'unit-10': '2rem',
        'unit-12': '2.4rem',
        'unit-16': '3.2rem',

        'spacing-sm': 'var(--unit-1)',
        'spacing': 'var(--unit-2)',
        'spacing-lg': 'var(--unit-4)',

        'border-radius': 'var(--unit-h)',
        'border-width': 'var(--unit-o)',
    };

    /**
     *
     */
    const applyTheme = (theme) => {
        document.documentElement.removeAttribute('style');

        for (const key in theme) {
            if (!theme.hasOwnProperty(key)) {
                continue;
            }

            const {[key]: value} = theme;

            document.documentElement.style.setProperty(`--${key}`, value);
        }
    };

    useEffect(() => {
        applyTheme(theme);
    }, []);
}