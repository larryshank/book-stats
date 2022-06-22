import React from 'react';

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

import {insert} from '../../database/db.js';

// const addBookAndFetch = (id, info, type) => {
//   insert(id, info, type);

// }

const AddBook = ({type, info, id}) => {
  console.log(info.authors, info.authors[0]);
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => insert(id, info, type)}>
      <Text>{type}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    color: '#fff',
    borderRadius: 10,
  },
});

export default AddBook;
