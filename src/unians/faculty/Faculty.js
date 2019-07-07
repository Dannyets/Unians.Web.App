import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {
  getUniversity,
  getSelectedFacultyId,
  getFaculties as getFacultiesSelector,
} from './Faculties.selectors';

import { getSelectedUniversityId } from '../University';

import { 
  getFacultiesForUniversity, 
  selectFaculty, 
  addFaculty 
} from './Faculty.actions';

import { CardsSuggestionInput, ReduxContainer } from '../../components';
import { AddNew } from '../add';

import { 
  PageContainer, 
  MainContent, 
  StyledIconTitle 
} from '../Unians.styles';

class Faculty extends Component {
  state = {
    showAddModal: false
  }

  async componentDidMount(){
    await this.getFaculties();
  }

  async componentDidUpdate(prevProps){
    if(this.shouldGetFaculties(prevProps)){
      await this.getFaculties();
    }
  }

  toggleShowAddModal = () => {
    this.setState((state) => ({ showAddModal: !state.showAddModal }));
  }

  shouldGetFaculties = (prevProps) => {
    if(!prevProps){
      return true;
    }

    const { selectedUniverstyId: prevSelectedUniversityId } = prevProps;
    const { selectedUniverstyId } = this.props

    if(selectedUniverstyId && selectedUniverstyId !== prevSelectedUniversityId){
      return true;
    }

    return false;
  }

  getFaculties = async () => {
    const { selectedUniverstyId, actions } = this.props
    const { getFacultiesForUniversity } = actions;

    await getFacultiesForUniversity(selectedUniverstyId);
  }

  handleFacultySelect = (facultyId) => {
    const { history, actions, university } = this.props;
    const { selectFaculty } = actions;
    const { id: universityId } = university;
    
    selectFaculty(facultyId);

    history.push(`/${universityId}/${facultyId}`);
  }

  getTitle = () => {
      const { university } = this.props;

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
    university: getUniversity,
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

