import React from 'react'
import {View, Text, FlatList} from 'react-native'

import PaceStory from '../../components/paceStory'

import { 
    Container,
    SwitchPageButton,
    PacesContainer,
    PaceContainer,
    TextUpper, 
} from './styles'

import { useDispatch, useSelector } from 'react-redux'


export default function Stories({navigation}){
    const { paces } = useSelector(state => state.pacesHist)
    return(
        <Container style={{flex:1}}>
            <TextUpper>Histórico</TextUpper>
            <PacesContainer> 
                <FlatList
                    data={paces}
                    renderItem={({item}) => <PaceStory item={item} />}
                    keyExtractor={item => item.key}
                />
            </PacesContainer>
            <SwitchPageButton onPress={() => navigation.navigate('Home')} />
        </Container>
    )
}