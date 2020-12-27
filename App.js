import React from 'react';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {store, persistor} from './src/store';
import MainStack from './src/navigators/MainStack';

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);
