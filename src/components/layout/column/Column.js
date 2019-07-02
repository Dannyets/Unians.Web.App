import styled from 'styled-components';

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    // * + * {
    //     margin-bottom: var(--margin);
    // }
`;

export const CenteredColumn = styled(Column)`
    align-items: center;
`;