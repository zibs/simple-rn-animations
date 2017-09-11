
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
  ScrollView
} from 'react-native';

import { Router } from '../App';

export default class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstAni: false,
      secondAni: false,
      thirdAni: false
    };
  }

  runFirst = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ firstAni: true });
  };

  resetFirst = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ firstAni: false });
  };

  runSecond = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ secondAni: true });
  };

  resetSecond = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ secondAni: false });
  };

  runThird = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ thirdAni: true });
  };
  resetThird = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ thirdAni: false });
  };

  fourth = () => {};

  render() {
    let left = this.state.firstAni ? { flex: Math.random() * 1 } : null;
    let mid = this.state.firstAni ? { flex: Math.random() * 1 } : null;
    let right = this.state.firstAni ? { flex: Math.random() * 1 } : null;

    let leftC = this.state.secondAni
      ? { marginTop: Math.floor(Math.random() * 300 + 1) }
      : null;
    let midC = this.state.secondAni
      ? { marginTop: Math.floor(Math.random() * 300 + 1) }
      : null;
    let rightC = this.state.secondAni
      ? { marginTop: Math.floor(Math.random() * 300 + 1) }
      : null;

    let bigC = this.state.thirdAni
      ? { height: 300, width: 300, right: 50 }
      : null;

    let priceA = this.state.fourAni
      ? { height: 300, width: 300, right: 50 }
      : null;

    return (
      <ScrollView style={{ flex: 1, marginTop: 20 }}>
        <View style={[styles.row]}>
          <View style={[styles.square, left, { height: 1300 }]} />
          <View style={[styles.square1, mid, { height: 1300 }]} />
          <View style={[styles.square2, right, { height: 1300 }]} />
        </View>

        <View style={styles.container}>
          <View style={[styles.row, { marginTop: 10 }]}>
            <Button
              raised
              small
              onPress={this.runFirst}
              title="LayoutAnimation #1"
              backgroundColor={'rgb(46, 100, 172)'}
            />
            <Button
              raised
              small
              onPress={this.resetFirst}
              title="Reset"
              backgroundColor={'rgb(46, 100, 172)'}
            />
          </View>

          <View style={[styles.row, { marginTop: 20 }]}>
            <Button
              raised
              small
              onPress={this.runSecond}
              title="LayoutAnimation #2"
              backgroundColor={'rgb(24, 182, 125)'}
            />
            <Button
              raised
              small
              onPress={this.resetSecond}
              title="Reset"
              backgroundColor={'rgb(24, 182, 125)'}
            />
          </View>
          <Button
            raised
            small
            onPress={() => this.props.navigator.push(Router.getRoute('third'))}
            title="next page"
            backgroundColor={'rgb(173, 173, 173)'}
          />

          <View style={styles.row}>
            <View style={[styles.circle, leftC]} />
            <View
              style={[
                styles.circle2,
                midC,
                bigC,
                { alignItems: 'center', justifyContent: 'center' }
              ]}>
              <Text onPress={this.runThird}>#3</Text>
              <Text onPress={this.resetThird}>reset</Text>
            </View>
            <View style={[styles.circle3, rightC]} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  row: {
    height: 50,
    flexDirection: 'row'
    // flex: 1
  },
  square: {
    backgroundColor: 'rgb(171, 141, 231)',
    flex: 1,
    height: 200
  },
  square1: {
    backgroundColor: 'rgb(83, 105, 244)',
    flex: 1,
    height: 200
  },
  square2: {
    backgroundColor: 'rgb(65, 46, 111)',
    flex: 1,
    height: 200
  },
  circle: {
    backgroundColor: 'rgb(241, 87, 30)',
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 1000
  },
  circle2: {
    backgroundColor: 'rgb(223, 59, 23)',
    width: 100,
    height: 100,
    marginRight: 10,
    right: 0,
    borderRadius: 1000
  },
  circle3: {
    backgroundColor: 'rgb(255, 50, 50)',
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 1000
  }
});
