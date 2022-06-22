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

import {getData} from '../../database/db.js';

// navigation.navigate('Shelf')

const ShelfOverview = ({navigation, shelfType}) => {
  return (
    <TouchableHighlight
      style={styles.shelf}
      onPress={() => getData()}>
      <View>
        <Text style={styles.baseText}>{shelfType}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  shelf: {
    flex: 8,
    backgroundColor: '#2c3440',
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  baseText: {
    color: '#fff',
    fontSize: 30,
  },
});

export default ShelfOverview;
