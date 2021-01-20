import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {AntDesign, Feather, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import NotificationScreen from './NotificationScreen';
import ExploreScreen from './ExploreScreen';

const HomeStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            style={{ backgroundColor: 'tomato' }}
            >
            <Tab.Screen
                name="Feed"
                component={HomeStackScreen}
                options={{
                tabBarLabel: 'Home',
                tabBarColor:"#009387",
                tabBarIcon: ({ color }) => (
                    <Ionicons name="home" color={color} size={26} />
                ),
                }}
            />
            
            <Tab.Screen
                name="Explore"
                component={ExploreStackScreen}
                options={{
                tabBarLabel: 'Explore',
                tabBarColor: "#5f40bd",
                tabBarIcon: ({ color }) => (
                    <AntDesign name="setting" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={NotificationStackScreen}
                options={{
                tabBarLabel: 'Updates',
                tabBarColor: "#1f65ff",
                tabBarIcon: ({ color }) => (
                    <Feather name="bell" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                tabBarLabel: 'Profile',
                tabBarColor: "#ee4e34",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
                }}
            />
            
        </Tab.Navigator>
    )
}

export default MainTabScreen

const HomeStackScreen = ({navigation}) => {
    return (
        <HomeStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#009387'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
          <HomeStack.Screen 
            name="Feed" 
            component={HomeScreen} 
            options={{
              title:"Overview",
              headerLeft:()=>(
                <Ionicons
                  name="ios-menu" 
                  size={30}
                  style={{paddingLeft:10}}
                  backgroundColor="#009387" 
                  color="#fff"
                  onPress={()=>navigation.openDrawer()}
                   />
              )
            }}
            />
        </HomeStack.Navigator>
    )
  }
  
  const ExploreStackScreen = ({navigation}) => {
    return (
        <ExploreStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#5f40bd'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
          <ExploreStack.Screen 
            name="Explore" 
            component={ExploreScreen} 
            options={{
              title:"Overview",
              headerLeft:()=>(
                <Ionicons
                  name="ios-menu" 
                  size={30}
                  style={{paddingLeft:10}}
                  backgroundColor="#5f40bd" 
                  color="#fff"
                  onPress={()=>navigation.openDrawer()}
                   />
              )
            }}
            />
        </ExploreStack.Navigator>
    )
  }

  const NotificationStackScreen = ({navigation}) => {
    return (
        <NotificationStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#1f65ff'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
          <NotificationStack.Screen 
            name="Home" 
            component={NotificationScreen} 
            options={{
              title:"Overview",
              headerLeft:()=>(
                <Ionicons
                  name="ios-menu" 
                  size={30}
                  style={{paddingLeft:10}}
                  backgroundColor="#009387" 
                  color="#fff"
                  onPress={()=>navigation.openDrawer()}
                   />
              )
            }}
            />
        </NotificationStack.Navigator>
    )
  }

  const ProfileStackScreen = ({navigation}) => {
    return (
        <ProfileStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#ee4e34'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
          <ProfileStack.Screen 
            name="Home" 
            component={ProfileScreen} 
            options={{
              title:"Overview",
              headerLeft:()=>(
                <Ionicons
                  name="ios-menu" 
                  size={30}
                  style={{paddingLeft:10}}
                  backgroundColor="#ee4e34" 
                  color="#fff"
                  onPress={()=>navigation.openDrawer()}
                   />
              )
            }}
            />
        </ProfileStack.Navigator>
    )
  }