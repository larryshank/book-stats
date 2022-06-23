import React from 'react';
import {useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import {BookContext} from '../provider/BookProvider';

const ShelfOverview = ({navigation, shelfType}) => {
  let header;
  if (shelfType === 'Finished') {
    header = 'Completed Reads';
  } else if (shelfType === 'Started') {
    header = 'Currently Reading';
  } else {
    header = 'Want to Read';
  }
  const books = useContext(BookContext);
  const thisShelf = books.userBooks.filter(book => book.shelf === shelfType);
  const thumbs = [];
  thisShelf.forEach(book => thumbs.push(`https${book.thumb.slice(4)}`));

  return (
    <TouchableHighlight
      style={styles.shelf}
      onPress={() => navigation.navigate('Book Shelf', {shelf: shelfType})}>
      <View>
        <View>
          <Text style={styles.baseText}>{header}</Text>
        </View>

        <ScrollView style={styles.scroll} horizontal={true}>
          {thumbs.map((thumb, index) => (
            <TouchableWithoutFeedback
              key={index}
              style={styles.imgWrap}
              onPress={() =>
                navigation.navigate('Book Shelf', {shelf: shelfType})
              }>
              <Image
                style={styles.imgStyle}
                source={{
                  uri: thumb,
                }}
                resizeMode={'cover'}
              />
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  shelf: {
    flex: 1,
    backgroundColor: '#2c3440',
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  baseText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 27,
    paddingBottom: 5,
    paddingLeft: 5,
  },
  scroll: {
    paddingLeft: 5,
  },
  imgWrap: {
    flex: 1,
  },
  imgStyle: {
    width: 105,
    height: 165,
  },
});

export default ShelfOverview;
