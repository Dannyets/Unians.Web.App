import React from 'react';
import PropTypes from 'prop-types';

import { Collapse } from '@material-ui/core';
import CardsGroup from './cards-group';
import Icon from '../Icon';
import { IconsContainer, NoResults, StyledInput } from './CardsSuggestionInput.styles';
import { Row, InLineGrid } from '../layout';

class CardsSuggestionInput extends React.Component {
    state = {
        value: '',
        showCards: true
    }

    isSelected = (id) => {
        const { selection, multipleSelect } = this.props;

        if(!multipleSelect){
            return id === selection;
        }

        return selection && selection.includes(id);
    }
    
    getFilteredCards = () => {
        const { value } = this.state;
        const { cards } = this.props;

        if(!cards){
            return [];
        }

        const lowerCaseValue = value.toLowerCase();
        const filteredCards = cards.filter(c => this.isSelected(c.id) ||
                                                c.name.toLowerCase().includes(lowerCaseValue) || 
                                                c.id.toString().toLowerCase().includes(lowerCaseValue))
                                   .map(({ id ,...card }) => ({
                                       ...card,
                                        id,
                                       selected: this.isSelected(id)
                                   }));

        return filteredCards;
    }

    handleCardSelect = (id) => {
        const { onSelect } = this.props;
        
        if(onSelect){
            onSelect(id, !this.isSelected(id));
        }
    }

    handleOnExpandClick = () => {
        this.setState((state) => ({ showCards: !state.showCards }));
    }

    render(){
        const { placeholder, groupBy, collapsible, onSelect, onAdd } = this.props;
        const { value, showCards } = this.state;

        const filteredCards = this.getFilteredCards();
        const isAnyCards = filteredCards && filteredCards.length > 0;
        const showNoResult = !isAnyCards;
        const shouldShowIcons = collapsible || onAdd;

        return (
            <InLineGrid>
                <Row>
                    <StyledInput
                        collapsible={shouldShowIcons} 
                        value={value}
                        placeholder={placeholder}
                        onChange={(value) => this.setState({ value })}
                        />
                    {shouldShowIcons && 
                    <IconsContainer collapsible={shouldShowIcons}>
                        {showCards && 
                        <Icon iconName="ExpandLess"
                            title="Hide Results"
                            onClick={this.handleOnExpandClick}
                            tooltipPlacement="top"/>}
                        
                        {!showCards && 
                        <Icon iconName="ExpandMore"
                            title="Show Results"
                            onClick={this.handleOnExpandClick}
                            tooltipPlacement="top"/>}

                        {onAdd && 
                        <Icon iconName="Add"
                            title="Add New"
                            onClick={onAdd}
                            tooltipPlacement="top"/>}
                    </IconsContainer>}
                </Row>
                <div>
                    <Collapse in={showCards && isAnyCards}>
                        <CardsGroup 
                            cards={filteredCards}
                            groupBy={groupBy}
                            onSelect={onSelect}
                            level={1}/>
                    </Collapse>
                    {showNoResult && <NoResults>No results.</NoResults>}
                </div>
            </InLineGrid>
        )
    }
}

CardsSuggestionInput.propTypes = {
    placeholder: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number
    })),
    multipleSelect: PropTypes.bool,
    groupBy: PropTypes.func,
    onResetSelection: PropTypes.func,
    onSelect: PropTypes.func,
    onAdd: PropTypes.func,
    selection: PropTypes.oneOf(PropTypes.array, PropTypes.number)
}

export default CardsSuggestionInput;