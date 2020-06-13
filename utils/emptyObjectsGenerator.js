const DEFAULT_SURVEY_DURATION = 10;

const dateToText = date => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

export const createEmptySurvey = () => {
    const today = new Date();
    const endDate = new Date();
    endDate.setDate(today.getDate() + DEFAULT_SURVEY_DURATION);

    return {
        description: '',
        endDate: dateToText(endDate),
        name: '',
        questions: [],
        startDate: dateToText(today)
    };
}

export const createEmptyQuestion = (number) => ({
    text: '',
    answers: [],
    number
})

export const createEmptyAnswer = (number) => ({
    text: '',
    number
})