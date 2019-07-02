import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SuggestionContainer } from './Suggestion.styles';

/**
 * @render react
 * @name Suggestion
 * @description Input suggestion.
 * @example
 * <Suggestion suggestion={{
 *      label: 'Option One',
 *      value: 0
 * }}
 * />
 */
class Suggestion extends Component{
    render(){
        const { suggestion, children, onSelect } = this.props;
        const { label } = suggestion;

        return (
            <SuggestionContainer onClick={() => onSelect(suggestion)}>
                {label}
                {children}
            </SuggestionContainer>
        );
    }
}

Suggestion.propTypes = {
    /**
     * @property {string} suggestion option to display
     */
    suggestion: PropTypes.object
}

export default Suggestion;
