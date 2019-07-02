import styled from 'styled-components';
import { CenteredRow, Column, CenteredColumn, IconTitle } from '../components';

export const AppContainer = styled(CenteredRow)`
    width: 100%;
    height: 90%;
`;

export const PageContainer = styled(CenteredColumn)`
    width: 100%;
    height: 100%;
`;

export const MainContent = styled(Column)`
    width: 90%;
    height: 90%;
    justify-content: space-around;
`;

export const StyledIconTitle = styled(IconTitle)`
    width: 90%;
`;