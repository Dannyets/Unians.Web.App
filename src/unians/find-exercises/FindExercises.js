import React from 'react';

import { 
    getSelectedUniversityId, 
    getSelectedFacultyId, 
    getSelectedCourseId 
} from '../Unians.selectors';

import { 
    getUniversity, 
    getFaculty, 
    getCourse,
    getSemesters 
} from '../exercise/Exercise.selectors';

import { getExercisesForCourseAndSemesters } from '../exercise/Exercise.actions'

import { ReduxContainer } from '../../components';
import { SelectExercise } from '../exercise';

import { PageContainer, SemesterSection, Section, MainContent } from './FindExercises.styles';
import { StyledIconTitle } from '../Unians.styles';

class FindExercises extends React.Component {
    async componentDidMount(){
        const { actions, selectedUniverstyId, selectedFacultyId, selectedCourseId } = this.props;
        const { getExercisesForCourseAndSemesters } = actions;
    
        await getExercisesForCourseAndSemesters(selectedUniverstyId, selectedFacultyId, selectedCourseId, []);
      }

    getTitle = () => {
        const { university, faculty, course } = this.props;

        const { name: universityName } = university || {};

        const { name: facultyName } = faculty || {};

        const { name: courseName } = course || {};

        return `${universityName} / ${facultyName} / ${courseName}`;
    }

    handleBackClick = () => {
        const { history, university, faculty } = this.props;
        const { id: universityId } = university;
        const { id: facultyId } = faculty;
        
        history.push(`/${universityId}/${facultyId}`);
    }

    render(){
        const { semesters } = this.props;
        const shouldShowExercises =  semesters.length > 0;

        return (
            <PageContainer>
                    <StyledIconTitle
                        iconName="ArrowBackIos"
                        iconTitle="Go Back" 
                        title={this.getTitle()}
                        onIconClick={this.handleBackClick}
                        iconPosition="left"/>
                <MainContent>
                    <SemesterSection/>
                    {shouldShowExercises && 
                    <Section>
                        <SelectExercise/>
                    </Section>}
                </MainContent>
            </PageContainer>
        );
    }
}

export default ReduxContainer({
    selectors: {
      selectedUniverstyId: getSelectedUniversityId, 
      selectedFacultyId: getSelectedFacultyId, 
      selectedCourseId: getSelectedCourseId,
      university: getUniversity, 
      faculty: getFaculty, 
      course: getCourse,
      semesters: getSemesters, 
    },
    actions: {
        getExercisesForCourseAndSemesters
    }
  })(FindExercises);
  