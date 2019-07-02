import styled from 'styled-components';
import chroma from 'chroma-js';
import { CenteredRow } from '../../layout';
import { Text } from '../../text';

export const CardGroupsContainer = styled(CenteredRow)`
    align-items: start;

    @media (max-width: 950px) {
        flex-wrap: wrap;
    }
`;

export const GroupContainer = styled.div`
    margin: var(--margin, 20px) 0;
    margin-right: ${props => props.shouldMarginRight ? 'var(--margin, 20px)' : '0'};
`;

export const GroupHeadSection = styled(CenteredRow)`
    padding: 10px 0;
    cursor: pointer;
    background-color: ${(props) => getColorForLevel(props.theme.palette.forth, props.level)};
    border: 1px solid var(--border-color)
`;

export const GroupName = styled(Text)`
    background-color: ${(props) => getColorForLevel(props.theme.palette.forth, props.level)};
    color: var(--background-color);
`;

function getColorForLevel(color, level){
    let newColor = chroma(color);

    for (let index = 0; index < level; index++) {
        newColor = newColor.darken();
    }

    return newColor.hex().toString();
}
