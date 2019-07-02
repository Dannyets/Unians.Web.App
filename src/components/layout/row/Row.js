import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;

    // * + * {
    //     margin-right: var(--margin);
    // }
`;

export const CenteredRow = styled(Row)`
    align-items: center;
`;