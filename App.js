import Expo from 'expo'
import React from 'react';
import * as Animatable from 'react-native-animatable';
import home from './screens/home';
import second from './screens/second';
import third from './screens/third';
import fourth from './screens/fourth';
import fifth from './screens/fifth';
import six from './screens/six';
import {
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

export const Router = createRouter(() => ({
  home: () => home,
  second: () => second,
  third: () => third,
  fourth: () => fourth,
  fifth: () => fifth,
  six: () => six,
}));

export default class App extends React.Component {
  render() {
    return (
     <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
     </NavigationProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Exponent.registerRootComponent(App);
