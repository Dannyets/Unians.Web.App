import styled from 'styled-components';
import { CenteredRow } from '../layout';
import Input from '../Input';
import { Text } from '../text';

export const IconsContainer = styled(CenteredRow)`
    flex-display: inline-flex;
    width: 100px;
    border: 1px solid var(--border-color);
    ${props => props.collapsible && 'border-left: 0'}
`;

export const StyledInput = styled(Input)`
    ${props => props.collapsible && 'border-right: 0'}
    width: 100%;
`;

export const NoResults = styled(Text)`
    padding: var(--padding);
    justify-content: start;
`;