import styled from 'styled-components';
import { CenteredRow } from '../../layout';

export const CardsSectionContainer = styled.div`
    margin: 20px 0;
`;

export const CardsSectionName = styled.div`
    color: rgba(255,255,255,0.30);
`;

export const CardsContainer = styled(CenteredRow)`
    width: 100%;
    height: 100%;
    padding: 10px 0;
    flex-flow: row wrap;
`;