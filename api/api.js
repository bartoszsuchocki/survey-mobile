import axios from 'axios';

const BASE_URL = 'https://0d416313cff6.ngrok.io/surveys';
const RESULT_URL_SUFFIX = 'answers';

export const postSurvey = (survey) => {
    return axios.post(BASE_URL, survey);
}

export const updateSurvey = (survey) => {
    return axios.put(`${BASE_URL}/${survey.id}`, survey);
}

export const getSurveys = () => {
    return axios.get(BASE_URL);
}

export const getSurvey = (surveyId) => {
    return axios.get(`${BASE_URL}/${surveyId}`);
}

export const deleteSurvey = (surveyId) => {
    return axios.delete(`${BASE_URL}/${surveyId}`);
}

export const getSurveyResult = (surveyId) => {
    return axios.get(`${BASE_URL}/${surveyId}/${RESULT_URL_SUFFIX}`);
}

export const postSurveyResult = (surveyReply) => {
    return axios.post(`${BASE_URL}/${surveyReply.id}/${RESULT_URL_SUFFIX}`, surveyReply);
}