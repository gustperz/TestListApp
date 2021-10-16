import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export interface SearchInputProps {
  onSearchText: (query: string) => void;
}

export default function SearchInput({onSearchText}: SearchInputProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => onSearchText(query), query ? 500 : 0);

    return () => clearTimeout(timer);
  }, [onSearchText, query]);

  return (
    <View>
      <TextInput
        placeholder="Busqueda"
        onChangeText={setQuery}
        value={query}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 12,
    backgroundColor: '#fafafa',
    borderColor: '#e0e0e0',
    borderWidth: 0.5,
    borderRadius: 8,
    elevation: 2,
    marginBottom: 24,
  },
});
