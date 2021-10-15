import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import HolidayItem from './HolidayItem';

const data = [
  {id: '1', date: new Date(2021, 9, 18), description: 'Día de la raza'},
  {id: '2', date: new Date(2021, 10, 1), description: 'Día de los muertos'},
  {
    id: '3',
    date: new Date(2021, 10, 15),
    description: 'Conmemoración de la Independencia de Cartagena',
  },
  {id: '4', date: new Date(2021, 11, 8), description: 'Día de la Inmaculada Concepción'},
];

const Separator = () => <View style={styles.separator} />;

export default function HolidaysList() {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <HolidayItem key={item.id} {...item} />}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  separator: {
    height: 8,
  },
});
