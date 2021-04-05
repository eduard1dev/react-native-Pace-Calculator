import styled from 'styled-components/native'


// fundo: #333333 - vermelho:  #ff1a1a
export const Container = styled.ImageBackground`
    flex: 1;
    background-color: #333333;
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
    background-color: #FFF;
    width: 85px;
    height: 60px;
    border-radius: 7px;
    font-size: 20px;
    text-align: center;
`
export const InputDist = styled.TextInput`
    width: 280px;
    height: 60px;
    background-color: #FFF;
    margin-bottom: 10px;
    border-radius: 7px;
    font-size: 20px;
    text-align: center;
`   

export const SaveButton = styled.TouchableOpacity`
    width: 280px;
    height: 50px;
    background-color: #ff3333;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
`
export const TextSave = styled.Text`
    color: #333333;
    font-size: 25px;
    font-weight: bold;
`
export const SwitchPageButton = styled.TouchableOpacity`
    position: absolute;
    right: 5%;
    bottom: 2.5%;
    width: 50px;
    height: 50px;
    background-color: #0d0d0d;
    border-radius: 25px;
    border-top-right-radius: 5px;
    align-items: center;
    justify-content: center;
`
export const PaceContainer = styled.View`
    width: 280px;
    height: 120px;
    background-color: #ff3333;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
`
export const TextPace = styled.Text`
    color: #333333;
    font-size: 45px;
    font-weight: bold;
`
export const TextPaceLow = styled(TextPace)`
    font-size: 20px;
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