import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './Screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';
import MainTabScreen from './Screens/MainTabScreen';
import DrawerContent from './Screens/DrawerContent';
import RootStackScreen from './Screens/RootStackScreen';

const Drawer = createDrawerNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <RootStackScreen />
        {/* <Drawer.Navigator 
          drawerContent={props=> <DrawerContent {...props} />}
          initialRouteName="Home">
          <Drawer.Screen name="Home" component={MainTabScreen} />
        </Drawer.Navigator> */}
      </NavigationContainer>
  );
}
