import React from 'react';
import {useEffect, useContext} from 'react';
import {SafeAreaView, StyleSheet, Button} from 'react-native';
// import SQLite from 'react-native-sqlite-storage';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
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
  console.log(myBooks.userBooks);
  useEffect(() => {
    const getData = () => {
      console.log('get data func');
      db.transaction(tx => {
        tx.executeSql(
          `SELECT ID, book_id, title, subtitle, author, published,
            description, thumb, pageCount, category, shelf FROM data;`,
          [],
          (tx, res) => {
            console.log('is this it', res.rows.item(0));
            const {rows} = res;
            let books = [];
            for (let i = 0; i < rows.length; i++) {
              books.push({
                ...rows.item(i),
              });
            }
            if (books.length > 0) {
              console.log(myBooks.userBooks);
              myBooks.setUserBooks(books);
            }
            console.log('books', myBooks.userBooks);
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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen
              name="Shelves"
              component={HomeTabs}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Shelf" component={BookList} />
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
