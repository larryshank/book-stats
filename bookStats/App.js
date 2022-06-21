import React from 'react';
import {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SQLite from 'react-native-sqlite-storage';
import db from './database/db.js';

import {SearchProvider} from './components/provider/SearchProvider';
import HomeTabs from './components/Shelves/HomeTabs.js';
import BookList from './components/ListView/BookList.js';
import Search from './components/Add/Search.js';
import Description from './components/Add/Description.js';

const Stack = createNativeStackNavigator();

// const db = SQLite.openDatabase(
//   {
//     name: 'ubooks',
//     location: 'default',
//   },
//   () => {},
//   error => {
//     console.log(error);
//   },
// );

const App = () => {
  useEffect(() => {
    createTable();
    getData();
  }, []);

  const createTable = () => {
    db.transaction(tx => {
      tx.exeqcuteSql(
        `CREATE TABLE IF NOT EXISTS data
         (ID INTEGER PRIMARY KEY AUTOINCREMENT,
          book_id TEXT, title Text, subtitle TEXT,
          author TEXT, published TEXT, description TEXT,
          thumb TEXT, pageCount INT, shelf TEXT)
          [WITHOUT ROWID];`,
      );
    });
  };

  const getData = () => {
    try {
      db.transaction(tx => {
        tx.exeqcuteSql(
          `SELECT ID, book_id, title, subtitle, author, published,
           description, thumb, pageCount, shelf FROM data;`,
          [],
          (tx, results) => {
            console.log(results);
          },
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SearchProvider>
      <SafeAreaView style={styles.base}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group>
              <Stack.Screen
                name="Shelves"
                component={HomeTabs}
                options={{headerShown: false}}
              />
              <Stack.Screen name="Shelf" component={BookList} />
            </Stack.Group>

            <Stack.Group screenOptions={{presentation: 'modal'}}>
              <Stack.Screen name="Add Book" component={Search} />
              <Stack.Screen name="Book" component={Description} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SearchProvider>
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
