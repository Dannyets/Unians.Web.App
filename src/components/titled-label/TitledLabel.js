import React from 'react';
import PropTypes from 'prop-types';
import { TitledLabelContainer, Title, Label } from './TitledLabel.styles';

/**
 * @render react
 * @name Titled label component
 * @description Label with a title on above it.
 * @example
 * <TitledLabel title="Title" label="label" error={!label}/>
 */
const TitledLabel = ({ label, title, error, renderLabel }) => (
    <TitledLabelContainer>
        <Title>{title}</Title>
        {renderLabel ? renderLabel()
                     :<Label error={error}>{label}</Label>}
    </TitledLabelContainer>
);

TitledLabel.propTypes = {
    /**
     * @property {string} label Label to display under title
     */
    label: PropTypes.string,

    /**
     * @property {string} title Title to display above label
     */
    title: PropTypes.string,

    /**
     * @property {boolean} error color the label in red if error is true
     */
    error: PropTypes.bool,

    /**
     * @property {function} renderLabel component to render in stead of label
     */
    renderLabel: PropTypes.func
};

export default TitledLabel;
