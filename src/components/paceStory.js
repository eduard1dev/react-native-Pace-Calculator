import React from 'react'
import {View, Text, Button, TouchableOpacity} from 'react-native'

import { del } from '../store/pacesHist/pacesHist.actions'
import { useDispatch } from 'react-redux'

import { AntDesign } from '@expo/vector-icons'

import styled from 'styled-components'
import {colors, fonts} from '../constants'



const PaceContainer = styled.View`
    flex-direction: row;
    height: 70px;
    width: 100%;
    background-color: ${colors.secundary};
    align-self: center;
    justify-content: flex-end;
    padding-right: 25px;
    padding-left: 25px;
    align-items: center;
    margin-bottom: 2px;
`
const TextPace = styled.Text`
    color: ${colors.white};
    font-size: 27px;
    font-family: ${fonts.roboto1};
`
const TextLower = styled.Text`
    color: ${colors.white};
    font-size: 15px;
    font-family: ${fonts.roboto2};
`
const TextDate = styled(TextLower)`
    position: absolute;
    top: 5px;
    left: 25px;
`


export default function paceStory({item}){
    const dispatch = useDispatch()

    function delPace(item){
        dispatch(del(item.key))
    }

    return (
        <>
            <PaceContainer>
                <TextDate>{item.date}</TextDate>
                <View style={{alignItems: 'flex-end'}}>
                    <TextPace>{item.pace}</TextPace>
                    <TextLower>min/km</TextLower>
                </View>
                <View style={{backgroundColor: colors.white, width: 2, height: 50, marginHorizontal: 8}} />
                <TouchableOpacity onPress={() => delPace(item)} >
                    <AntDesign name='delete' size={25} color={colors.white} />
                </TouchableOpacity>
            </PaceContainer>
        </>
    )
}


