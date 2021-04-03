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
    border-radius: 10px;
`
const TextPace = styled.Text`
    color: #FFF;
    font-size: 27px;
`
const TextLower = styled.Text`
    color: #FFF;
    font-size: 15px;
`
const TextDate = styled(TextLower)`
    position: absolute;
    top: 5px;
    left: 5px;
`


export default function LowerPaceContainer({item}){
    const dispatch = useDispatch()

    function delPace(item){
        dispatch(del(item.key))
    }

    return (
        <>
            <PaceContainer>
                <TextDate>{item.date}</TextDate>
                <TextDate style={{top: 30, fontSize: 20}} >seu menor pace</TextDate>
                <View style={{alignItems: 'flex-end'}}>
                    <TextPace>{item.pace}</TextPace>
                    <TextLower>min/km</TextLower>
                </View>
                <View style={{backgroundColor: '#FFF', width: 2, height: 50, marginHorizontal: 8}} />
                <TouchableOpacity onPress={() => delPace(item)} >
                    <AntDesign name='delete' size={30} color='white' />
                </TouchableOpacity>
            </PaceContainer>
            <View style={{backgroundColor: '#000', width: 220, height: 2, marginBottom: 30}} />
        </>
    )
}


