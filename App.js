import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'; 
import store from './source/redux-toolkit/App/Store';
import UserStack from './source/navigation/StackNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <UserStack />
      </NavigationContainer>
    </Provider>
  );
}
