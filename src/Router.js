import React from "react";
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from "./screens/Dashboard";
import TabNavigator from "./components/TabNavigator";
import DrawerNavigator from "./components/DrawerNavigator";
import MyAccount from "./screens/MyAccount";
import Recharge from "./screens/Recharge";

const Stack = createNativeStackNavigator();



export default function Router() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    {/* <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
                    <Stack.Screen name="Recharge" component={Recharge} options={{ headerShown: false }} /> */}
                    <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
                    <Stack.Screen name="MyAccount" component={MyAccount} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}