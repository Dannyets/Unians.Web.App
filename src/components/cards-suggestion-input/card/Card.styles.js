import styled from 'styled-components';
import { CenteredBox } from '../../box'

export const CardContainer = styled(CenteredBox)`
    width: 125px;
    height: 125px;
    // margin-${props => props.showVertical ? 'bottom' : 'right'}: 20px;
    cursor: pointer;
`;

export const CardTextRow = styled.div`
    text-align: center;
`;