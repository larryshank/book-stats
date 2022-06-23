import React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
} from 'react-native';

import AddBook from './AddBook.js';

const BookOverview = ({info, id, navigation}) => {
  return (
    <SafeAreaView style={styles.base}>
      <ScrollView>
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
            <Text style={styles.title}>{info.title}</Text>
            <Text style={styles.author}>{info.authors[0]}</Text>
          </View>
        </View>
        {/* <View style={styles.date}>
          <Text style={styles.baseText}>Date</Text>
          <Text style={styles.baseText}>Today</Text>
        </View> */}
        <View style={styles.buttonRow}>
          <AddBook
            type={'Finished'}
            info={info}
            id={id}
            navigation={navigation}
          />
          <AddBook
            type={'Started'}
            info={info}
            id={id}
            navigation={navigation}
          />
          <AddBook type={'Want'} info={info} id={id} navigation={navigation} />
        </View>
        <View>
          <Text style={styles.descText}>{info.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    paddingTop: 10,
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
  },
  author: {
    color: '#cfcdcc',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 10,
  },
  descText: {
    color: '#cfcdcc',
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 25,
  },
});
export default BookOverview;
