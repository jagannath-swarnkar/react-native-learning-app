import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './Screens/MainTabScreen';
import DrawerContent from './Screens/DrawerContent';
import RootStackScreen from './Screens/RootStackScreen';

const Drawer = createDrawerNavigator();


export default function App() {
  const [isLoading, setLoading] = React.useState(true);
  const [auth, setAuth] = React.useState(false);

  React.useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[])
  if(isLoading){
    return (
      <View style={{flex: 1,
        justifyContent: 'center',
        alignItems:'center'}}>
        <ActivityIndicator size="large" color="lightgrey" />
      </View>
    )
  }
  return (
      <NavigationContainer>
        {!auth && <RootStackScreen />}
        {auth && <Drawer.Navigator 
          drawerContent={props=> <DrawerContent {...props} />}
          initialRouteName="Home">
          <Drawer.Screen name="Home" component={MainTabScreen} />
        </Drawer.Navigator>}
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
}) 