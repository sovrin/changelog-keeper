export const COLOR_RED = '#bf616a';
export const COLOR_GREEN = '#a3be8c';
export const COLOR_BLACK = '#2e3440';
export const COLOR_BLUE = '#5e81ac';
export const COLOR_WHITE = '#eceff4';
export const COLOR_ORANGE = '#d08770';
export const COLOR_YELLOW = '#ebcb8b';
export const COLOR_GREY = '#4c566a';
export const COLOR_PINK = '#b48ead';
export const COLOR_ACCENT = COLOR_BLUE;

export const EASE_FUNCTION = 'cubic-bezier(0.25, 0.85, 0.25, 0.85)';
export const BORDER_RADIUS = '2px';

export const FONT_SIZE = '11px';
export const FONT_SIZE_SMALL = `${parseInt(FONT_SIZE) - 2}px`;
export const FONT_SIZE_BIG = `${parseInt(FONT_SIZE) + 2}px`;

// Unit sizes
export const UNIT_O = '.05rem';
export const UNIT_H = '.1rem';
export const UNIT_1 = '.2rem';
export const UNIT_2 = '.4rem';
export const UNIT_3 = '.6rem';
export const UNIT_4 = '.8rem';
export const UNIT_5 = '1rem';
export const UNIT_6 = '1.2rem';
export const UNIT_7 = '1.4rem';
export const UNIT_8 = '1.6rem';
export const UNIT_9 = '1.8rem';
export const UNIT_10 = '2rem';
export const UNIT_12 = '2.4rem';
export const UNIT_16 = '3.2rem';

export const LAYOUT_SPACING_SM = UNIT_1;
export const LAYOUT_SPACING = UNIT_2;
export const LAYOUT_SPACING_LG = UNIT_4;

export const BREAKPOINT_960 = '960px';
export const BREAKPOINT_600 = '600px';

const extract = (a, b) => (
    (/([a-z]+)/.exec(a) || /([a-z]+)/.exec(b) || []).pop() || ''
);

export const add = (a, b) => (
    (parseFloat(a) + parseFloat(b)) + extract(a, b)
);

export const sub = (a, b) => (
    (parseFloat(a) - parseFloat(b)) + extract(a, b)
);

export const mul = (a, b) => (
    (parseFloat(a) * parseFloat(b)) + extract(a, b)
);

export const div = (a, b) => (
    (parseFloat(a) / parseFloat(b)) + extract(a, b)
);