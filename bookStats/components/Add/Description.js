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

import {SearchContext} from '../provider/SearchProvider.js';
import BookOverview from '../BookOverview/BookOverview.js';

const Description = ({navigation}) => {
  const search = useContext(SearchContext);
  console.log(search.selectedResult);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button onPress={() => navigation.goBack()} title="Cancel" />
      ),
    });
  }, [navigation]);

  const bookInfo = search.selectedResult.volumeInfo;
  const id = search.selectedResult.id;
  return <BookOverview info={bookInfo} id={id} />;
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
