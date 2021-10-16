import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import HolidayItem from './HolidayItem';
import SearchInput from './SearchInput';

export interface HolidaysListProps {
  data: Holiday[];
}

const Separator = () => <View style={styles.separator} />;

const filterHolidays = (holidays: Holiday[], search: string) =>
  holidays.filter(holiday => holiday.description.toLowerCase().includes(search.toLowerCase()));

export default function HolidaysList({data}: HolidaysListProps) {
  const [items, setItems] = useState(data);

  const handleSearch = useCallback(
    (search: string) => {
      setItems(items => (search ? filterHolidays(items, search) : data));
    },
    [data],
  );

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({item}) => <HolidayItem key={item.id} {...item} />}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={<SearchInput onSearchText={handleSearch} />}
        ListFooterComponent={<Text style={styles.footerText}>{items.length} registros</Text>}
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
  footerText: {
    marginTop: 8,
    textAlign: 'right',
  },
});
