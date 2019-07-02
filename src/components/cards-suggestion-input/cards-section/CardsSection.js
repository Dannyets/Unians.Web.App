import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';
import { CardsSectionContainer, CardsSectionName, CardsContainer } from './CardsSection.styles';

const CardsSection = ({ cards, sectionName, onSelect }) => {    
    let section = (
        <CardsContainer>
            {cards.map((c, index) => (
                <Card key={index} 
                      card={c}
                      onSelect={onSelect}/>
            ))}
        </CardsContainer>
    );

    if(sectionName){
        section = (
            <CardsSectionContainer>
                <CardsSectionName>{sectionName}</CardsSectionName>
                {section}
            </CardsSectionContainer>
        )
    }

    return section;
}

CardsSection.propTypes = {
    cards: PropTypes.array,
    sectionName: PropTypes.string,
    onSelect: PropTypes.func
};

export default CardsSection;