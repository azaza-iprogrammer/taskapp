import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import Music from '../screens/Music';
import Movies from '../screens/Movies';
import { useNavigation } from '@react-navigation/native';
import Dashboard from '../screens/Dashboard';
import TabNavigator from './TabNavigator';
import Recharge from '../screens/Recharge';


const Drawer = createDrawerNavigator()

export const openDrawer = (navigation) => {
  console.log("OPEN DRAWER", navigation)
  navigation.dispatch(DrawerActions.openDrawer());
}


export default function DrawerNavigator() {  
  return (
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: 'right',
        }}
      >
        <Drawer.Screen name="VI HOME" component={TabNavigator} options={{headerShown: false}} />
        <Drawer.Screen name="Music" component={Music} options={{headerShown: false}}/>
        <Drawer.Screen name="Recharge" component={Recharge} options={{headerShown: false}}/>     
      </Drawer.Navigator>
  )
}