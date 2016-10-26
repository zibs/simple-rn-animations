import Exponent from 'exponent';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import {
  Button,
  PricingCard
} from 'react-native-elements'
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  LayoutAnimation,
  ScrollView
} from 'react-native';
import {
  createRouter,
  NavigationProvider,
} from '@exponent/ex-navigation';

export default class home extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
