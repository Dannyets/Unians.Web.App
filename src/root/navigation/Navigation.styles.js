import styled from 'styled-components';

const HOVER_COLOR = 'rgb(25, 118, 210)';
const ACTIVE_COLOR = 'white';
const TEXT_COLOR = 'rgba(255, 255, 255, 0.4)';

export const NavigationContainer = styled.nav`

`;

export const List = styled.ul`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 37px;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 0 10px;
`;

export const ListItem = styled.li`
    font-weight: 400;
    padding: 7px 10px;
    font-size: 14px;
    -webkit-transition: background .300s ease;
    transition: background .300s ease;
    border-radius: 3px;
    color: ${props => props.isActive ? ACTIVE_COLOR : TEXT_COLOR};

    &:hover {
        background: ${HOVER_COLOR};
        cursor: pointer;
    }
`;