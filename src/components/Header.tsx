import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.headderContainer}>
      <Text style={styles.headderText}>Indra Test React</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
  },
  headderText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
