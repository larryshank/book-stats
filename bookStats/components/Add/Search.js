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

import {BookContext} from '../provider/BookProvider.js';

const Search = ({navigation}) => {
  const [inputText, onChangeText] = useState(null);
  const search = useContext(BookContext);

  const goBackAndCancel = () => {
    search.setSearchResults([]);
    navigation.goBack();
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          onPress={() => goBackAndCancel()}
          title="Cancel"
          color="#66b9ef"
        />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      .then(searchResults => {
        search.setSearchResults(
          searchResults.data.items.filter(
            item =>
              item.volumeInfo.title &&
              item.volumeInfo.authors &&
              item.volumeInfo.pageCount &&
              item.volumeInfo.imageLinks &&
              item.volumeInfo.imageLinks.smallThumbnail &&
              item.volumeInfo.description &&
              item.volumeInfo.publishedDate &&
              item.volumeInfo.categories,
          ),
        );
      })
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
          key={result.id}
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
              <Text style={styles.title}>{result.volumeInfo.title}</Text>
              <Text style={styles.author}>{result.volumeInfo.authors[0]}</Text>
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
      <TouchableHighlight style={styles.button} onPress={performSearch}>
        <Text style={styles.buttonText}>Search!</Text>
      </TouchableHighlight>
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
    width: 200,
    borderWidth: 1,
    backgroundColor: '#66b9ef',
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
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
  description: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default Search;
