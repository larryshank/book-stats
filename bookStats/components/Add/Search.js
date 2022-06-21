import React from 'react';
import {useState, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableHighlight,
} from 'react-native';
import axios from 'axios';

import {SearchContext} from '../provider/SearchProvider.js';

const Search = ({navigation}) => {
  const [inputText, onChangeText] = useState(null);
  const search = useContext(SearchContext);

  const performSearch = () => {
    let options = {
      method: 'get',
      baseURL: 'https://www.googleapis.com/books/v1/volumes',
      params: {
        q: inputText,
        fields:
          'items(id, (volumeInfo(title, subtitle, authors, publishedDate, pageCount, imageLinks, industryIdentifiers, description, categories)))',
        printType: 'books',
      },
    };
    return axios(options)
      .then(searchResults => search.setSearchResults(searchResults.data.items))
      .catch(error => console.log(error));
  };

  const selectAndNav = (selection, screen) => {
    search.setSelected(selection);
    navigation.navigate(screen);
  };

  const searchResults = () => {
    return search.searchResults.map(result => {
      return (
        <TouchableHighlight
          style={styles.clickResult}
          onPress={() => selectAndNav(result, 'Book')}>
          <View style={styles.resultRow}>
            <View style={styles.imgCont}>
              {result.volumeInfo.imageLinks && (
                <Image
                  style={styles.imgStyle}
                  source={{
                    // eslint-disable-next-line prettier/prettier
                    uri: `https${result.volumeInfo.imageLinks.smallThumbnail.slice(4)}`,
                  }}
                  resizeMode={'cover'}
                />
              )}
            </View>
            <View style={styles.description}>
              <Text style={styles.baseText}>{result.volumeInfo.title}</Text>
              <Text style={styles.baseText}>
                {result.volumeInfo.authors[0]}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    });
  };

  return (
    <View style={styles.base}>
      <TextInput
        style={styles.input}
        onChangeText={val => onChangeText(val)}
        placeholder="Search for a book"
        autoFocus={true}
        keyboardType="default"
        onSubmitEditing={performSearch}
      />
      <Button title="Search!" style={styles.button} onPress={performSearch} />
      <SafeAreaView style={styles.base}>
        <ScrollView style={styles.resultView}>{searchResults()}</ScrollView>
      </SafeAreaView>
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
    fontSize: 20,
  },
  button: {
    height: 40,
    borderWidth: 1,
    backgroundColor: '#66b9ef',
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

export default Search;
