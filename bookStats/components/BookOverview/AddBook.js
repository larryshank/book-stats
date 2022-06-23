import React, {useContext} from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';

import {insert} from '../../database/db.js';
import db from '../../database/connection.js';

import {BookContext} from '../provider/BookProvider.js';

const AddBook = ({type, info, id, navigation}) => {
  const myBooks = useContext(BookContext);

  const addBookAndFetch = () => {
    insert(id, info, type);
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
          myBooks.setUserBooks(books);
        },
      );
    });
    myBooks.setSearchResults([]);
    navigation.navigate('Shelves');
  };

  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => addBookAndFetch(id, info, type)}>
      <Text style={styles.buttonText}>{type}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    backgroundColor: '#66b9ef',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default AddBook;
