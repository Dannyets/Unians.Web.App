import React from 'react';

import { getUniversities, 
         getFaculties, 
         getCourses,
         getSelectedUniversityId,
         getSelectedFacultyId,
         getSelectedSemesterIds,
         getSelectedCourseId } from '../Unians.selectors';

import { ReduxContainer } from '../../components';
import { SelectExercise } from '../exercise';

import { PageContainer, SemesterSection, Section, MainContent } from './FindExercises.styles';
import { StyledIconTitle } from '../Unians.styles';

class FindExercises extends React.Component {
    getTitle = () => {
        const { universities, faculties, courses, 
                selectedUniversityId, selectedFacultyId, selectedCourseId } = this.props;

        const university = universities.filter(u => u.id === selectedUniversityId)[0];
        const { name: universityName } = university || {};

        const faculty = faculties.filter(f => f.id === selectedFacultyId)[0];
        const { name: facultyName } = faculty || {};

        const course = courses.filter(c => c.id === selectedCourseId)[0];
        const { name: courseName } = course || {};

        return `${universityName} / ${facultyName} / ${courseName}`;
    }

    handleBackClick = () => {
        const { history, selectedUniversityId, selectedFacultyId } = this.props;
        
        history.push(`/${selectedUniversityId}/${selectedFacultyId}`);
    }

    render(){
        const { selectedSemesterIds } = this.props;
        const shouldShowExercises =  selectedSemesterIds.length > 0;

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
      universities: getUniversities,
      faculties: getFaculties,
      courses: getCourses,
      selectedUniversityId: getSelectedUniversityId,
      selectedFacultyId: getSelectedFacultyId,
      selectedCourseId: getSelectedCourseId,
      selectedSemesterIds: getSelectedSemesterIds,
    },
    actions: {
    }
  })(FindExercises);
  