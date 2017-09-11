import React from 'react';
import * as Animatable from 'react-native-animatable';
import { Button, PricingCard } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  LayoutAnimation,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import { createRouter, NavigationProvider } from '@expo/ex-navigation';
import { Router } from '../App';

const arr = [];

for (var i = 0; i < 500; i++) {
  arr.push(i);
}

export default class home extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = [];
    arr.forEach(value => {
      this.animatedValue[value] = new Animated.Value(0);
    });
  }

  componentDidMount() {
    this.animate();
  }

  animate = () => {
    const animations = arr.map(item => {
      return Animated.timing(this.animatedValue[item], {
        toValue: 1,
        duration: 4000
      });
    });
    Animated.stagger(10, animations).start();
  };

  render() {
    const animations = arr.map((a, i) => {
      return (
        <Animated.View
          key={i}
          style={{
            opacity: this.animatedValue[a],
            height: 20,
            width: 20,
            backgroundColor: 'redrgb(45, 154, 244)',
            marginLeft: 3,
            marginTop: 3
          }}
        />
      );
    });
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.navigator.push(Router.getRoute('fourth'));
        }}>
        <View style={styles.container}>{animations}</View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
