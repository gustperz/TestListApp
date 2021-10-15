import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import Footer from './components/Footer';

import Header from './components/Header';
import HolidaysList from './components/HolidaysList';

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />

      <Header />

      <View style={styles.container}>
        <HolidaysList />
      </View>

      <Footer />
    </SafeAreaView>
  );
};

const backgroundColor = 'white';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor,
    height: '100%',
  },
  container: {
    flexGrow: 1,
  },
});

export default App;
