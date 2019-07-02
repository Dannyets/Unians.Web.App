import React, { Component } from 'react';

class ModalStateComponent extends Component {
  state = {
    showAddModal: false
  }
  
  toggleShowAddModal = () => {
    this.setState((state) => ({ showAddModal: !state.showAddModal }));
  }

  render() {
    return null;
  }
}

export default ModalStateComponent;

