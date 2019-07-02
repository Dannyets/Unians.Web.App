import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer } from './Card.styles';
import { Text } from '../../text';
import { StyledComponentsThemeProvider } from '../../../root/theme-provider';

const Card = ({ card, onSelect, showVertical }) => {
    const { id, name, selected } = card;
    const mode = selected ? 'selected' : 'default';

    return (
        <StyledComponentsThemeProvider mode={mode}>
            <CardContainer
                showVertical={showVertical}
                onClick={() => onSelect(id)}>
                    <Text>{name}</Text>
            </CardContainer>
        </StyledComponentsThemeProvider>
    )
}

Card.propTypes = {
    card: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
        selected: PropTypes.bool
    }),
    onSelect: PropTypes.func
}

export default Card;
