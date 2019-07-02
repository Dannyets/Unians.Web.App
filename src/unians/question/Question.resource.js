import { BaseODataResource, ODataFilterString } from '../../classes';

const resource = new BaseODataResource('question');

const getQuestionsForExercises = async (exerciseIds) => {
    const filterStr = new ODataFilterString();

    filterStr.filter('ExerciseId', 'eq', exerciseIds);

    const questions = await resource.getODataRequest()
                              .filter(filterStr)
                              .executeRequest();

    return questions;
}

export default {
    getQuestionsForExercises,
    getODataRequest: resource.getODataRequest,
    get: resource.get,
    add: resource.post,
    update: resource.put,
    delete: resource.remove
}