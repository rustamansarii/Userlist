import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { heightP } from '../helpers/fontSize';

const UserItem = ({ name, email, phone, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.userCard}>
      <Text style={styles.userName}>{name}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone: {phone}</Text>
    </TouchableOpacity>
  );
};

export default memo(UserItem);

const styles = StyleSheet.create({
  userCard: {
    backgroundColor: '#f9f9f9',
    paddingHorizontal: heightP(30),
    paddingVertical: heightP(40),
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  userName: {
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold',
  },
});
