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

const ShelfList = ({shelfType}) => {
  return (
    <View style={styles.base}>
      <Text style={styles.baseText}>LIST GOES HERE</Text>
      <Text style={styles.baseText}>LIST GOES HERE</Text>
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
  },
});

export default ShelfList;