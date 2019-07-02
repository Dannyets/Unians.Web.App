import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../text';
import Icon from '../icon'
import { CenteredButton } from './Button.styles';

class Button extends React.Component {
    state = {
        isBusy: false
    }

    handleOnClick = async () => {
        const { onClick } = this.props;

        if(!onClick){
            return;
        }

        this.setState({ isBusy : true });

        await onClick();

        this.setState({ isBusy : false });
    }
    
    render(){
        const { text, iconName, disabled } = this.props;

        return (
            <CenteredButton 
                onClick={this.handleOnClick}
                direction="row"
                disabled={disabled}>
                    {iconName && <Icon iconName={iconName}/>}
                    <Text>{text}</Text>
            </CenteredButton>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string,
    iconName: PropTypes.string
};

export default Button;