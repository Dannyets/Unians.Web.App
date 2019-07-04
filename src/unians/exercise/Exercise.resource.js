import { restService } from '../../services';

const baseUrl = "http://localhost:5000/graphql"

const getExercisesForCourseAndSemesters = async (courseId, semesterIds) => {
    
}

export default {
    getExercisesForCourseAndSemesters,
    add: restService.post,
    update: restService.put,
    delete: restService.remove
};