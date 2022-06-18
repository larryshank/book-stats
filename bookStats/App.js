import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.base}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.base}
        // style={backgroundStyle}
      >
        <View style={styles.base}>
          <Text style={styles.baseText}>Hello World</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  base: {
    // marginTop: 32,
    // paddingHorizontal: 24,
    backgroundColor: '#2c3440',
    flex: 1,
    // color: '#fff',
  },
  baseText: {
    color: '#fff',
    fontSize: 40,
  },
});

export default App;
