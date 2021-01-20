import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './root-stack-screens/SplashScreen';
import SignUpScreen from './root-stack-screens/SignUpScreen';
import SignInScreen from './root-stack-screens/SignInScreen';


const RootStack = createStackNavigator()

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
)

export default RootStackScreen

