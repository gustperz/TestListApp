import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function HolidayItem({date, description}: Holiday) {
  return (
    <View style={styles.container}>
      <Text>{date.toDateString()}</Text>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
  },
});
