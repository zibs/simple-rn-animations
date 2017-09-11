
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
  ListView
} from 'react-native';

import { Router } from '../App';

const arr = [];

for (var i = 0; i < 100; i++) {
  arr.push(i);
}
const colors = [
  'aliceblue',
  'antiquewhite',
  'aqua',
  'aquamarine',
  'azure',
  'beige',
  'bisque',
  'black',
  'blanchedalmond',
  'blue',
  'blueviolet',
  'brown',
  'burlywood',
  'cadetblue',
  'chartreuse',
  'chocolate',
  'coral',
  'cornflowerblue',
  'cornsilk',
  'crimson',
  'cyan',
  'darkblue',
  'darkcyan',
  'darkgoldenrod',
  'darkgray',
  'darkgreen',
  'darkgrey',
  'darkkhaki',
  'darkmagenta',
  'darkolivegreen',
  'darkorange',
  'darkorchid',
  'darkred',
  'darksalmon'
];

export default class fourth extends React.Component {
  constructor(props) {
    super(props);
    let dataObjects = arr;
    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    };
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, marginTop: 20 }}>
        <Text style={{ textAlign: 'center' }}>Laggy List View</Text>
        <Text
          onPress={() => {
            this.props.navigator.push(Router.getRoute('fifth'));
          }}>
          Next Page
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => (
            <Animatable.View
              animation={'lightSpeedIn'}
              style={{
                backgroundColor: `${colors[
                  Math.floor(Math.random() * colors.length)
                ]}`,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                marginVertical: 3,
                height: 50
              }}>
              <Text>{rowData}</Text>
            </Animatable.View>
          )}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
