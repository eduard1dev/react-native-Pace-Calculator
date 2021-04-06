import React from 'react'
import {View} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Stories from './pages/Stories'

const Stack = createStackNavigator()

export default function Routes(){

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false, animationEnabled:false}}>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Stories' component={Stories}/>
            </Stack.Navigator>
        </NavigationContainer> 
    )
}

