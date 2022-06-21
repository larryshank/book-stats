import React from 'react';
import {useState, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Button,
} from 'react-native';

import {SearchContext} from '../provider/SearchProvider.js';
import axios from 'axios';

const Search = ({navigation, dumb, setResults}) => {
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
      .then(searchResults => setResults(searchResults.data.items))
      .catch(error => console.log(error));
  };

  const searchResults = () => {
    return dumb.map(result => {
      return (
        <View style={styles.resultRow}>
          <View style={styles.imgCont}>
            {result.volumeInfo.imageLinks && (
              <Image
                style={{width: '60%', height: '80%'}}
                source={{
                  // eslint-disable-next-line prettier/prettier
                  uri: `https${result.volumeInfo.imageLinks.smallThumbnail.slice(4)}`,
                }}
                resizeMode={'cover'}
              />
            )}
          </View>
          <View style={styles.description}>
            <Text style={{color: 'white'}}>{result.volumeInfo.title}</Text>
            <Text style={{color: 'white'}}>{result.volumeInfo.authors[0]}</Text>
          </View>
        </View>
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
      <SafeAreaView style={{flex: 1}}>
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
    fontSize: 30,
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
  resultView: {
    // height: 300,
    // flex: 1,
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
  description: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Search;
