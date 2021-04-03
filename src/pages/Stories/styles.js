import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFF;
    align-items: center;
    justify-content: center;
`
export const SwitchPageButton = styled.TouchableOpacity`
    position: absolute;
    right: 5%;
    bottom: 2.5%;
    width: 50px;
    height: 50px;
    background-color: #000;
    border-radius: 25px;
    border-top-right-radius: 5px;
`
export const PacesContainer = styled.View`
    height: 70%;
    width: 320px;
`
export const TextUpper = styled.Text`
    position: absolute;
    top: 20px;
    font-weight: bold;
    font-size: 25px;
    color: #000;
    padding: 5px;
    border: 2px;
    text-align: center;
`