import React from 'react'
import {View, Text, Button, TouchableOpacity} from 'react-native'

import { del } from '../store/pacesHist/pacesHist.actions'
import { useDispatch } from 'react-redux'

import { AntDesign } from '@expo/vector-icons'

import styled from 'styled-components'



const PaceContainer = styled.View`
    flex-direction: row;
    height: 70px;
    width: 320px;
    margin-bottom: 10px;
    background-color: #000;
    align-self: center;
    justify-content: flex-end;
    padding-right: 10px;
    align-items: center;
`
const TextPace = styled.Text`
    color: #FFF;
    font-size: 27px;
`
const TextLower = styled.Text`
    color: #FFF;
    font-size: 15px;
`


export default function paceStory({item}){
    const dispatch = useDispatch()

    function delPace(item){
        dispatch(del(item.key))
    }

    return (
        <PaceContainer>
            <View>
                <TextLower>{item.date}</TextLower>
            </View>
            <View style={{alignItems: 'flex-end', marginRight: 10}}>
                <TextPace>{item.pace}</TextPace>
                <TextLower>min/km</TextLower>
            </View>
            <TouchableOpacity onPress={() => delPace(item)} >
                <AntDesign name='delete' size={30} color='white' />
            </TouchableOpacity>
        </PaceContainer>
    )
}


