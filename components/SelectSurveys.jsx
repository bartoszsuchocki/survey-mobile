import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Background from './Background';
import Survey from './SurveyTile';
import { SHOW_SURVEY_SCREEN, FILL_SURVEY_SCREEN } from './Navigation';

//BARTDBG change that mock while later development
const surveys = [
    {
        title: 'Some super survey on peoples hobbies',
        description: 'This survey will check which hobby is the most popular through people in our country',
        questions: [
            {id: 'qsomeid0', number: 0, content: 'Which of those activities?', answers: [
                {id: 'asomeid0', number: 0, content: 'Sport'},
                {id: 'asomeid1', number: 1, content: 'Reading books'},
                {id: 'asomeid2', number: 2, content: 'Laying on the sofa'},
            ]},
            {id: 'qsomeid1', number: 1, content: 'Who is your best travel partner?', answers: [
                {id: 'asomeid4', number: 0, content: 'Wife'},
                {id: 'asomeid5', number: 1, content: 'Best friend'},
                {id: 'asomeid6', number: 2, content: 'Strangers'},
            ]}
        ],
        startDate: '22.01.2020'
    },
    {
        title: 'Some super survey on peoples hobbies2',
        description: 'This survey will check which hobby is the most popular through people in our country',
        questions: [],
        startDate: '22.01.2020'
    },
    {
        title: 'Some super survey on peoples hobbies3',
        description: 'This survey will check which hobby is the most popular through people in our country',
        questions: [],
        startDate: '22.01.2020'
    },
    {
        title: 'Some super survey on peoples hobbies4',
        description: 'This survey will check which hobby is the most popular through people in our country',
        questions: [],
        startDate: '22.01.2020'
    }
]

export default ({navigation}) => {
    const handleSurveyView = (survey) => {
        navigation.navigate(SHOW_SURVEY_SCREEN.route, {survey});
    }

    const handleShowResults = (survey) => {
        //todo
    }

    const handleSurveyDelete = (survey) => {
        //todo
    }

    const handleFillRequest = (survey) => {
        navigation.navigate(FILL_SURVEY_SCREEN.route, {survey});
    }
    
    return (
        <Background>
            <FlatList
                data={surveys}
                keyExtractor={item => item.title + item.id}
                renderItem={({item}) => (
                    <Survey 
                        onDelete={ () => handleSurveyDelete(item) }
                        onFill={ () => handleFillRequest(item) }
                        onShowResults={ () => handleShowResults(item) }
                        onView={ () => handleSurveyView(item) }
                        survey={item} 
                    />
                ) }
            />
        </Background>
    )
}

const styles = StyleSheet.create({
   
})