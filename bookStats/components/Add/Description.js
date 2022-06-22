import React from 'react';
import {useContext} from 'react';
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

import {BookContext} from '../provider/BookProvider.js';
import BookOverview from '../BookOverview/BookOverview.js';

const Description = ({navigation}) => {
  const search = useContext(BookContext);
  console.log(search);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button onPress={() => navigation.goBack()} title="Cancel" />
      ),
    });
  }, [navigation]);

  const bookInfo = search.selectedResult.volumeInfo;
  const id = search.selectedResult.id;
  return <BookOverview info={bookInfo} id={id} navigation={navigation} />;
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

export default Description;
