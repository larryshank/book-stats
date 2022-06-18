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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSquarePlus} from '@fortawesome/free-regular-svg-icons/faSquarePlus';

const Home = () => {
  return (
    <>
      <SafeAreaView style={styles.base}>
        <Text style={styles.title}>Book Stats</Text>
        <View style={styles.nav}>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navText}>Shelves</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navText}>Stats</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.shelf}>
          <Text style={styles.baseText}>Completed Reads</Text>
        </View>
        <View style={styles.shelf}>
          <Text style={styles.baseText}>Started</Text>
        </View>
        <View style={styles.shelf}>
          <Text style={styles.baseText}>Want to Read</Text>
        </View>
        <View style={styles.add}>
          <TouchableHighlight>
            <FontAwesomeIcon
              icon={faSquarePlus}
              style={styles.addIcon}
              size={40}
            />
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
  },
  statusBar: {
    backgroundcolor: 'black',
  },
  base: {
    backgroundColor: '#2c3440',
    flex: 1,
  },
  baseText: {
    color: '#fff',
    fontSize: 30,
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'blue',
    justifyContent: 'space-around',
  },
  navButton: {
    backgroundColor: 'grey',
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  navText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  shelf: {
    flex: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  add: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    color: 'blue',
  },
});

export default Home;
