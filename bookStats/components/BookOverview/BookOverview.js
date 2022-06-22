import React, {useContext, useEffect} from 'react';
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

import AddBook from './AddBook.js';

const BookOverview = ({info, id}) => {
  return (
    <ScrollView style={styles.base}>
      <View style={styles.resultRow}>
        <View style={styles.imgCont}>
          <Image
            style={styles.imgStyle}
            source={{
              // eslint-disable-next-line prettier/prettier
              uri: `https${info.imageLinks.smallThumbnail.slice(4)}`,
            }}
            resizeMode={'cover'}
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.baseText}>{info.title}</Text>
          <Text style={styles.baseText}>{info.authors[0]}</Text>
        </View>
      </View>
      <View style={styles.date}>
        <Text style={styles.baseText}>Date</Text>
        <Text style={styles.baseText}>Today</Text>
      </View>
      <View style={styles.buttonRow}>
        <AddBook type={'Finished'} info={info} id={id} />
        <AddBook type={'Started'} info={info} id={id} />
        <AddBook type={'Want'} info={info} id={id} />
      </View>
      <View>
        <Text style={styles.descText}>{info.description}</Text>
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
  descText: {
    color: '#fff',
    fontSize: 35,
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
    borderWidth: 1,
    borderColor: 'green',
    flexDirection: 'row',
    height: 150,
  },
  imgCont: {
    borderWidth: 1,
    borderColor: 'red',
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
    alignItems: 'center',
  },
});
export default BookOverview;
