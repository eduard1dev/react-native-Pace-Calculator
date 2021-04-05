import styled from 'styled-components/native'

export const Container = styled.ImageBackground`
    flex: 1;
    background-color: #333333;
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
    align-items: center;
    justify-content: center;
`
export const PacesContainer = styled.View`
    height: 70%;
    width: 340px;
`
export const TextUpper = styled.Text`
    position: absolute;
    top: -40px;
    font-weight: bold;
    font-size: 28px;
    width: 90%;
    height: 100px;
    color: #cccccc;
    border-bottom-right-radius: 80px;
    border-bottom-left-radius: 80px;
    background-color: #0d0d0d;
    text-align: center;
    padding-top: 50px;
`