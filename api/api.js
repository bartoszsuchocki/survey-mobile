import axios from 'axios';

const BASE_URL = 'https://5106ac5094a5.ngrok.io';

export const postSurvey = (survey) => {
    return axios.post(`${BASE_URL}/surveys`, survey);
}

export const updateSurvey = (survey) => {
    return axios.put(`${BASE_URL}/surveys/${survey.id}`, survey);
}

export const getSurveys = () => {
    return axios.get(`${BASE_URL}/surveys`);
}

export const getSurvey = (surveyId) => {
    return axios.get(`${BASE_URL}/surveys/${surveyId}`);
}

export const deleteSurvey = (surveyId) => {
    return axios.delete(`${BASE_URL}/surveys/${surveyId}`);
}

export const getSurveyResult = (surveyId) => {
    return axios.get(`${BASE_URL}/surveys/${surveyId}/answers`);
}

export const postSurveyResult = (surveyReply) => {
    return axios.post(`${BASE_URL}/surveys/${surveyReply.id}/answers`, surveyReply);
}

export const registerUser = (user) => {
    return axios.post(`${BASE_URL}/auth/signup`, user);
}

export const login = (email, password) => {
    return axios.post(`${BASE_URL}/auth/login`, {email, password});
}