import React , {useState, useEffect, useCallback} from 'react'
import {Text, FlatList, StyleSheet} from 'react-native'

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

    const [lowerPace, setLowerPace] = useState()


    function LowerPace(){
        let lower = {pace: Infinity}
        paces.forEach(element => {
            if(element.pace < lower.pace){
                lower = element
            }
        });
        setLowerPace(lower)
    }   

    useEffect(() => LowerPace(), [paces])


    return(
        <Container>
            <TextUpper style={styles.shadow}>HISTÓRICO</TextUpper>
            {
                lowerPace && lowerPace.pace != Infinity
                ?<LowerPaceContainer item={lowerPace}/>
                :<Text style={{fontSize:25, color: '#FFF'}}>Salve algum pace!</Text>
            }
            <PacesContainer> 
                <FlatList
                    data={paces}
                    renderItem={({item}) => <PaceStory item={item} />}
                    keyExtractor={item => item.key}
                />
            </PacesContainer>
            <SwitchPageButton onPress={() => navigation.navigate('Home')}>
                <Ionicons name='calculator' size={32} color='white' />
            </SwitchPageButton>
        </Container>
    )
}

const styles = StyleSheet.create({
    shadow:{
        elevation: 7,
    }
})