import styled from 'styled-components';

export const SuggestionContainer = styled.div`
    padding: 20px;
    background-color: var(--background-color);

    &:hover {
        background-color: ${props => props.theme.palette.forth}
    }
`;