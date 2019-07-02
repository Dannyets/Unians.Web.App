import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { Tooltip } from '@material-ui/core'

/**
 * @render react
 * @name Icon
 * @description Clickable icon
 * @example
 * <Icon iconName="Refresh" 
 *       onClick={() => { console.log('Refreshing') }}
 *       title="Refresh"
 *       tooltipPlacement="right"/>
 */
class Icon extends Component{
    state = {
        icon: null
    };

    static defaultProps = { 
        tooltipPlacement: 'top',
    }
    
    async componentDidMount(){
        const { iconName } = this.props;
        const icon = Icons[iconName];
        this.setState({ icon });
    }
    
    render(){
        const { onClick, title, tooltipPlacement } = this.props;
        const { icon: ChoosenIcon } = this.state;

        const icon = (ChoosenIcon ? <ChoosenIcon style={{ fill: 'var(--border-color)' }}/> : null);

        let component = icon;
        
        if(onClick){
            component = (
                <IconButton 
                    onClick={onClick}>
                    {component}
                </IconButton>
            );
        }

        if(title){
            component = (
                <Tooltip 
                    title={title} 
                    placement={tooltipPlacement}>
                        {component}
                </Tooltip>
            );
        }

        return component;
    }
}

Icon.propTypes = {
    /**
     * @property {string} iconName Name of icon to fetch from material-ui icons
     */
    iconName: PropTypes.string,

    /**
     * @property {string} onClick Callback that fires after clicking on icon
     */
    onClick: PropTypes.func,

    /**
     * @property {string} title Title to display when hovering on icon
     */
    title: PropTypes.string,

    /**
     * @property {string} tooltipPlacement enum:
     *  'bottom-end', 'bottom-start', 'bottom', 
     *  'left-end', 'left-start', 'left', 
     *  'right-end', 'right-start', 'right', 
     *  'top-end', 'top-start', 'top'
     */
    tooltipPlacement: PropTypes.string
  }

export default Icon;
