import React , {useState, useEffect, useCallback} from 'react'
import {
    FlatList,
    View,
} from 'react-native'

import PaceStory from '../../components/paceStory'
import LowerPaceContainer from '../../components/LowerPaceContainer'

import { AntDesign } from '@expo/vector-icons'

import { useSelector } from 'react-redux'

import { 
    Container,
    Header,
    SwitchPageButton,
    PacesContainer,
    TextUpper, 
} from './styles'

import { colors } from '../../constants'

export default function Stories({navigation}){
    const { paces } = useSelector(state => state.pacesHist)

    const [lowerPace, setLowerPace] = useState(Infinity)

    const LowerPace = useCallback(() => {
        let lower = {
            pace: lowerPace
        }
        if (paces.length > 0) {
            paces.forEach(element => {
                if(element.pace < lower.pace){
                    lower = element
                }
            })
            setLowerPace(lower)
        }else{
            setLowerPace(Infinity)
        }
    })
           

    useEffect(() => LowerPace(), [paces])


    return(
        <Container>
            <Header>
                <SwitchPageButton onPress={() => navigation.navigate('Home')}>
                    <AntDesign name='left' size={32} color={colors.white} />
                </SwitchPageButton>
                <TextUpper>HISTÓRICO</TextUpper>
            </Header>
            <LowerPaceContainer item={lowerPace}/>
            <PacesContainer>
                <FlatList
                    data={paces}
                    renderItem={({item}) => <PaceStory item={item}/>}
                    keyExtractor={(item) => item.key}
                    ItemSeparatorComponent={() => (
                        <View style={{backgroundColor: colors.secundaryL, width: '90%', height: 2, alignSelf:'center'}} />
                    )}
                />
            </PacesContainer>
        </Container>
    )
}

