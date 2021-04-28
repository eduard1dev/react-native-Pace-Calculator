import styled from 'styled-components/native'
import {colors, fonts} from '../../constants'

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.primary};
    align-items: center;
    justify-content: center;
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
`
export const PacesContainer = styled.View`
    height: 70%;
    width: 100%;
`
export const TextUpper = styled.Text`
    position: absolute;
    top: -40px;
    font-family: ${fonts.roboto2};
    font-size: 32px;
    width: 100%;
    height: 100px;
    color: ${colors.white};
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    background-color: ${colors.secundary};
    text-align: center;
    padding-top: 50px;
`