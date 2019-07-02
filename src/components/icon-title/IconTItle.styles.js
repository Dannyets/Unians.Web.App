import styled from 'styled-components';
import { Text } from '../text';

export const TitleContainer = styled.div`
    margin: var(--margin) 0;
`;

export const TitleIcon = styled.div`
    float: ${props => props.position || 'left'};
`;

export const TitleValue = styled(Text)`
    height: 100%;
    --text-color: var(--title-text-color);
`;