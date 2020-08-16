/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';

import Screen1 from './src/screens/drawer/Screen1';
import Screen2 from './src/screens/drawer/Screen2';
import Screen3 from './src/screens/drawer/Screen3';
import Tab1 from './src/screens/tabs/Tab1';
import Tab2 from './src/screens/tabs/Tab2';
import Tab3 from './src/screens/tabs/Tab3';
import Feed from './src/screens/Feed';
import Detail from './src/screens/Detail';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

App = () => {

  createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          title: "My Feed",
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "white"
        }}
      />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="TopTabs" children={createTopTabs} />
      <Stack.Screen name="BottomTabs" children={createBottomTabs} />
    </Stack.Navigator>

  createTopTabs = (props) => {
    console.log(props);
    return <MaterialTopTabs.Navigator>
      <MaterialTopTabs.Screen name="Tab1" component={Tab1} />
      <MaterialTopTabs.Screen name="Tab2" component={Tab2} />
      <MaterialTopTabs.Screen name="Tab3" component={Tab3} />
    </MaterialTopTabs.Navigator>
  }

  createBottomTabs = () => {
    return <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarIcon: () => <Icon
            name="rocket"
            size={30}
            color="#000" />
        }}
      />
      <MaterialBottomTabs.Screen name="Tab2" component={Tab2} />
      <MaterialBottomTabs.Screen name="Tab3" component={Tab3} />
    </MaterialBottomTabs.Navigator>
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={createHomeStack} />
        <Drawer.Screen name="Contacts" component={Screen1} />
        <Drawer.Screen name="Favourites" component={Screen2} />
        <Drawer.Screen name="Settings" component={Screen3} />
      </Drawer.Navigator>
    </NavigationContainer >
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    fontSize: 20,
  }
})
export default App;
