import React, { Component } from 'react';

import { 
  getExercises as getExercisesSelector, 
  getSelectedUniversityId,
  getSelectedFacultyId,
  getSelectedSemesterIds, 
  getSelectedCourseId,
  getSelectedExerciseIds
} from '../../Unians.selectors';

import { getExercisesForCourseAndSemesters, resetExercises, selectExercise } from '../Exercise.actions';

import { CardsSuggestionInput, ReduxContainer } from '../../../components';

class SelectExercise extends Component {
  async componentDidMount(){
    await this.updateOrReset();
  }

  async componentDidUpdate(prevProps){
    await this.updateExercises(prevProps);
  }

  componentWillUnmount(){
    const { actions } = this.props;
    const { resetExercises } = actions;

    resetExercises();      
  }

  updateExercises = async (prevProps) => {
    const { selectedSemesterIds: prevSelectedSemesterIds } = prevProps;
    const { selectedSemesterIds } = this.props

    if(selectedSemesterIds.length !== prevSelectedSemesterIds.length){
      await this.updateOrReset();
    }
  }

  updateOrReset = async () => {
    const { actions, selectedUniversityId, selectedFacultyId, selectedCourseId, selectedSemesterIds, exercises } = this.props;
    const { getExercisesForCourseAndSemesters, resetExercises } = actions;

    if(selectedSemesterIds.length === 0) {
      if(exercises.length > 0){
          resetExercises();      
        }
      } else {
        await getExercisesForCourseAndSemesters(selectedUniversityId, selectedFacultyId, selectedCourseId, selectedSemesterIds);
      }
  }

  handleSelectExercise = (exerciseId) => {
    const { actions } = this.props;
    const { selectExercise } = actions;

    selectExercise(exerciseId);
  }

  render() {
    const { exercises, selectedExerciseIds } = this.props;

    return (
      <CardsSuggestionInput 
            placeholder="Enter exercise name / id to filter"
            cards={exercises}
            multipleSelect={true}
            selection={selectedExerciseIds}
            onSelect={this.handleSelectExercise}/>
    );
  }
}

export default ReduxContainer({
  selectors: {
    exercises: getExercisesSelector,
    selectedUniversityId: getSelectedUniversityId,
    selectedFacultyId: getSelectedFacultyId,
    selectedCourseId: getSelectedCourseId,
    selectedSemesterIds: getSelectedSemesterIds,
    selectedExerciseIds: getSelectedExerciseIds
  },
  actions: {
    getExercisesForCourseAndSemesters,
    resetExercises,
    selectExercise
  }
})(SelectExercise);