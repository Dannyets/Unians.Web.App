import React from 'react';

import { getExercisesForCourseAndSemesters } from '../Exercise.actions'

import { ReduxContainer } from '../../../components';
import { SelectExercise } from '..';

import { PageContainer, SemesterSection, Section, MainContent } from './FindExercises.styles';
import { StyledIconTitle } from '../../Unians.styles';

import { 
    getUniversity, 
    getFaculty, 
    getCourse
} from '../Exercise.selectors';

import { universitySelectors } from '../../university';
import { facultySelectors } from '../../faculty';
import { courseSelectors } from '../../course';
import { semesterSelectors } from '../../semester';

const { getSelectedUniversityId } = universitySelectors;
const { getSelectedFacultyId } = facultySelectors;
const { getSelectedCourseId } = courseSelectors;
const { getSelectedSemesterIds } = semesterSelectors;

class FindExercises extends React.Component {
    async componentDidMount(){
        await this.getExercies();
    }

    getExercies = async () => {
        const { actions, universityId, facultyId, courseId } = this.props;
        const { getExercisesForCourseAndSemesters } = actions;
    
        await getExercisesForCourseAndSemesters(universityId, facultyId, courseId, []);
    }

    getTitle = () => {
        const { university, faculty, course } = this.props;

        const { name: universityName } = university || {};

        const { name: facultyName } = faculty || {};

        const { name: courseName } = course || {};

        return `${universityName} / ${facultyName} / ${courseName}`;
    }

    handleBackClick = () => {
        const { history, universityId, facultyId } = this.props;
        
        history.push(`/${universityId}/${facultyId}`);
    }

    render(){
        const { semesterIds } = this.props;
        const shouldShowExercises =  semesterIds.length > 0;

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
      universityId: getSelectedUniversityId, 
      facultyId: getSelectedFacultyId, 
      courseId: getSelectedCourseId,
      semesterIds: getSelectedSemesterIds,
      university: getUniversity, 
      faculty: getFaculty, 
      course: getCourse,
    },
    actions: {
        getExercisesForCourseAndSemesters
    }
  })(FindExercises);
  