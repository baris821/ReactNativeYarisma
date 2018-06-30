/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Header from './components/Header';
import Yarisma from './components/yarisma';

export default class App extends React.Component {
  
  state = {
    title : ''
  };

  
  
  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <View style = {{flex:1}}>
          <Yarisma/>
      </View>
    );
  }
}
