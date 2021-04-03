import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Stories from './pages/Stories'

const Stack = createStackNavigator()

export default function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
                <Stack.Screen name='Stories' component={Stories} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}