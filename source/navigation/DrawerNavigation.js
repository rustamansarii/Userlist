import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import UserListScreen from '../app/screens/UserListScreen';
import UserDetailScreen from '../app/screens/UserDetailScreen';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      <DrawerItemList {...props} labelStyle={styles.drawerItemLabel} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
<Drawer.Navigator 
  drawerContent={(props) => <CustomDrawerContent {...props} />} 
  screenOptions={{ 
    headerStyle: { backgroundColor: '#FFFFFF' },
    headerTintColor: '#000000', 
  }}
>
  <Drawer.Screen name="UserList" component={UserListScreen} />
  {/* <Drawer.Screen name="UserDetail" component={UserDetailScreen} /> */}
</Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContent: { flex: 1, paddingTop: 20 },
  drawerItemLabel: { fontSize: 16, fontWeight: '500', marginLeft: 20 },
});
