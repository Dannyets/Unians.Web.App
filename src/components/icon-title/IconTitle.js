import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon';

import { TitleContainer, TitleValue, TitleIcon } from './IconTitle.styles';

const IconTitle = ({ title, iconTitle, iconName, onIconClick, iconPosition }) => (
    <TitleContainer>
        <TitleIcon position={iconPosition}>
            <Icon title={iconTitle}
                  iconName={iconName}
                  onClick={onIconClick}/>
        </TitleIcon>
        <TitleValue>{title}</TitleValue>
    </TitleContainer>
);

IconTitle.propTypes = {
    title: PropTypes.string,
    iconTitle: PropTypes.string,
    iconName: PropTypes.string,

    /**
     * @property {string} iconPosition enum:
     *   'left', 'right'
     */
    iconPosition: PropTypes.string,

    onIconClick: PropTypes.func,
};

export default IconTitle;