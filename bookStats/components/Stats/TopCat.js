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

const TopCat = ({type}) => {
  return (
    <View style={styles.topCat}>
      <Text style={styles.baseText}>Top {type}</Text>

      <View style={styles.topView}>
        <View style={styles.topBreakdownLeft}>
          <Text style={styles.statText}>1. Sci-Fi</Text>
          <Text style={styles.statText}>2. Literature</Text>
          <Text style={styles.statText}>3. Personal Development</Text>
          <Text style={styles.statText}>4. Romance</Text>
          <Text style={styles.statText}>5. Biography</Text>
        </View>

        <View style={styles.topBreakdownRight}>
          <Text style={styles.statText}>#</Text>
          <Text style={styles.statText}>#</Text>
          <Text style={styles.statText}>#</Text>
          <Text style={styles.statText}>#</Text>
          <Text style={styles.statText}>#</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topCat: {
    flex: 4,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  baseText: {
    color: '#fff',
    fontSize: 30,
  },
  statText: {
    color: '#fff',
    fontSize: 20,
  },
  topView: {
    flex: 1,
    flexDirection: 'row',
  },
  topBreakdownLeft: {
    flex: 2,
    left: '15%',
    justifyContent: 'center',
  },
  topBreakdownRight: {
    flex: 1,
    left: '50%',
    justifyContent: 'center',
  },
});

export default TopCat;
