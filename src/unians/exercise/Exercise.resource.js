import { GrahpQLService, restService } from '../../services';
import configuration from '../../configuration';

const { BASE_URL } = configuration;
const BASE_GRAPHQL_ENDPOINT_URL = `${BASE_URL}/graphql`
const BASE_EXERCISE_ENDPOINT_URL = `${BASE_URL}/api/Exercise`

const graphqlService = new GrahpQLService(BASE_GRAPHQL_ENDPOINT_URL);

export default {
    getExercisesForCourseAndSemesters: async (query) => {
        const data = await graphqlService.get(query);

        const { university: universityData } = data;

        const { faculty: facultyData, semesters, ...university } = universityData || {};

        const { course: courseData, ...faculty } = facultyData || {};

        const { exercises, ...course } = courseData || [];

        return {
            university,
            faculty,
            course,
            semesters,
            exercises
        };
    },

    addExercise: async (exercise) => {
        return await restService.post(BASE_EXERCISE_ENDPOINT_URL, undefined, exercise);
    }
}