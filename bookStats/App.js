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

import HomeTabs from './components/Shelves/HomeTabs.js';
import BookList from './components/ListView/BookList.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.base}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Shelves"
            component={HomeTabs}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Shelf" component={BookList} />
        </Stack.Navigator>
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
