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

const BookItem = ({navigation, info}) => {
  console.log('HAHDHADF', navigation);
  const selection = useContext(BookContext);
  const {title, author, description, thumb} = info;
  // console.log('stuff', title, author, thumb, desc);
  const pic = `https${thumb.slice(4)}`;
  const desc = `${description.slice(0, 100)}...`;

  const setSelectionAndGo = (place) => {
    selection.setBook(info);
    navigation.navigate(place);
  };

  return (
    <SafeAreaView>
      <TouchableHighlight
        style={styles.base}
        onPress={() => setSelectionAndGo('Book Description')}>
        <View style={styles.row}>
          <View style={styles.imgWrap}>
            <Image
              style={styles.imgStyle}
              source={{
                uri: pic,
              }}
              resizeMode={'contain'}
            />
          </View>
          <View style={styles.desc}>
            <Text style={styles.baseText}>Title: {title}</Text>
            <Text style={styles.baseText}>Author: {author}</Text>
            <Text style={styles.baseText}>Description: {desc}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#2c3440',
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  baseText: {
    color: '#fff',
    fontSize: 20,
    paddingBottom: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  imgWrap: {
    flex: 1,
    paddingLeft: 10,
  },
  imgStyle: {
    flex: 1,
    height: '100%',
  },
  desc: {
    flex: 2,
    paddingLeft: 25,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default BookItem;
