import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (config) => (state, ownProps) => {
    const { selectors: configSelectors,
            selectorArgs: configSelectorsArgs,
            formatSelectors } = config;

    let selectors = {};

    for(const key in configSelectors) {
        if(configSelectors.hasOwnProperty(key)) {
          const selectorFn = configSelectors[key];
          let args = configSelectorsArgs ? configSelectorsArgs[key] : [];
          const formatter = formatSelectors ? formatSelectors[key] : null;

          args = args ? args.map(arg => ownProps[arg]) : [];
          const selectorValue = selectorFn(state, ...args);
          selectors[key] = formatter ? formatter(selectorValue) : selectorValue;
        }
    }

    return selectors;
}

const mapDispatchToProps = (config) => (dispatch) => {
  const { actions } = config;

  return {
    actions: bindActionCreators(
      { ...actions },
      dispatch
    )
  };
}

/**
 * @render react
 * @name Redux container
 * @description Connects component to store.
 * @example
 * ReduxContainer({
 *  selectors: {
 *      selectorName: (state) => { return state.propName }
 *  },
 *  actions: {
 *      actionToDispatch: (dispatch) => {  }
 *  }
 * }, connect)(OtherComponent);
 */
const ReduxContainer = (config) => {
  return (Component) =>  {
    class HighOrderComponent extends React.Component {
      render () {
        return (
          <Component {...this.props} />
        );
      }
    }

    return connect(
      mapStateToProps(config),
      mapDispatchToProps(config)
    )(HighOrderComponent);
  };
};

export default ReduxContainer;

