import Exponent from 'exponent';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import home from './screens/home';
import second from './screens/second';
import third from './screens/third';
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
} from '@exponent/ex-navigation';

export const Router = createRouter(() => ({
  home: () => home,
  second: () => second,
  third: () => third,
  // about: () => AboutScreen,
  // tabNavigationExample: () => TabNavigationExample,
  // slidingTabNavigationExample: () => SlidingTabNavigationExample,
  // alertBarsExample: () => AlertBarsExample,
  // translucentBarExample: () => TranslucentBarExample,
  // eventEmitterExample: () => EventEmitterExample,
  // customNavigationBarExample: () => CustomNavigationBarExample,
}));

class App extends React.Component {
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

Exponent.registerRootComponent(App);
