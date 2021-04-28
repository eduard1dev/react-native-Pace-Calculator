import styled from 'styled-components/native'
import {colors, fonts} from '../../constants'

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.primary};
    align-items: center;
    justify-content: center;
`
export const InputContainerTime = styled.View`
    flex-direction: row;
    width: 280px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`
export const InputTime = styled.TextInput`
    background-color:  ${colors.white};
    width: 85px;
    height: 60px;
    border-radius: 7px;
    font-size: 20px;
    text-align: center;
    elevation: 5;
    border-width: ${({isFocused}) => isFocused ? '1.5px' : 0};
    border-color: ${colors.secundary};
`
export const InputDist = styled.TextInput`
    width: 280px;
    height: 60px;
    background-color: ${colors.white};
    margin-bottom: 10px;
    border-radius: 7px;
    font-size: 20px;
    text-align: center;
    elevation: 5;
    border-width: ${({isFocused}) => isFocused ? '1.5px' : 0};
    border-color: ${colors.secundary};
`   

export const SaveButton = styled.TouchableOpacity`
    width: 220px;
    height: 50px;
    background-color: ${colors.secundary};
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    elevation: 5;
    margin-bottom: -50px;
`
export const TextSave = styled.Text`
    color: ${colors.white};
    font-size: 25px;
    font-family: ${fonts.roboto2};
`
export const SwitchPageButton = styled.TouchableOpacity`
    position: absolute;
    right: 5%;
    bottom: 2.5%;
    width: 50px;
    height: 50px;
    background-color: ${colors.secundary};
    border-radius: 25px;
    border-top-right-radius: 5px;
    align-items: center;
    justify-content: center;
    elevation: 5;
`
export const PaceContainer = styled.View`
    width: 280px;
    height: 120px;
    background-color: ${colors.secundary};
    margin-bottom: 25px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    elevation: 5;
`
export const TextPace = styled.Text`
    color: ${colors.white};
    font-size: 45px;
    font-family: ${fonts.roboto1};
`
export const TextPaceLow = styled(TextPace)`
    font-size: 20px;
    font-family: ${fonts.roboto2};
`
export const TextUpper = styled.Text`
    position: absolute;
    font-family: ${fonts.roboto2};
    top: -40px;
    font-size: 32px;
    width: 100%;
    height: 100px;
    color: ${colors.white};
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    background-color: ${colors.secundary};
    text-align: center;
    padding-top: 50px;
    elevation: 10;
`

