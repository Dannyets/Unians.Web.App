import React from 'react';
import { withRouter } from 'react-router-dom';

import { getUniversities as getUniversitiesSelector, 
    getFaculties as getFacultiesSelector,
    getSelectedUniversityId,
    getSelectedFacultyId } from '../Unians.selectors';

import { getFacultiesForUniversity, selectFaculty, addFaculty } from './Faculty.actions';

import { CardsSuggestionInput, ReduxContainer } from '../../components';
import { AddNew } from '../add';
import { ModalStateComponent } from '../modal-state-component';

import { PageContainer, MainContent, StyledIconTitle } from '../Unians.styles';

class Faculty extends ModalStateComponent {
  async componentDidMount(){
    const { actions, selectedUniverstyId } = this.props;
    const { getFacultiesForUniversity } = actions;

    await getFacultiesForUniversity(selectedUniverstyId);
  }

  async componentDidUpdate(prevProps){
    await this.updateFaculties(prevProps);
  }

  updateFaculties = async (prevProps) => {
    const { selectedUniverstyId: prevSelectedUniversityId } = prevProps;
    const { selectedUniverstyId, actions } = this.props
    const { getFacultiesForUniversity } = actions;

    if(selectedUniverstyId && selectedUniverstyId !== prevSelectedUniversityId){
      await getFacultiesForUniversity(selectedUniverstyId);
    }
  }

  handleFacultySelect = (facultyId) => {
    const { history, actions, selectedUniverstyId } = this.props;
    const { selectFaculty } = actions;
    
    selectFaculty(facultyId);

    history.push(`/${selectedUniverstyId}/${facultyId}`);
  }

  getTitle = () => {
      const { universities, selectedUniverstyId } = this.props;

      const university = universities.filter(u => u.id === selectedUniverstyId)[0];
      const { name } = university || {};

      return name;
  }

  handleBackClick = () => {
      const { history } = this.props;

      history.push('/');
  }

  render() {
    const { faculties, selectedFacultyId, selectedUniverstyId, actions } = this.props;
    const { addFaculty } = actions;
    const { showAddModal } = this.state;

    return (
        <PageContainer>
            <StyledIconTitle
              iconName="ArrowBackIos"
              iconTitle="Go Back" 
              title={this.getTitle()}
              onIconClick={this.handleBackClick}
              iconPosition="left"/>
            <MainContent>
                <CardsSuggestionInput 
                    placeholder="Enter faculty name to filter"
                    cards={faculties}
                    onSelect={this.handleFacultySelect}
                    selection={selectedFacultyId}
                    onAdd={this.toggleShowAddModal}/>
                <AddNew 
                  show={showAddModal}
                  entityName="Faculty"
                  entityShape={{
                    name: {
                      type: 'text'
                    },
                    universityFaculties: [{
                      universityId: selectedUniverstyId
                    }]
                  }}
                  onAdd={addFaculty}
                  onClose={this.toggleShowAddModal}/>
            </MainContent>
        </PageContainer>
    );
  }
}

export default ReduxContainer({
  selectors: {
    universities: getUniversitiesSelector,
    faculties: getFacultiesSelector,
    selectedUniverstyId: getSelectedUniversityId,
    selectedFacultyId: getSelectedFacultyId,
  },
  actions: {
    selectFaculty,
    getFacultiesForUniversity,
    addFaculty
  }
})(withRouter(Faculty));

