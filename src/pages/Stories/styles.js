import styled from 'styled-components/native'
import {colors, fonts} from '../../constants'

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.secundary};
    align-items: center;
`
export const Header = styled.View`
    flex-direction: row;
    background-color: ${colors.secundary};
    width: 100%;
    height: 70px;
    align-items: center;
    justify-content: center;
`
export const SwitchPageButton = styled.TouchableOpacity`
    position: absolute;
    left: 5%;
`
export const PacesContainer = styled.View`
    flex: 1;
    width: 100%;
`
export const TextUpper = styled.Text`
    font-family: ${fonts.roboto2};
    font-size: 32px;
    color: ${colors.white};
    text-align: center;
`