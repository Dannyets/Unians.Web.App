import React from 'react';
import PropTypes from 'prop-types';

import { 
    Input, 
    AutoSuggestInput, 
    CenteredRow,  
    IconTitle    
} from '../../components';

import { ModalContainer, FormContainer, StyledButton } from './AddNew.styles';

/**
 * @render react
 * @name Input
 * @description Input.
 * @example
 * <AddNew 
 *  entityName="University" 
 *  placeholder={{
 *   'name': {
 *       type: 'text'
 *   },
 *   'universityId': {
 *           type: 'number',
 *           suggestions: [{ id: 1, label: 'Technion' }]
 *   }
 *  }}
 *  onAdd={async () => { console.log('Make a request to server to add entity') }}/>
 */
class AddNew extends React.Component {
    constructor(props){
        super(props);
        
        const { entityName, entityShape } = props;

        let entity = {};

        Object.keys(entityShape)
              .filter(prop => Array.isArray(entityShape[prop]))
              .forEach(prop => {
                  entity[prop] = entityShape[prop];
              });

        this.state = {
            [entityName]: entity    
        };
    }

    handlePropChanged = (entityPropName, value, suggestion) => {
        const { entityName, entityShape } = this.props;

        const { relatedProp } = entityShape[entityPropName] || {}

        let entity = {
            ...this.state[entityName],
            [entityPropName]: value
        };

        if(relatedProp && suggestion){
            entity[relatedProp] = suggestion[relatedProp];
        }

        this.setState({ [entityName]: entity });
    }

    handleOnClick = async () => {
        const { entityName, onAdd, onClose } = this.props;
        const entity = this.state[entityName];

        await onAdd(entity);

        onClose();
    }

    isButtonDisabled = () => {
        const { entityName, entityShape } = this.props;
        const entity = this.state[entityName];

        return Object.keys(entityShape)
                     .some(entityProp => typeof(entity[entityProp]) === 'undefined');
    }
    
    render(){
        const { show, entityName, entityShape, onClose } = this.props;
        const isButtonDisabled = this.isButtonDisabled();

        return (
            <ModalContainer 
                show={show}
                onClick={onClose}>
                <FormContainer onClick={(e) => e.stopPropagation()}>
                    <IconTitle
                        iconName="Close"
                        iconTitle="Close" 
                        title={entityName}
                        onIconClick={onClose}
                        iconPosition="right"/>
                    {Object.keys(entityShape).map((entityProp, index) => {
                        const propSettings = entityShape[entityProp];

                        if(Array.isArray(propSettings)){
                            return null;
                        }

                        const { suggestions, type } = propSettings || {};
                        const entity = this.state[entityName]; 
                        const value = entity[entityProp];

                        const inputProps = {
                            value,
                            placeholder: `Please enter ${entityProp.splitByUpperCase()}`,
                            onChange: (value, suggestion) => this.handlePropChanged(entityProp, value, suggestion),
                            type,
                            suggestions,
                            mustChooseFromSuggestions: false
                        };

                        let InputComponent = suggestions ? AutoSuggestInput : Input;
                        
                        return (
                            <CenteredRow key={index}>
                                <InputComponent {...inputProps}/>
                            </CenteredRow>
                        );
                    })}
                    <CenteredRow>
                        <StyledButton 
                            text="Save" 
                            iconName="Save"
                            onClick={this.handleOnClick}
                            disabled={isButtonDisabled}/>
                    </CenteredRow>
                </FormContainer>
            </ModalContainer>
        );
    }
}

AddNew.propTypes = {
    entityName: PropTypes.string.isRequired,
    entityShape: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

export default AddNew;