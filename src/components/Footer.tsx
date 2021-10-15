import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const myProfileUrl = 'https://github.com/gustperz';

export default function Footer() {
  return (
    <View style={styles.headderContainer}>
      <TouchableOpacity onPress={() => Linking.openURL(myProfileUrl)}>
        <Text style={styles.headderText}>@gustperz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headderContainer: {
    backgroundColor: '#003f82',
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
  },
  headderText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
    textDecorationLine: 'underline',
  },
});
