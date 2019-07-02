import React, { Component } from 'react';

import { getSemesters as getSemestersSelector ,getSelectedSemesterIds } from '../Unians.selectors';

import { getSemesters, selectSemester, resetSemesterSelection } from './Semester.actions';

import { CardsSuggestionInput, ReduxContainer } from '../../components';

class Semester extends Component {
  async componentDidMount(){
    const { actions } = this.props;
    const { getSemesters } = actions;

    await getSemesters();
  }

  handleSemesterSelect = async (semesterId) => {
    const { actions } = this.props;
    const { selectSemester } = actions;

    selectSemester(semesterId);
  }

  componentWillUnmount(){
    const { actions } = this.props;
    const { resetSemesterSelection } = actions;

    resetSemesterSelection();
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
    selectedSemesterIds: getSelectedSemesterIds,
  },
  actions: {
    getSemesters,
    selectSemester,
    resetSemesterSelection
  }
})(Semester);

