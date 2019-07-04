import { restService } from '../../services';

const baseUrl = "http://localhost:5000/graphql"

const getQuestionsForExercises = async (exerciseIds) => {
    
}

export default {
    getQuestionsForExercises,
    get: restService.get,
    add: restService.post,
    update: restService.put,
    delete: restService.delete
}