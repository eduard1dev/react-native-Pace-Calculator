import React from 'react'
import {View, Text, StyleSheet, Linking} from 'react-native'

export default function Help(){
    return (
        <View style={styles.container}>
            <View style={styles.helpContainer}>
                <Text style={styles.helpTexth1}>Como calcular meu Pace?</Text>
                <Text style={styles.helpText}> É simples, basta cronometrar o tempo da sua corrida com auxílio de um relógio. Após isso, é so inserir o tempo e a distância percorrida no app.</Text>
                <Text style={styles.helpText}> Caso não saiba a distância percorrida, pode ser utilizado o Google Maps para medir a metragem do percusso.</Text>
                <Text style={styles.helpTextLink} onPress={() => Linking.openURL('https://support.google.com/maps/answer/1628031?co=GENIE.Platform%3DDesktop&hl=pt-BR')}>Clique aqui para aprender a como usar o Google Maps.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    helpContainer:{
        height: 400,
        width: 300,
        backgroundColor:'#fff',
        opacity: 1,
        borderRadius: 25,
        elevation: 7,
        alignItems:'center',
        justifyContent:'center',
    },
    helpTexth1:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom: 30,
    },
    helpText:{
        fontSize: 15,
        textAlign:'justify',
        marginHorizontal: 25,
        marginBottom: 10,
    },
    helpTextLink:{
        fontSize: 13,
        textAlign:'justify',
        marginHorizontal: 60,
        marginBottom: 10,
        color:'#333333',

    }
})