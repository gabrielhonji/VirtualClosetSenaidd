import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';
import style from './Styles.jsx';

import Closet from '../closet/Closet.jsx';
import RandoFit from '../randofit/RandoFit.jsx';
import Add from '../add/Add.jsx';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../login/Login.jsx';
import Sign from '../sign/Sign.jsx';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function Inicio() {
  return (
    <View style={style.container}>
        <Tab.Navigator initialRouteName='Closet' backBehavior='history' screenOptions={{
          tabBarHideOnKeyboard: 'true',
          tabBarActiveTintColor: '#F5F0F6',
          tabBarInactiveTintColor: '#B2AEB2',
          tabBarActiveBackgroundColor: '#654E4D',
          headerShown: false,
          tabBarLabelStyle: {
            opacity: 0,
          },
          tabBarItemStyle: {
            paddingTop: 10,
            borderRadius: 10,
          },
          tabBarStyle: {
            backgroundColor: '#2D2221',
            height: 60,
            marginBottom: 10,
            marginHorizontal: 10,
            borderRadius: 10,
            borderTopWidth: 0,
          },
        }}>
          <Tab.Screen name="Closet" component={Closet}
            options={{
              tabBarLabel: 'Closet',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="tshirt-crew-outline" color={color} size={35} />
                ),
          }}/>
          <Tab.Screen name="RandoFit" component={RandoFit}
            options={{
              tabBarLabel: 'RandoFit',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="shuffle" color={color} size={35} />
                ),
          }}/>
          <Tab.Screen name="Add" component={Add}
            options={{
              tabBarLabel: 'Add',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="plus" color={color} size={35} />
                ),
          }}/>
        </Tab.Navigator>
    </View>
  )
}

export default function LoginNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Inicio' backBehavior='history'>
            <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false, }}/>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false, }}/>
            <Stack.Screen name="Sign" component={Sign} options={{ headerShown: false, }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}