export const createEmptySurvey = () => ({
    description: '',
    questions: [],
    startDate: '',
    title: ''
})

export const createEmptyQuestion = (number) => ({
    content: '',
    answers: [],
    number
})

export const createEmptyAnswer = (number) => ({
    content: '',
    number
})