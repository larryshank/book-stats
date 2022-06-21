import React from 'react';

import {
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Button,
} from 'react-native';

import db from '../../database/db.js';

const AddBook = ({type, info, id}) => {
  const insert = shelf => {
    try {
      db.transaction(tx => {
        tx.exeqcuteSql(
          `INSERT INTO data (book_id, title, subtitle, author, published,
           description, thumb, pageCount, shelf) VALUES ${
             (id,
             info.title,
             info.subtitle,
             info.authors[0],
             info.publishedDate,
             info.description,
             info.imageLinks.smallThumbnail,
             info.pageCount,
             shelf)
           };`,
          [],
          (tx, results) => {
            console.log(tx);
          },
        );
      });
    } catch (error) {
      console.log(error);
    }
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
    <TouchableHighlight style={styles.button} onPress={() => insert(type)}>
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
