import React from 'react';
import { FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import UserItem from '../component/UserItem';

const UserList = ({ data, loading, onEndReached, onRefresh, refreshing, handleUserSelect }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({ item }) => (
        <UserItem
          name={item.name || ""}
          email={item.email || ""}
          phone={item.phone || ""}
          onSelect={() => handleUserSelect(item)}
        />
      )}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading && <ActivityIndicator />}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    />
  );
};

export default UserList;
