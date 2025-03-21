import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserDetailScreen from '../app/screens/UserDetailScreen';
import DrawerNavigation from './DrawerNavigation';

const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#FFFFFF' }, headerTintColor: '#000000' }}>
      <Stack.Screen name="UserList" component={DrawerNavigation} options={{ headerShown: false }}/>
      <Stack.Screen name="UserDetail" component={UserDetailScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
};

export default UserStack;
