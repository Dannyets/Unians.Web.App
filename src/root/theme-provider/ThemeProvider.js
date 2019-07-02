import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import StyledComponentsThemeProvider from './StyledComponentsThemeProvider';

const materialUiTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
});

/**
 * @render react
 * @name ThemeProvider
 * @description Provides a theme to the child components
 * @example
 * <ThemeProvider>
 *      <div/>
 * </ThemeProvider>
 */
function ThemeProvider(props){
    return (
        <MuiThemeProvider theme={materialUiTheme}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <StyledComponentsThemeProvider style={{ width: '100%', height: '100%'}}>
                    {props.children}
                </StyledComponentsThemeProvider>
            </MuiPickersUtilsProvider>
        </MuiThemeProvider>
    );
}


ThemeProvider.propTypes = {
    
};

export default ThemeProvider;
