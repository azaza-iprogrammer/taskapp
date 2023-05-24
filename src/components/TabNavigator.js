import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Dashboard from '../screens/Dashboard';
import Music from '../screens/Music';
import Movies from '../screens/Movies';
import jobs from '../screens/jobs';
import callertunes from '../screens/callertunes';
import DrawerNavigator from './DrawerNavigator';

const Tab = createMaterialTopTabNavigator();

export default function  TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="VI Home" component={Dashboard} />
      <Tab.Screen name="Music" component={Music}  />
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="jobs" component={jobs} />
      <Tab.Screen name="callertunes" component={callertunes} />
    </Tab.Navigator>
  )
}