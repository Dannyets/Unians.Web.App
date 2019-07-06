import React from 'react';
import { withRouter } from 'react-router-dom';
import { CardsSuggestionInput, ReduxContainer } from '../../components';

import { getFacultyCourses, selectCourse, addCourse } from './Course.actions';

import { ModalStateComponent } from '../modal-state-component';
import { AddNew } from '../add';

import { PageContainer, MainContent, StyledIconTitle } from '../Unians.styles';

import { 
  getCourses, 
  getUniversity, 
  getFaculty, 
  getSelectedCourseId
} from './Course.selectors';

import { universitySelectors } from '../university';
import { facultySelectors } from '../faculty';

const { getSelectedUniversityId } = universitySelectors;
const { getSelectedFacultyId } = facultySelectors;

class Course extends ModalStateComponent {
  async componentDidMount(){
    await this.getCourses();
  }

  async componentDidUpdate(prevProps){
    if(this.shouldGetCourses(prevProps)){
      await this.getCourses();
    }
  }

  shouldGetCourses = (prevProps) => {
    if(!prevProps){
      return true;
    }

    const { facultyId: prevFacultyId } = prevProps;

    const { facultyId } = this.props;

    if(prevFacultyId !== facultyId){
        return true;
    }

    return false;
  }

  getCourses = async () => {
    const { universityId, actions, facultyId } = this.props;
    const { getFacultyCourses } = actions;

    await getFacultyCourses(universityId, facultyId);
  }

  handleCourseSelect = (courseId) => {
    const { history, actions, universityId, facultyId } = this.props;
    const { selectCourse } = actions;

    selectCourse(courseId);

    history.push(`/${universityId}/${facultyId}/${courseId}`);
  }

  getTitle = () => {
    const { university, faculty } = this.props;

    const { name: universityName } = university || {};

    const { name: facultyName } = faculty || {};

    return `${universityName} / ${facultyName}`;
  }

  handleBackClick = () => {
      const { history, universityId } = this.props;

      history.push(`/${universityId}`);
  }

  render() {
    const { courses, selectedCourseId, facultyId, actions } = this.props;
    const { addCourse } = actions;
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
                placeholder="Enter course name / number to filter"
                cards={courses}
                onSelect={this.handleCourseSelect}
                selection={selectedCourseId}
                onAdd={this.toggleShowAddModal}/>
            <AddNew 
              show={showAddModal}
              entityName="Course"
              entityShape={{
                name: {
                  type: 'text',
                  suggestions: courses.map(({ id, name, courseNumber }) => ({
                    value: id,
                    label: name,
                    courseNumber
                  })),
                  relatedProp: 'courseNumber'
                },
                courseNumber: {
                  type: 'text'
                },
                facultyCourses: [{
                  facultyId
                }]
              }}
              onAdd={addCourse}
              onClose={this.toggleShowAddModal}/>
          </MainContent>
      </PageContainer>
    );
  }
}

export default ReduxContainer({
  selectors: {
    universityId: getSelectedUniversityId,
    facultyId: getSelectedFacultyId,
    courses: getCourses,
    selectedCourseId: getSelectedCourseId,
    university: getUniversity, 
    faculty: getFaculty,
  },
  actions: {
    getFacultyCourses,
    selectCourse,
    addCourse
  }
})(withRouter(Course));

