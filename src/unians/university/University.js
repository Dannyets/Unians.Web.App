import React from 'react';
import { withRouter } from 'react-router-dom';

import { getUniversities as getUniversitiesSelector, getSelectedUniversityId } from '../Unians.selectors';
import { getUniversities, selectUniversity, addUniversity } from './University.actions';

import { CardsSuggestionInput, ReduxContainer } from '../../components';
import { AddNew } from '../add';
import { ModalStateComponent } from '../modal-state-component';

import { PageContainer, MainContent } from '../Unians.styles';

class University extends ModalStateComponent {
  async componentDidMount(){
    const { actions } = this.props;
    const { getUniversities } = actions;

    await getUniversities();
  }

  handleUniversitySelect = (universityId) => {
    const { history, actions } = this.props;
    const { selectUniversity } = actions;

    selectUniversity(universityId);

    history.push(`/${universityId}`);
  }

  render() {
    const { universities, selectedUniverstyId, actions } = this.props;
    const { showAddModal } = this.state;
    const { addUniversity } = actions;

    return (
      <PageContainer>
          <MainContent>
            <CardsSuggestionInput 
                placeholder="Enter university name to filter"
                cards={universities}
                onSelect={this.handleUniversitySelect}
                selection={selectedUniverstyId}
                onAdd={this.toggleShowAddModal}/>
            <AddNew 
              show={showAddModal}
              entityName="University"
              entityShape={{
                name: {
                  type: 'text'
                }
              }}
              onAdd={addUniversity}
              onClose={this.toggleShowAddModal}/>
          </MainContent>
      </PageContainer>
    );
  }
}

export default ReduxContainer({
  selectors: {
    universities: getUniversitiesSelector,
    selectedUniverstyId: getSelectedUniversityId
  },
  actions: {
    getUniversities,
    selectUniversity,
    addUniversity
  }
})(withRouter(University));

