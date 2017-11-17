'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/app.js';

class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, 大家好</Text>
        <App />
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('MyReactNativeApp', () => HelloWorld);