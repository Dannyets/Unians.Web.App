import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NoResultSuggestion, SuggestionsContainer, styles } from './Suggestions.styles';

import { Collapse, withStyles } from '@material-ui/core';
import Suggestion from '../suggestion';

/**
 * @render react
 * @name Suggestions
 * @description Suggestions for input.
 * @example
 * <Suggestions suggestions={[
 *  { name: 'Display name 1', value: 0 },
 *  { name: 'Display name 2', value: 1 },
 *  { name: 'Display name 3', value: 2 },
 * ]}/>
 */
class Suggestions extends Component{
    render(){
        const { suggestions, onChange, show, classes } = this.props;

        const suggestionsAvailable = suggestions && suggestions.length > 0;

        return (
            <Collapse className={classes.collapse} in={show}>
                <SuggestionsContainer>
                    {suggestionsAvailable && suggestions.map((suggestion, index) => (
                            <Suggestion key={index} 
                                        suggestion={suggestion}
                                        onSelect={onChange}/>
                    ))}
                    {!suggestionsAvailable && 
                    <NoResultSuggestion>
                        No results.
                    </NoResultSuggestion>}
                </SuggestionsContainer>
            </Collapse>
        );
    }
}

Suggestions.propTypes = {
    /**
     * @property {string} suggestions available suggestions to select from
     */
    suggestions: PropTypes.array
  }

export default withStyles(styles)(Suggestions);
