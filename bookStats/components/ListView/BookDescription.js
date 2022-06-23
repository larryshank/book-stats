import React, {useContext} from 'react';
import {Text, ScrollView, StyleSheet, View, Image, Button} from 'react-native';

import db from '../../database/connection.js';
import {BookContext} from '../provider/BookProvider';

const BookDescription = ({navigation}) => {
  const books = useContext(BookContext);
  const book = books.selectedBook;
  console.log('find id', book);

  const deleteBook = id => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM data WHERE ID = $1;', [id], (tx, res) =>
        console.log(res, 'deleted'),
      );
      tx.executeSql(
        `SELECT ID, book_id, title, subtitle, author, published,
        description, thumb, pageCount, category, shelf FROM data;`,
        [],
        (tx, res) => {
          const {rows} = res;
          let bookResults = [];
          for (let i = 0; i < rows.length; i++) {
            bookResults.push({
              ...rows.item(i),
            });
          }
          books.setUserBooks(bookResults);
        },
      );
    });
    navigation.goBack();
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => deleteBook(book.ID)}
          title="Delete Book"
          color="#66b9ef"
        />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  return (
    <ScrollView style={styles.base}>
      <View style={styles.resultRow}>
        <View style={styles.imgCont}>
          <Image
            style={styles.imgStyle}
            source={{
              // eslint-disable-next-line prettier/prettier
              uri: `https${book.thumb.slice(4)}`,
            }}
            resizeMode={'cover'}
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author}</Text>
        </View>
      </View>
      {/* <View style={styles.date}>
        <Text style={styles.baseText}>Date</Text>
        <Text style={styles.baseText}>Today</Text>
      </View> */}
      <View>
        <Text style={styles.descText}>{book.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#2c3440',
    flex: 1,
    paddingTop: 5,
  },
  baseText: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    height: 40,
    borderWidth: 1,
    backgroundColor: '#66b9ef',
  },
  date: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  clickResult: {
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  resultRow: {
    flexDirection: 'row',
    height: 150,
  },
  imgCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: '60%',
    height: '80%',
  },
  description: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    paddingBottom: 5,
    paddingLeft: 20,
  },
  author: {
    color: '#cfcdcc',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  descText: {
    color: '#cfcdcc',
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 25,
  },
});
export default BookDescription;
