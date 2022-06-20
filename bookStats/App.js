import React from 'react';
import {useState} from 'react';
import {SafeAreaView, View, TouchableHighlight, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSquarePlus} from '@fortawesome/free-regular-svg-icons/faSquarePlus';

import Home from './components/Shelves/Home.js';
import Stats from './components/Stats/Stats.js';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.base}>
      <NavigationContainer>
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
          }}>
          <Tab.Screen name="Shelves" component={Home} />
          <Tab.Screen name="Stats" component={Stats} />
        </Tab.Navigator>
      </NavigationContainer>

      <View style={styles.add}>
        <TouchableHighlight>
          <FontAwesomeIcon
            icon={faSquarePlus}
            style={styles.addIcon}
            size={40}
          />
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#2c3440',
    flex: 1,
  },
  baseText: {
    color: '#fff',
    fontSize: 40,
  },
  add: {
    // flex: 1,
    backgroundColor: '#2c3440',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    color: '#539565',
  },
});

export default App;
