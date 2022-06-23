import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TopCat = ({type, stats}) => {
  const breakdown = Object.entries(stats).sort((a, b) => b[1] - a[1]);
  return (
    <View style={styles.topCat}>
      <Text style={styles.baseText}>Top {type}</Text>

      <View style={styles.topView}>
        <View style={styles.topBreakdownLeft}>
          {breakdown
            .map((stat, index) => (
              <Text key={index + 1} style={styles.statText}>
                {index + 1}. {stat[0]}
              </Text>
            ))
            .filter((stat, index) => index < 5)}
        </View>

        <View style={styles.topBreakdownRight}>
          {breakdown
            .map((stat, index) => (
              <Text key={index} style={styles.statText}>
                {stat[1]}
              </Text>
            ))
            .filter((stat, index) => index < 5)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topCat: {
    flex: 4,
    // borderBottomColor: 'grey',
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
  baseText: {
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 5,
    fontSize: 30,
  },
  statText: {
    color: '#fff',
    fontSize: 20,
    paddingBottom: 5,
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
