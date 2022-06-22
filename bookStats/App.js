import React from 'react';
import {useEffect, useContext} from 'react';
import {SafeAreaView, StyleSheet, Button} from 'react-native';
// import SQLite from 'react-native-sqlite-storage';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createTable} from './database/db.js';
import db from './database/connection.js';

import {BookProvider, BookContext} from './components/provider/BookProvider';
import BaseApp from './components/BaseApp.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <BookProvider>
      <BaseApp />
    </BookProvider>
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
    backgroundColor: '#2c3440',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    color: '#539565',
  },
});

export default App;
