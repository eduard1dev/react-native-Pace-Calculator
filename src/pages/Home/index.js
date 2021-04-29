import { MaterialIcons } from '@expo/vector-icons'

import React , { useEffect, useState, useRef } from 'react'
import { Alert, Text, StyleSheet, Modal, StatusBar, TouchableOpacity, Keyboard} from 'react-native'

import { useDispatch } from 'react-redux'
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

import Help from '../../components/Help'
import colors from '../../constants/colors'

export default function Home({navigation}){
    const [hora, setHora] = useState()
    const [min, setMin] = useState()
    const [seg, setSeg] = useState()
    const [dist, setDist] = useState()

    const dispatch = useDispatch()

    // minTotal = transformação do tempo para minutos.
    const minTotal = (hora*60 + min + seg/60)
    const pace = ( minTotal / (dist/1000)).toFixed(2)

    // Capturando data do dia do dispositivo em uso.
    const date = new Date()
    const today = `${(date.getDate().toString()).length == 1 ?'0'+ date.getDate().toString():date.getDate()}/0${date.getMonth() + 1}/${date.getYear() + 1900}`

    // gerando key aleatória para o objeto.
    const getKey = () => (today + date.getMilliseconds() + date.getMinutes()).toString()
    const [key, setKey] = useState(getKey)

    // Objeto do pace.
    const dataPace = {
        key: key,
        pace: pace,
        date: today,
    }


    function savePace(){
        if (!isNaN(dataPace.pace)){
            dispatch(save(dataPace))
            setKey(getKey)
            Keyboard.dismiss()
            Alert.alert('Pronto!','Seu pace foi salvo.')
        }else{
            Alert.alert('Ops!','Digite todos os valores.')
        }
    }

    //estado do modal para mostrar a janela de Ajuda.
    const [showHelp, setHelp] = useState(false)

    // isFocused inputs
    const [isFocused, setFocus] = useState({
        hora: false,
        min: false,
        seg: false,
        dist: false,
    })

    function handleFocus(inputFocused){
        setFocus((oldstate) => {
            switch (inputFocused) {
                case 'hora':
                    return {...oldstate, hora: true}
                case 'min':
                    return {...oldstate, min: true}
                case 'seg':
                    return {...oldstate, seg: true}
                case 'dist':
                    return {...oldstate, dist: true}
                default:
                    return null
            }
        })
    }

    function handleBlur(inputFocused){
        setFocus((oldstate) => {
            switch (inputFocused) {
                case 'hora':
                    return {...oldstate, hora: false}
                case 'min':
                    return {...oldstate, min: false}
                case 'seg':
                    return {...oldstate, seg: false}
                case 'dist':
                    return {...oldstate, dist: false}
                default:
                    return null
            }
        })
    }


    return(
        <Container>
            <Modal 
                onRequestClose={() => setHelp(false)}
                visible={showHelp} 
                transparent={true} 
                animationType={'slide'}
            >
                <Help/>  
            </Modal>
            <StatusBar hidden={false} backgroundColor={colors.secundary}/>
            <TextUpper>CALCULE SEU PACE</TextUpper>
            <InputContainerTime placeholder='distância'>
                <InputTime 
                    onChangeText={(value) => {setHora(parseFloat(value))} } 
                    placeholder='hora' 
                    keyboardType='numeric'
                    onFocus={() => handleFocus('hora')}
                    onBlur={() => handleBlur('hora')}
                    isFocused={isFocused.hora}
                />
                <Text style={{color:'#FFF', fontSize:30}}>:</Text>
                <InputTime 
                    onChangeText={(value) => setMin(parseFloat(value)) } 
                    placeholder='min' 
                    keyboardType='numeric'
                    onFocus={() => handleFocus('min')}
                    onBlur={() => handleBlur('min')}
                    isFocused={isFocused.min}
                />
                <Text style={{color:'#FFF', fontSize:30}}>:</Text>
                <InputTime 
                    onChangeText={(value) => setSeg(parseFloat(value)) } 
                    placeholder='seg' 
                    keyboardType='numeric'
                    onFocus={() => handleFocus('seg')}
                    onBlur={() => handleBlur('seg')}
                    isFocused={isFocused.seg}
                />
            </InputContainerTime>
            <InputDist 
                onChangeText={(value) => setDist(parseFloat(value))} 
                placeholder='distância em metros' 
                keyboardType='numeric'
                onFocus={() => handleFocus('dist')}
                onBlur={() => handleBlur('dist')}
                isFocused={isFocused.dist}
            />
            <PaceContainer>
                <TextPace>{isNaN(pace)?'...':pace}</TextPace><TextPaceLow>min/km</TextPaceLow>
            </PaceContainer>
            <SaveButton onPress={() => savePace()} >
                <TextSave>Salvar</TextSave>
            </SaveButton>
            <SwitchPageButton onPress={() => navigation.navigate('Stories')}>
                <MaterialIcons name='history' size={38} color='white' />
            </SwitchPageButton>
            <TouchableOpacity onPress={() => setHelp(true)} style={styles.helpContainer} >
                <MaterialIcons name='help' size={40} color='white'/>
            </TouchableOpacity>
        </Container>
    )
}



const styles = StyleSheet.create({
    helpContainer:{
        position:'absolute',
        left: '5%',
        bottom: '2.5%',
        elevation: 5,
    }
})