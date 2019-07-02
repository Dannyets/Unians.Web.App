import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Suggestions from '../suggestions';
import Input from '../input';
import Icon from '../icon';
import { InputWrapper, InputRow, RefreshButtonContainer } from './AutoSuggestInput.styles';

/**
 * @render react
 * @name Input
 * @description Input with auto suggestion.
 * @example
 * <AutoSuggestInput 
 *  value={0} 
 *  suggestions={[
 *    { label: 'Display name 1', value: 0 },
 *    { label: 'Display name 2', value: 1 },
 *    { label: 'Display name 3', value: 2 },
 *  ]}
 *  placeholder="Placeholder"
 *  loadSuggestions={() => { }}
 *  />
 */
class AutoSuggestInput extends Component{
    state = {
        value: undefined,
        showSuggestionsMenu: false,
        labelToSuggestion: {}
    }

    defaultProps = {
        mustChooseFromSuggestions: true
    }

    async componentDidMount(){
        const { loadSuggestions, suggestions, value } = this.props;

        if(loadSuggestions) {
            await loadSuggestions();
        }

        if(suggestions){
            const valueToSuggestion = this.mapSuggestions(suggestions);   
            const initialSuggestion = typeof(value) !== 'undefined' 
            ? valueToSuggestion[value] 
            : undefined;

            this.setState({ value: initialSuggestion });
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.suggestions !== this.props.suggestions){
            this.mapSuggestions(this.props.suggestions);
        }
    }

    handleValueSelected = (suggestion) => {
        const { value } = suggestion || {};

        this.setState({ showSuggestionsMenu: false });

        setTimeout(() => {
            this.setState({ value: suggestion });
        }, 100);

        const { onChange } = this.props;

        if(!onChange){
            return;
        }

        onChange(value, suggestion);
    }

    handleValueChanged = (label) => {
        const { labelToSuggestion } = this.state;

        const suggestion = labelToSuggestion[label] || { label };

        this.setState({ value: suggestion, showSuggestionsMenu: true });

        const { onChange, mustChooseFromSuggestions } = this.props;

        if(!onChange || mustChooseFromSuggestions){
            return;
        }

        onChange(label);
    }

    getFilteredSuggestions = () => {
        const { suggestions } = this.props;
        const { value: suggestion } = this.state;

        if(!suggestion){
            return suggestions;
        }
        
        const { label } = suggestion;

        if(!label){
            return suggestions;
        }

        return suggestions.filter(s => s.label.toLowerCase().includes(label.toLowerCase()));
    }

    mapSuggestions = (suggestions) => {
        let labelToSuggestion = {};
        let valueToSuggestion = {};

        suggestions.forEach(s => {
            const { label, value } = s;
            labelToSuggestion[label] = s;
            valueToSuggestion[value] = s;
        });

        this.setState({ labelToSuggestion, valueToSuggestion });

        return {
            labelToSuggestion,
            valueToSuggestion
        };
    }

    handleOnBlur = () => {
        setTimeout(() => {
            this.setState({ showSuggestionsMenu: false });
        }, 200);

        setTimeout(this.clearSelection, 300);
    }

    render(){
        const { type, placeholder, loadSuggestions, className } = this.props;
        const { value, showSuggestionsMenu } = this.state;
        const { label } = value || {};
        const suggestions = this.getFilteredSuggestions();

        return (
            <InputWrapper className={className}>
                <InputRow>
                    <Input placeholder={placeholder}
                                        type={type}
                                        value={label}
                                        onChange={this.handleValueChanged}
                                        onFocus={() => this.setState({ showSuggestionsMenu: true })}
                                        onBlur={this.handleOnBlur}/>

                    {loadSuggestions && 
                    <RefreshButtonContainer>
                        <Icon title="Refresh Suggestions"
                            iconName="Refresh" 
                            onClick={loadSuggestions}/>
                    </RefreshButtonContainer>}
                </InputRow>
                <Suggestions show={showSuggestionsMenu}
                            suggestions={suggestions}
                            onChange={this.handleValueSelected}/>
            </InputWrapper>
        );
    }
}

AutoSuggestInput.propTypes = {
    /**
     * @property {array} suggestions available suggestions to select from
     */
    suggestions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        })
    ),
  
    /**
     * @property {string} value current value of input
     */
    value: PropTypes.string,

    mustChooseFromSuggestions: PropTypes.bool
  }

export default AutoSuggestInput;
