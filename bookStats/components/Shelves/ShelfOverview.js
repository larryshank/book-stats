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

const ShelfOverview = ({shelfType}) => {
  return (
    <TouchableHighlight style={styles.shelf}>
      <View>
        <Text style={styles.baseText}>{shelfType}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  shelf: {
    flex: 5,
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
