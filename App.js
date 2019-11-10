/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet} from 'react-native';
import RootStack from './src/Navigator/RootStack';

export default class App extends Component {
  render() {
    // eslint-disable-next-line prettier/prettier
    return (
      <RootStack/>
    );
  }
}
