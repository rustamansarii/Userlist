import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchInput = ({ value, onChangeText }) => {
  return (
    <TextInput
      placeholder="Search users..."
      value={value}
      onChangeText={onChangeText}
      style={styles.searchInput}
    />
  );
};

const styles = StyleSheet.create({
  searchInput: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, paddingLeft: 10 },
});

export default SearchInput;
