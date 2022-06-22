import React from 'react';
import {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

// navigation.navigate('Shelf')
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
      onPress={() => navigation.navigate('Shelf', {shelf: shelfType})}>
      <View>
        <View>
          <Text style={styles.baseText}>{header}</Text>
        </View>

        <ScrollView style={styles.scroll} horizontal={true}>
          {thumbs.map(thumb => (
            <TouchableWithoutFeedback
              style={styles.imgWrap}
              onPress={() => navigation.navigate('Shelf', {shelf: shelfType})}>
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
    fontSize: 30,
  },
  scroll: {
    // flex: 1,

  },
  imgWrap: {
    // flex: 1,

  },
  imgStyle: {
    // flex: 1,
    width: 110,
    height: 175,
  },
});

export default ShelfOverview;
