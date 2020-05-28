import axios from 'axios';

const BASE_URL = 'http://localhost:8080/survey';

export const postSurvey = (survey) => {
    return axios.post(BASE_URL, survey);
}