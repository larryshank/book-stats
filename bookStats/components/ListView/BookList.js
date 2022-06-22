import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from 'react-native';

import {BookContext} from '../provider/BookProvider';
import BookItem from './BookItem.js';

const BookList = ({route}) => {
  const books = useContext(BookContext);
  const {shelf} = route.params;
  let header;
  if (shelf === 'Finished') {
    header = 'Completed Reads';
  } else if (shelf === 'Started') {
    header = 'Currently Reading';
  } else {
    header = 'Want to Read';
  }
  const list = books.userBooks.filter(book => book.shelf === shelf);
  console.log(list);
  return (
    <View style={styles.base}>
      <Text style={styles.baseText}>{header}</Text>
      <ScrollView>
        {list.map(book => (
          <BookItem info={book} />
        ))}
      </ScrollView>
    </View>
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
    fontSize: 30,
  },
});

export default BookList;
