import React from 'react';
import {useEffect, useContext} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createTable} from '../database/db.js';
import db from '../database/connection.js';

import {BookContext} from './provider/BookProvider';
import HomeTabs from './Shelves/HomeTabs.js';
import BookList from './ListView/BookList.js';
import Search from './Add/Search.js';
import Description from './Add/Description.js';
import BookDescription from './ListView/BookDescription.js';

const Stack = createNativeStackNavigator();

const BaseApp = () => {
  const myBooks = useContext(BookContext);

  useEffect(() => {
    const getData = () => {
      db.transaction(tx => {
        tx.executeSql(
          `SELECT ID, book_id, title, subtitle, author, published,
            description, thumb, pageCount, category, shelf FROM data;`,
          [],
          (tx, res) => {
            const {rows} = res;
            let books = [];
            for (let i = 0; i < rows.length; i++) {
              books.push({
                ...rows.item(i),
              });
            }
            if (books.length > 0) {
              myBooks.setUserBooks(books);
            }
          },
        );
      });
    };
    createTable();
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.base}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerTintColor: '#66b9ef',
          }}>
          <Stack.Group>
            <Stack.Screen
              name="Home"
              component={HomeTabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Book Shelf"
              component={BookList}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              // options={({route}) => ({title: route.params.shelf})}
            />
            <Stack.Screen name="Book Description" component={BookDescription} />
          </Stack.Group>

          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen name="Add Book" component={Search} />
            <Stack.Screen name="Book" component={Description} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#2c3440',
    flex: 1,
  },
  header: {
    backgroundColor: '#2c3440',
    color: '#fff',
  },
  headerTitle: {
    color: '#fff',
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

export default BaseApp;
