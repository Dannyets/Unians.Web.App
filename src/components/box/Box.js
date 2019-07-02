import styled from 'styled-components';
import chroma from 'chroma-js';

export const Box = styled.div`
    padding: var(--padding);
    margin: var(--margin);
    border: var(--box-border-storke, 1px) solid var(--box-border-color);
    transition: all .4s ease-in-out;
    background-color: var(--background-color);

    &:hover {
        transform: scale(1.1);
        background-color: ${props => getAlpah(props.theme.palette.forth)}
        --text-color: var(--text-color);
    }
`;

export const CenteredBox = styled(Box)`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    align-items: center;
    justify-content: center;
`;

export function getAlpah(color){
    const chromaColor = chroma(color);

    const newColor = chromaColor.alpha(0.7).hex();

    return newColor;
}