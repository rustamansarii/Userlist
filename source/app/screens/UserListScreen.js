import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux-toolkit/Features/ApiReducer';
import SearchInput from '../component/SearchInput';
import UserList from '../component/UserList';
import { useNavigation } from '@react-navigation/native';

const UserListScreen = () => {
  const dispatch = useDispatch();
  const { users, loading, error, currentPage, limit } = useSelector((state) => state.users);
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  // Fetch users on initial load or when currentPage changes
  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, limit }));
  }, [dispatch, currentPage]);

  const onRefresh = () => {
    setRefreshing(true);
    // Reset currentPage to 1 for refreshing the data
    dispatch(fetchUsers({ page: 1, limit }));
    setRefreshing(false);
  };

  const handleSearchChange = (text) => setSearchQuery(text);

  const handleLoadMore = () => {
    if (!loading) {
      dispatch(fetchUsers({ page: currentPage + 1, limit }));
    }
  };

  const handleUserSelect = (user) => {
    navigation.navigate('UserDetail', { user });
  };

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading && currentPage === 1) return <ActivityIndicator size="large" />;

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>{error}</Text>
        <Button title="Retry" onPress={() => dispatch(fetchUsers({ page: currentPage, limit }))} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchInput value={searchQuery} onChangeText={handleSearchChange} />
      <UserList
        data={filteredUsers}
        loading={loading}
        onEndReached={handleLoadMore}
        onRefresh={onRefresh}
        refreshing={refreshing}
        handleUserSelect={handleUserSelect}
      />
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
