import { BaseODataResource, ODataFilterString, NestedODataParameter } from '../../classes';

const resource = new BaseODataResource('exercise');

const getExercisesForCourseAndSemesters = async (courseId, semesterIds) => {
    const semesterParameter = new NestedODataParameter('Semester').select('Name', 'Id');

    const filterStr = new ODataFilterString().filter('CourseId', 'eq', courseId)
                                             .and()
                                             .filter('SemesterId', 'eq', semesterIds);

    const lessons = await resource.getODataRequest()
                            .select('Name', 'Id', 'SemesterId', 'CourseId')
                            .expand(semesterParameter)
                            .filter(filterStr)
                            .executeRequest();

    return lessons;
}

export default {
    getExercisesForCourseAndSemesters,
    add: resource.post,
    update: resource.put,
    delete: resource.remove
};