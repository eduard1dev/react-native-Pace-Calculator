import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFF;
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
    background-color: #DCDCDC;
    width: 85px;
    height: 60px;
    border-radius: 7px;
    font-size: 20px;
    text-align: center;
`
export const InputDist = styled.TextInput`
    width: 280px;
    height: 60px;
    background-color: #DCDCDC;
    margin-bottom: 10px;
    border-radius: 7px;
    font-size: 20px;
    text-align: center;
`   

export const SaveButton = styled.TouchableOpacity`
    width: 280px;
    height: 50px;
    background-color: #000;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
`
export const TextSave = styled.Text`
    color: #FFF;
    font-size: 25px;
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
export const PaceContainer = styled.View`
    width: 280px;
    height: 120px;
    background-color: #000;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
`
export const TextPace = styled.Text`
    color: #FFF;
    font-size: 45px;
`
export const TextPaceLow = styled(TextPace)`
    font-size: 20px;
`
export const TextUpper = styled.Text`
    position: absolute;
    top: 0px;
    font-weight: bold;
    font-size: 27px;
    width: 100%;
    height: 60px;
    color: #FFF;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    background-color: #000;
    text-align: center;
    padding-top: 20px;
`