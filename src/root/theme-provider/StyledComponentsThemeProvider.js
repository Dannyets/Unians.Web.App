import React from 'react';
import PropTypes from 'prop-types';

import styled, { ThemeProvider } from 'styled-components';

import { 
    palette, backgroundColor, padding, margin, 
    borderColor, boxBorderColor, boxBorderStroke, 
    textColor, titleTextColor, fontFamily, fontSize  
} from './theme';

export const ThemeContainer = styled.div`
    * {
        --background-color: ${backgroundColor};
        --padding: ${padding};
        --margin: ${margin};
        --border-color: ${borderColor};
        --box-border-color: ${boxBorderColor};
        --box-border-stroke: ${boxBorderStroke};
        --text-color: ${textColor};
        --title-text-color: ${titleTextColor};
        --font-familty: ${fontFamily};
        --font-size: ${fontSize};
    }
`;  

const StyledComponentsThemeProvider = ({ mode = 'default', children, style }) => {
    return (
        <ThemeProvider theme={{ mode, palette }}>
            <ThemeContainer style={style}>
                {children}
            </ThemeContainer>
        </ThemeProvider>
    );
  };

  StyledComponentsThemeProvider.propTypes = {
    mode: PropTypes.string
};

export default StyledComponentsThemeProvider;