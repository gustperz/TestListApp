import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import Footer from './components/Footer';

import Header from './components/Header';
import HolidaysList from './components/HolidaysList';

const data: Holiday[] = [
  {id: '1', date: new Date(2021, 9, 18), description: 'Día de la raza'},
  {id: '2', date: new Date(2021, 10, 1), description: 'Día de los muertos'},
  {
    id: '3',
    date: new Date(2021, 10, 15),
    description: 'Conmemoración de la Independencia de Cartagena',
  },
  {id: '4', date: new Date(2021, 11, 8), description: 'Día de la Inmaculada Concepción'},
];

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />

      <Header />

      <View style={styles.container}>
        <HolidaysList data={data} />
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
