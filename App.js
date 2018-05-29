import React from 'react';
import { YellowBox, 
          StyleSheet, 
          Text, 
          View } from 'react-native';
import { Application } from './Nav';

YellowBox.ignoreWarnings(['Warning: ...', 'Remote debugger ...']);

export default class App extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
        <Application />
    );
  }
}