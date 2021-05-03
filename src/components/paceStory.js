import React from 'react'
import {View, Animated, Text, Button, TouchableOpacity} from 'react-native'

import { del } from '../store/pacesHist/pacesHist.actions'
import { useDispatch } from 'react-redux'

import { MaterialIcons } from '@expo/vector-icons'

import styled from 'styled-components'
import {colors, fonts} from '../constants'

import Swipeable from 'react-native-gesture-handler/Swipeable'



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
const RemoveContainer = styled.View`
    height: 70px;
    width: 100%;
    background-color: ${colors.red};
    align-items: flex-end;
    justify-content: center;
`


export default function paceStory({item}){
    const dispatch = useDispatch()

    function delPace(item){
        dispatch(del(item.key))
    }

    return (
        <Swipeable
            overshootRight={false}
            renderRightActions={(progress) => (
            <RemoveContainer>
                <Animated.View style={{
                        transform: [{
                            scale: progress
                        }]
                    }}
                >
                    <MaterialIcons 
                        name='delete' 
                        size={100} 
                        color='white'
                    /> 
                </Animated.View>
            </RemoveContainer>
            )}
            onSwipeableRightOpen={() => delPace(item)}
        >
                <PaceContainer>
                    <TextDate>{item.date}</TextDate>
                    <View style={{alignItems: 'flex-end'}}>
                        <TextPace>{item.pace}</TextPace>
                        <TextLower>min/km</TextLower>
                    </View>
                </PaceContainer>
        </Swipeable>
    )
}


