import styled from 'styled-components';

export const styles = (theme) => ({
    collapse: {
        zIndex: 2000,
    }
});

export const NoResultSuggestion = styled.div`
    padding: 20px;
`;

export const SuggestionsContainer = styled.div`
    border: 1px solid var(--border-color);
    margin-top: 5px;
`;