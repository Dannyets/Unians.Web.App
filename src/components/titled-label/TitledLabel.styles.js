import styled from 'styled-components';

export const TitledLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;

export const Title = styled.span`
    font-size: small;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    line-height: 1em;
    transform: translate(0, 1.5px) scale(0.75);
    transform-origin: top left;
`;

export const Label = styled.p`
    margin: 0;
    color: ${props => props.error ? 'rgb(236, 81, 72)' : 'white'};
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    line-height: 1.1875em;
`;
