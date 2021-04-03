import { StatusBar } from 'expo-status-bar'
import { FontAwesome5 } from '@expo/vector-icons'

import React , { useState } from 'react'
import { Alert, Text } from 'react-native'

import { useDispatch} from 'react-redux'
import { save } from '../../store/pacesHist/pacesHist.actions'

import { 
    Container, 
    InputContainerTime, 
    InputDist, 
    InputTime, 
    SaveButton, 
    TextSave,
    SwitchPageButton,
    PaceContainer,
    TextPace,
    TextPaceLow,
    TextUpper,
} from './styles'

export default function Home({navigation}){
    const [hora, setHora] = useState()
    const [min, setMin] = useState()
    const [seg, setSeg] = useState()
    const [dist, setDist] = useState()

    const dispatch = useDispatch()

    // minTotal = transformação do tempo para minutos
    const minTotal = (hora*60 + min + seg/60)
    const pace = ( minTotal / (dist/1000)).toFixed(2)

    // Capturando data do dia do dispositivo em uso.
    const date = new Date()
    const today = `${(date.getDate().toString()).length == 1 ?'0'+ date.getDate().toString():date.getDate()}/0${date.getMonth() + 1}/${date.getYear() + 1900}`

    const dataPace = {
        key: (pace).toString(),
        pace: pace,
        date: today,
    }


    function savePace(){
        if (!isNaN(dataPace.pace)){
            dispatch(save(dataPace))
            Alert.alert('Pronto!','Seu pace foi salvo.')
        }else{
            Alert.alert('Ops!','Digite todos os valores.')
        }
    }

    return(
        <Container>
            <StatusBar hidden={true} />
            <TextUpper>Calcule seu pace</TextUpper>
            <InputContainerTime placeholder='distância'>
                <InputTime onChangeText={(value) => {setHora(parseFloat(value))} } placeholder='hora' keyboardType='numeric'/>
                <Text style={{color:'#000', fontSize:30}}>:</Text>
                <InputTime onChangeText={(value) => setMin(parseFloat(value)) } placeholder='min' keyboardType='numeric'/>
                <Text style={{color:'#000', fontSize:30}}>:</Text>
                <InputTime onChangeText={(value) => setSeg(parseFloat(value)) } placeholder='seg' keyboardType='numeric'/>
            </InputContainerTime>
            <InputDist onChangeText={(value) => setDist(parseFloat(value))} placeholder='distância em metros' keyboardType='numeric'></InputDist>
            
            <PaceContainer>
                <TextPace>{isNaN(pace)?'...':pace}</TextPace><TextPaceLow>km/min</TextPaceLow>
            </PaceContainer>
            <SaveButton onPress={() => savePace()} >
                <TextSave>Salvar</TextSave>
            </SaveButton>
            <SwitchPageButton onPress={() => navigation.navigate('Stories')}>
                <FontAwesome5 name='history' size={30} color='white' />
            </SwitchPageButton>
        </Container>
    )
}
