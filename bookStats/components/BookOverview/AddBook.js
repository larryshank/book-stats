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
          console.log('is this it', res.rows.item(0));
          const {rows} = res;
          let books = [];
          for (let i = 0; i < rows.length; i++) {
            books.push({
              ...rows.item(i),
            });
          }
          console.log('books', books);
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
      <Text>{type}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    color: '#fff',
    borderRadius: 10,
  },
});

export default AddBook;
