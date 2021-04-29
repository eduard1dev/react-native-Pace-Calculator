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
    margin-top: 0px;
    background-color: ${colors.secundary};
    align-self: center;
    justify-content: flex-end;
    padding-right: 25px;
    align-items: center;
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


export default function LowerPaceContainer({item}){
    const dispatch = useDispatch()

    function delPace(item){
        dispatch(del(item.key))
    }

    return (
        <>
            {
                item != Infinity && item.pace != Infinity
                ?
                <>
                    <PaceContainer>
                        <TextDate>{item.date}</TextDate>
                        <TextDate style={{top: 30, fontSize: 20, borderRadius: 5, color: colors.white}}>seu menor pace</TextDate>
                        <View style={{alignItems: 'flex-end'}}>
                            <TextPace>{item.pace}</TextPace>
                            <TextLower>min/km</TextLower>
                        </View>
                    </PaceContainer>
                    <View style={{backgroundColor:colors.white, height: 2, width: '90%', marginTop: 5}} />
                </>
                :
                null
            }
        </>
    )
}


