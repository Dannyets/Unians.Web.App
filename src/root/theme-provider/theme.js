import theme from 'styled-theming';

export const palette = {
    first: '#534F49',
    second:'#05668D',
    third: '#028090',
    forth: '#34D1BF',
    fith:  '#EAFFFD',
};

export const defaultTheme = {
    padding: '20px',
    margin: '20px',
    boxBorderStroke: 1,
    backgroundColor: palette.fith,
    borderColor: palette.first,
    boxBorderColor: palette.first,
    textColor: palette.first,
    titleTextColor: palette.first,
    fontFamilty: `"Lato", sans-serif`,
    fontSize: '1.3rem'
}

export const padding = theme('mode', {
    'default': defaultTheme.padding,
    'selected': defaultTheme.padding
});

export const margin = theme('mode', {
    'default': defaultTheme.margin,
    'selected': defaultTheme.margin
});

export const boxBorderStroke = theme('mode', {
    'default': defaultTheme.boxBorderStroke,
    'selected': 2
});

export const backgroundColor = theme('mode', {
    'default': defaultTheme.backgroundColor,
    'selected': palette.forth
});

export const borderColor = theme('mode', {
    'default': defaultTheme.borderColor,
    'selected': defaultTheme.borderColor
});

export const boxBorderColor = theme('mode', {
    'default': defaultTheme.boxBorderColor,
    'selected': defaultTheme.boxBorderColor
});

export const textColor = theme('mode', {
    'default': defaultTheme.textColor,
    'selected': palette.fith
});

export const titleTextColor = theme('mode', {
    'default': defaultTheme.titleTextColor,
    'selected': defaultTheme.titleTextColor
});

export const fontFamily = theme('mode', {
    'default': defaultTheme.fontFamilty,
    'selected': defaultTheme.fontFamilty
});

export const fontSize = theme('mode', {
    'default': defaultTheme.fontSize,
    'selected': defaultTheme.fontSize
});