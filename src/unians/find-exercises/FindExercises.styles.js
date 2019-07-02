import styled from 'styled-components';
import Semester from '../semester';
import { Column, CenteredColumn } from '../../components';

export const PageContainer = styled(CenteredColumn)`
    width: 100%;
    height: 100%;
    justify-content: start;
`;

export const SemesterSection = styled(Semester)`
    width: 100%;
    padding: 10px 0;
`;

export const Section = styled(Column)`
    width: 100%;
    justify-content: start;
    overflow: unset;
    margin-top: var(--margin);
`;

export const MainContent = styled(Column)`
    width: 90%;
    justify-content: space-around;
    margin: var(--margin) 0;
`;