import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from './Home.js';
import Stats from '../Stats/Stats.js';

const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: '#697686',
          height: '100%',
          borderRadius: 10,
        },
        tabBarIndicatorContainerStyle: {
          backgroundColor: '#1b1c20',
        },
        swipeEnabled: false,
        tabBarActiveTintColor: '#fff',
        tabBarLabelStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        tabBarPressOpacity: 0.5,
      }}
      style={styles.base}>
      <Tab.Screen name="Shelves" component={Home} />
      <Tab.Screen name="Stats" component={Stats} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
  },
  statusBar: {
    backgroundcolor: 'black',
  },
  base: {
    backgroundColor: '#2c3440',
    flex: 1,
    paddingTop: 5,
  },
  baseText: {
    color: '#fff',
    fontSize: 30,
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'blue',
    justifyContent: 'space-around',
  },
  navButton: {
    backgroundColor: 'grey',
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  navText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  shelf: {
    flex: 5,
    backgroundColor: '#2c3440',
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  add: {
    flex: 1,
    backgroundColor: '#2c3440',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    color: 'blue',
  },
});

export default HomeTabs;
