import Exponent from 'exponent';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { Router } from '../main';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity
} from 'react-native';

export default class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redoCount: 0
    };
  }

  updateState = () => {
    this.setState({ redoCount: this.state.redoCount + 1 });
  };

  render() {
    return (
      <TouchableOpacity
        key={this.state.redoCount}
        onPress={this.updateState}
        style={styles.container}>
        <View>
          <Animatable.View
            style={styles.floralwhite}
            delay={1300}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.honeydew}
            delay={1200}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.indianred}
            delay={1100}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.aqua}
            delay={1000}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.lavenderblush}
            delay={900}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.aquamarine}
            delay={800}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.darkgreen}
            delay={700}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.crimson}
            delay={600}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.darkgoldenrod}
            delay={500}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.blueviolet}
            delay={400}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.deeppink}
            delay={300}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.darkorange}
            delay={200}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.red}
            delay={100}
            animation="fadeInUpBig"
          />
          <Animatable.View
            style={styles.blue}
            delay={100}
            animation="fadeInUpBig"
          />
          <TouchableOpacity
            onPress={() =>
              this.props.navigator.push(Router.getRoute('second'))}>
            <Animatable.Text
              delay={1500}
              animation="pulse"
              easing="ease-out"
              iterationCount="infinite"
              style={{ fontSize: 25, textAlign: 'center' }}>
              React Native Animations
            </Animatable.Text>
          </TouchableOpacity>
          <Animatable.View
            style={styles.blue}
            delay={100}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.red}
            delay={100}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.darkorange}
            delay={200}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.deeppink}
            delay={300}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.blueviolet}
            delay={400}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.darkgoldenrod}
            delay={500}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.crimson}
            delay={600}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.darkgreen}
            delay={700}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.aquamarine}
            delay={800}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.lavenderblush}
            delay={900}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.aqua}
            delay={1000}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.indianred}
            delay={1100}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.honeydew}
            delay={1200}
            animation="fadeInDownBig"
          />
          <Animatable.View
            style={styles.floralwhite}
            delay={1300}
            animation="fadeInDownBig"
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  red: {
    height: 20,
    width: 400,
    marginBottom: 5,
    backgroundColor: 'red'
  },
  blue: {
    height: 20,
    width: 400,
    marginBottom: 5,
    backgroundColor: 'blue'
  },
  aqua: {
    height: 20,
    width: 400,
    marginBottom: 5,
    backgroundColor: 'aqua'
  },
  aquamarine: {
    height: 20,
    width: 400,
    marginBottom: 5,
    backgroundColor: 'aquamarine'
  },
  blueviolet: {
    height: 20,
    width: 400,
    marginBottom: 5,
    backgroundColor: 'blueviolet'
  },
  crimson: {
    height: 20,
    width: 400,
    marginBottom: 5,
    backgroundColor: 'crimson'
  },
  darkgoldenrod: {
    height: 20,
    width: 400,
    marginBottom: 5,
    backgroundColor: 'darkgoldenrod'
  },
  darkgreen: {
    height: 20,
    width: 400,
    marginBottom: 5,
    backgroundColor: 'darkgreen'
  },
  darkorange: {
    height: 20,
    width: 400,
    marginBottom: 5,
    backgroundColor: 'darkorange'
  },
  darkturquoise: {
    height: 20,
    width: 400,
    marginBottom: 5,
    backgroundColor: 'darkturquoise'
  },
  deeppink: {
    height: 20,
    width: 400,
    marginBottom: 5,
    backgroundColor: 'deeppink'
  },
  deepskyblue: {
    height: 20,
    width: 400,
    marginBottom: 5,
    backgroundColor: 'deepskyblue'
  },
  floralwhite: {
    height: 20,
    width: 400,
    marginBottom: 5,
    backgroundColor: 'floralwhite'
  },
  gold: {
    height: 20,
    width: 400,
    marginBottom: 5,
    backgroundColor: 'gold'
  },
  honeydew: {
    height: 20,
    width: 400,
    marginBottom: 5,
    backgroundColor: 'honeydew'
  },
  indianred: {
    height: 20,
    width: 400,
    marginBottom: 5,
    backgroundColor: 'indianred'
  },
  lavenderblush: {
    height: 20,
    width: 400,
    marginBottom: 5,
    backgroundColor: 'lavenderblush'
  }
});
