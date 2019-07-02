import React, { Component } from "react";

const asyncComponent = (importComponent, beforeLoadAction, afterLoadAction) => (
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      if(beforeLoadAction){
        beforeLoadAction();
      }

      const { default: component } = await importComponent();

      this.setState({
        component: component
      });

      if(afterLoadAction){
        afterLoadAction();
      }
    }

    render() {
      const { component: Component } = this.state;

      return Component ? <Component {...this.props} /> : null;
    }
  }
);

export default asyncComponent;