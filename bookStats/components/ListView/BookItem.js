import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {BookContext} from '../provider/BookProvider';

const BookItem = ({info}) => {
  const selection = useContext(BookContext);
  const navigation = useNavigation();
  const {title, author, description, thumb} = info;
  const pic = `https${thumb.slice(4)}`;
  const desc = `${description.slice(0, 120)}...`;

  const setSelectionAndGo = place => {
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
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.baseText}>{desc}</Text>
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
    color: '#cfcdcc',
    fontSize: 20,
    paddingBottom: 10,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    paddingBottom: 5,
  },
  author: {
    color: '#cfcdcc',
    fontWeight: 'bold',
    fontSize: 18,
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
