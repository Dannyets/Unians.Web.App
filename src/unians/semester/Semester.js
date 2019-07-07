import React, { Component } from 'react';

import { 
  getSemesters as getSemestersSelector, 
  getSelectedSemesterIds 
} from './Semester.selectors';

import { getSelectedUniversityId } from '../university';

import { 
  getSemesters, 
  selectSemester, 
} from './Semester.actions';

import { CardsSuggestionInput, ReduxContainer } from '../../components';

class Semester extends Component {
  async componentDidMount(){
    const { actions, universityId } = this.props;
    const { getSemesters } = actions;

    await getSemesters(universityId);
  }

  handleSemesterSelect = async (semesterId) => {
    const { actions } = this.props;
    const { selectSemester } = actions;

    selectSemester(semesterId);
  }

  render() {
    const { semesters, selectedSemesterIds } = this.props;

    return (
        <CardsSuggestionInput 
            placeholder="Enter semester name to filter"
            cards={semesters}
            multipleSelect={true}
            collapsible={true}
            onSelect={this.handleSemesterSelect}
            selection={selectedSemesterIds}/>
    );
  }
}

export default ReduxContainer({
  selectors: {
    semesters: getSemestersSelector,
    universityId: getSelectedUniversityId,
    selectedSemesterIds: getSelectedSemesterIds
  },
  actions: {
    getSemesters,
    selectSemester
  }
})(Semester);

