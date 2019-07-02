import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import CardsSection from '../cards-section';
import { Collapse } from '@material-ui/core';
import { CardGroupsContainer, GroupContainer, GroupHeadSection, GroupName } from './CardsGroup.styles';

class CardsGroup extends React.Component {
    state = {
        showGroupCards: {}
    }

    toggleShowCards = (groupKey, newValue) => {
        this.setState((state) => ({ 
            showGroupCards: {
                ...state.showGroupCards,
                [groupKey]: newValue
            } 
        }));
    }

    render(){
        const { cards, onSelect, groupBy, level, showVertical } = this.props;
        const { showGroupCards } = this.state;

        if(!groupBy){
            return (
                <CardsSection cards={cards} 
                              onSelect={onSelect}
                              showVertical={showVertical}/>
            );
        }
    
        const { keySelector, displayNameSelector, groupBy: subGroupBy } = groupBy;
    
        const cardsGroups = cards.groupBy(keySelector, displayNameSelector);
        const cardsGroupsCount = Object.keys(cardsGroups).length;
        const isOnlyGroup = cardsGroupsCount === 1;

        return (
            <CardGroupsContainer>
                {Object.values(cardsGroups).map(({ groupKey, groupName, groupValues }, index) => {
                    const shouldShowCards = showGroupCards[groupKey];
                    const showCards = shouldShowCards || typeof(shouldShowCards) === 'undefined';
                    const isLastGroup = index + 1 === cardsGroupsCount;

                    return (
                    <GroupContainer 
                        key={groupKey}
                        level={level} 
                        shouldMarginRight={!isOnlyGroup && !isLastGroup}>
                        <GroupHeadSection 
                            level={level} 
                            onClick={() => this.toggleShowCards(groupKey, !showCards)}>
                            <GroupName level={level}>
                                {groupName}
                            </GroupName>
                        </GroupHeadSection>
                        <Fragment>
                            <Collapse in={showCards}>
                                <CardsGroup 
                                    cards={groupValues}
                                    groupBy={subGroupBy}
                                    onSelect={onSelect}
                                    level={level + 1}/>
                            </Collapse>
                        </Fragment>
                    </GroupContainer>
                )})}
            </CardGroupsContainer>
        );
    }
}

CardsGroup.propTypes = {
    cards: PropTypes.array,
    onSelect: PropTypes.func,
    groupBy: PropTypes.object,
    level: PropTypes.number
}

export default CardsGroup;