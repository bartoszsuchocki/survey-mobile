import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Background from './Background';
import styleConsts from '../utils/styleConsts';
import Survey from './Survey';

//BARTDBG change that mock
const surveys = [
    {
        title: 'Some super survey on peoples hobbies',
        description: 'This survey will check which hobby is the most popular through people in our country',
        questionsNumber: 10,
        startDate: '22.01.2020'
    },
    {
        title: 'Some super survey on peoples hobbies',
        description: 'This survey will check which hobby is the most popular through people in our country',
        questionsNumber: 10,
        startDate: '22.01.2020'
    },
    {
        title: 'Some super survey on peoples hobbies',
        description: 'This survey will check which hobby is the most popular through people in our country',
        questionsNumber: 10,
        startDate: '22.01.2020'
    },
    {
        title: 'Some super survey on peoples hobbies',
        description: 'This survey will check which hobby is the most popular through people in our country',
        questionsNumber: 10,
        startDate: '22.01.2020'
    }
]

export default () => {
    return (
        <Background>
            <FlatList
                data={surveys}
                renderItem={({item}) => (
                    <Survey survey={item} />
                ) }
            />
        </Background>
    )
}

const styles = StyleSheet.create({
   
})