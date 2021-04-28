import React , {useState, useEffect, useCallback} from 'react'
import {FlatList} from 'react-native'

import PaceStory from '../../components/paceStory'
import LowerPaceContainer from '../../components/LowerPaceContainer'

import { Ionicons } from '@expo/vector-icons'

import { useSelector } from 'react-redux'

import { 
    Container,
    SwitchPageButton,
    PacesContainer,
    TextUpper, 
} from './styles'




export default function Stories({navigation}){
    const { paces } = useSelector(state => state.pacesHist)
    

    const [lowerPace, setLowerPace] = useState(Infinity)

    const LowerPace = useCallback(() => {
        let lower = {pace: lowerPace}
        paces.forEach(element => {
            if(element.pace < lower.pace){
                lower = element
            }
        })
        setLowerPace(lower)
    })
           

    useEffect(() => LowerPace(), [paces])


    return(
        <Container>
            <TextUpper>HISTÓRICO</TextUpper>
            <LowerPaceContainer item={lowerPace}/>
            <PacesContainer> 
                <FlatList
                    data={paces}
                    renderItem={({item}) => <PaceStory item={item}/>}
                    keyExtractor={(item) => item.key}
                />
            </PacesContainer>
            <SwitchPageButton onPress={() => navigation.navigate('Home')}>
                <Ionicons name='calculator' size={32} color='white' />
            </SwitchPageButton>
        </Container>
    )
}

