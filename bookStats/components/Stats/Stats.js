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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSquarePlus} from '@fortawesome/free-regular-svg-icons/faSquarePlus';

import TopCat from './TopCat.js';

const Stats = () => {
  return (
    <View style={styles.base}>
      <Text style={styles.baseText}>All Time</Text>

      <View style={styles.overall}>
        <View style={styles.overallRow}>
          <View style={styles.overallCat}>
            <Text style={styles.statText}>#</Text>
            <Text style={styles.statText}>Books</Text>
          </View>
          <View style={styles.overallCat}>
            <Text style={styles.statText}>#</Text>
            <Text style={styles.statText}>Pages</Text>
          </View>
        </View>

        <View style={styles.overallRow}>
          <View style={styles.overallCat}>
            <Text style={styles.statText}>#</Text>
            <Text style={styles.statText}>Authors</Text>
          </View>
          <View style={styles.overallCat}>
            <Text style={styles.statText}>#</Text>
            <Text style={styles.statText}>Genres</Text>
          </View>
        </View>
      </View>

      <TopCat type={'Genres'} />

      <TopCat type={'Authors'} />
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
    textAlign: 'center',
  },
  statText: {
    color: '#fff',
    fontSize: 20,
  },
  statTextBottom: {
    color: '#fff',
    fontSize: 20,
  },
  overall: {
    flex: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  overallRow: {
    flex: 1,
    flexDirection: 'row',
  },
  overallCat: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topView: {
    flex: 1,
    flexDirection: 'row',
  },
  topBreakdown: {
    flex: 1,
    left: '50%',
    justifyContent: 'center',
  },
  add: {
    flex: 0.8,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    color: 'blue',
  },
});

export default Stats;
