import React, { Component } from 'react';

import {
  getExercises as getExercisesSelector,
  getSelectedExerciseIds
} from '../Exercise.selectors';

import { getSelectedUniversityId } from '../../university';
import { getSelectedFacultyId } from '../../faculty';
import { getSelectedCourseId } from '../../course';
import { getSelectedSemesterIds } from '../../semester';

import { 
  getExercisesForCourseAndSemesters, 
  selectExercise 
} from '../Exercise.actions';

import { CardsSuggestionInput, ReduxContainer } from '../../../components';

class SelectExercise extends Component {
  async componentDidMount(){
      await this.getExercises();
  }

  async componentDidUpdate(prevProps){
    if(this.shouldGetExercises(prevProps)){
      await this.getExercises();
    }
  }

  shouldGetExercises = async (prevProps) => {
    if(!prevProps){
      return true;
    }

    const { semesterIds: prevSemesterIds } = prevProps;
    const { semesterIds } = this.props

    if(prevSemesterIds.length !== semesterIds.length){
      return true;
    }

    return false;
  }

  getExercises = async () => {
    const { actions, universityId, facultyId, courseId, semesterIds } = this.props;
    const { getExercisesForCourseAndSemesters } = actions;

    await getExercisesForCourseAndSemesters(universityId, facultyId, courseId, semesterIds);
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
    universityId: getSelectedUniversityId,
    facultyId: getSelectedFacultyId,
    courseId: getSelectedCourseId,
    semesterIds: getSelectedSemesterIds,
    selectedExerciseIds: getSelectedExerciseIds
  },
  actions: {
    getExercisesForCourseAndSemesters,
    selectExercise
  }
})(SelectExercise);