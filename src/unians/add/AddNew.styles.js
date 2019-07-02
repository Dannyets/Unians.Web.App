import styled from 'styled-components';

import { 
    Button,
    CenteredColumn,
    Column,
} from '../../components';

export const StyledButton = styled(Button)`
    width: 100%;
`;

export const ModalContainer = styled(CenteredColumn)`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: ${props => props.show ? 1000 : -1};
    background-color: rgba(0, 0, 0, 0.2);
    transition: all ease 0.3s;
    opacity: ${props => props.show ? 1 :0};
`;

export const FormContainer = styled(Column)`
    height: 70%;
    width: 30%;
    background-color: var(--background-color);
    padding: var(--padding);
    justify-content: space-between;
    border: 1px solid var(--border-color);
`;