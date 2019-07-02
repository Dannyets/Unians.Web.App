import React from 'react';
import { withRouter } from 'react-router-dom';
import { CardsSuggestionInput, ReduxContainer } from '../../components';

import { getCourses, 
         getUniversities, 
         getFaculties, 
         getSelectedFacultyId,
         getSelectedUniversityId,
         getSelectedCourseId} from '../Unians.selectors';

import { getFacultyCourses, selectCourse, addCourse } from './Course.actions';

import { ModalStateComponent } from '../modal-state-component';
import { AddNew } from '../add';

import { PageContainer, MainContent, StyledIconTitle } from '../Unians.styles';

class Course extends ModalStateComponent {
  async componentDidMount(){
    const { actions, selectedFacultyId } = this.props;
    const { getFacultyCourses } = actions;

    await getFacultyCourses(selectedFacultyId);
  }

  async componentDidUpdate(prevProps){
      await this.updateCourses(prevProps);
  }

  updateCourses = async (prevProps) => {
    const { selectedFacultyId: prevSelectedFacultyId } = prevProps;
    const { selectedFacultyId, actions } = this.props;
    const { getFacultyCourses } = actions;

    if(prevSelectedFacultyId !== selectedFacultyId){
        await getFacultyCourses(selectedFacultyId);
    }
  }

  handleCourseSelect = (courseId) => {
    const { history, actions, selectedUniversityId, selectedFacultyId } = this.props;
    const { selectCourse } = actions;

    selectCourse(courseId);

    history.push(`/${selectedUniversityId}/${selectedFacultyId}/${courseId}`);
  }

  getTitle = () => {
    const { universities, faculties, selectedUniversityId, selectedFacultyId } = this.props;

    const university = universities.filter(u => u.id === selectedUniversityId)[0];
    const { name: universityName } = university || {};

    const faculty = faculties.filter(f => f.id === selectedFacultyId)[0];
    const { name: facultyName } = faculty || {};

    return `${universityName} / ${facultyName}`;
  }

  handleBackClick = () => {
      const { history, selectedUniversityId } = this.props;
  
      history.push(`/${selectedUniversityId}`);
  }

  render() {
    const { courses, selectedCourseId, selectedFacultyId, actions } = this.props;
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
                  facultyId: selectedFacultyId
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
    courses: getCourses,
    universities: getUniversities,
    faculties: getFaculties,
    selectedUniversityId: getSelectedUniversityId,
    selectedFacultyId: getSelectedFacultyId,
    selectedCourseId: getSelectedCourseId
  },
  actions: {
    getFacultyCourses,
    selectCourse,
    addCourse
  }
})(withRouter(Course));

