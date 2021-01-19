import {useEffect} from 'react';

export const Breakpoint = {
    MD: '960px',
    SM: '600px',
};

export const Color = {
    WHITE: '#eceff4',
    GREY: '#d8dee9',
    BLACK_L: '#434C5E',
    BLACK: '#3b4252',
    BLACK_D: '#2e3440',
    GRAY: '#c6c6c6',
    GREEN: '#a3be8c',
    BLUE: '#5e81ac',
    PINK: '#b48ead',
    RED: '#bf616a',
    ORANGE: '#d08770',
    YELLOW: '#ebcb8b',
    ACCENT: 'var(--blue)',
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.02.2020
 * Time: 18:14
 */
export default () => {

    const theme = {
        'white': Color.WHITE,
        'grey': Color.GREY,
        'black-l': Color.BLACK_L,
        'black': Color.BLACK,
        'black-d': Color.BLACK_D,
        'gray': Color.GRAY,
        'green': Color.GREEN,
        'blue': Color.BLUE,
        'pink': Color.PINK,
        'red': Color.RED,
        'orange': Color.ORANGE,
        'yellow': Color.YELLOW,
        'accent': Color.ACCENT,

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
     * @param theme
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