import React from 'react';
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

import ShelfOverview from './ShelfOverview.js';

const Home = () => {
  return (
    <View style={styles.base}>
      <ShelfOverview shelfType={'Completed Reads'} />
      <ShelfOverview shelfType={'Started'} />
      <ShelfOverview shelfType={'Want to Read'} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
  },
  statusBar: {
    backgroundcolor: 'black',
  },
  base: {
    backgroundColor: '#2c3440',
    flex: 1,
    paddingTop: 5,
  },
  baseText: {
    color: '#fff',
    fontSize: 30,
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'blue',
    justifyContent: 'space-around',
  },
  navButton: {
    backgroundColor: 'grey',
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  navText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  shelf: {
    flex: 5,
    backgroundColor: '#2c3440',
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  add: {
    flex: 1,
    backgroundColor: '#2c3440',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    color: 'blue',
  },
});

export default Home;
