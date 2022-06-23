import React, {useContext} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

import {BookContext} from '../provider/BookProvider.js';

import TopCat from './TopCat.js';

const Stats = () => {
  const books = useContext(BookContext);
  const stats = books.userBooks.filter(stat => stat.shelf === 'Finished');

  const getPageCount = () => {
    let pages = 0;
    stats.forEach(stat => {
      pages += stat.pageCount;
    });
    return pages;
  };

  const getAuthors = () => {
    const authors = {};
    stats.forEach(stat => {
      if (authors[stat.author] === undefined) {
        authors[stat.author] = 1;
      } else {
        authors[stat.author]++;
      }
    });
    return authors;
  };

  const getGenres = () => {
    const genres = {};
    stats.forEach(stat => {
      if (genres[stat.category] === undefined) {
        genres[stat.category] = 1;
      } else {
        genres[stat.category]++;
      }
    });
    return genres;
  };

  const totalPages = getPageCount();
  const myAuthors = getAuthors();
  const myGenres = getGenres();

  return (
    <View style={styles.base}>
      <ImageBackground
        source={require('../../images/stat-back.png')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.baseText}>All Time</Text>

        <View style={styles.overall}>
          <View style={styles.overallRow}>
            <View style={styles.overallCat}>
              <Text style={styles.statNum}>{stats.length}</Text>
              <Text style={styles.statText}>Books</Text>
            </View>
            <View style={styles.overallCat}>
              <Text style={styles.statNum}>{totalPages}</Text>
              <Text style={styles.statText}>Pages</Text>
            </View>
          </View>

          <View style={styles.overallRow}>
            <View style={styles.overallCat}>
              <Text style={styles.statNum}>
                {Object.entries(myAuthors).length}
              </Text>
              <Text style={styles.statText}>Authors</Text>
            </View>
            <View style={styles.overallCat}>
              <Text style={styles.statNum}>
                {Object.entries(myGenres).length}
              </Text>
              <Text style={styles.statText}>Genres</Text>
            </View>
          </View>
        </View>
        <TopCat type={'Genres'} stats={myGenres} />
        <TopCat type={'Authors'} stats={myAuthors} />
      </ImageBackground>
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
  image: {
    flex: 1,
  },
  statText: {
    color: '#fff',
    fontSize: 20,
  },
  statNum: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statTextBottom: {
    color: '#fff',
    fontSize: 20,
  },
  overall: {
    flex: 4,
    // borderBottomColor: 'grey',
    // borderBottomWidth: StyleSheet.hairlineWidth,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    color: 'blue',
  },
});

export default Stats;
